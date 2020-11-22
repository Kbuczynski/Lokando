import Axios from "axios";
import Cookies from "universal-cookie";

const aesjs = require("aes-js");

const key = [53, 83, 4, 16, 56, 94, 84, 29, 73, 10, 62, 34, 34, 13, 8, 56];
const cookies = new Cookies();
const cookieOptions = {
    path: "/",
    sameSite: "strict"
};

class ApiClass {
    constructor() {
        this.onUnauthorized = null;
        this.baseUrl =
            window.apiUrl && window.apiUrl !== "" ? window.apiUrl : "/api";

        /**
         * Allow this endpoint to run without authentication token
         * @type {string[]}
         */
        this.allowedEndpoints = [
            "/auth/login",
            "/auth/register",
            "/categories"
        ];

        this.authorizedEndpoints = [];

        /**
         * Maximum allowed difference in token expiration time and now before refresh token task is fired
         * @type {number}
         */
        this.maxTokenExpirationDiff = 24 * 60 * 60 * 1000; // 1 day

        this.axios = Axios.create({
            baseURL: this.baseUrl
        });

        this.initHeaders();
        this.initInterceptors();
    }

    /**
     * Setup global headers
     */
    initHeaders() {
        //this.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; // we will send ajax requests

        // check if csrf token is set in app and add it to headers
        let token = document.head.querySelector('meta[name="csrf-token"]');
        if (token) {
            //this.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        }

        // check if oauth token is set and add it to headers
        if (cookies.get("oauth_access_token")) {
            token = this.decryptToken(cookies.get("oauth_access_token"));
            this.axios.defaults.headers.common["Authorization"] = token;
        }
    }

    /**
     * Setup request and response interceptors
     */
    initInterceptors() {
        let $this = this;

        // request
        this.axios.interceptors.request.use(
            function(config) {
                config.url = config.url.replace(config.baseURL, "");
                config.url = config.url.replace("/api", "");

                let endpoint = config.url.replace(config.baseURL, "");
                if (endpoint.indexOf("/oauth") > -1) {
                    config.baseURL = config.baseURL.replace("/api", "");
                }

                if (!$this.isAllowedEndpoint(endpoint)) {
                    return $this
                        .checkToken()
                        .then(() => {
                            return config;
                        })
                        .catch(() => {
                            return Promise.reject(
                                "Endpoint is not allowed for unathoriszed user"
                            );
                        });
                } else {
                    return config;
                }
            },
            function(error) {
                return Promise.reject(error);
            }
        );

        // response
        this.axios.interceptors.response.use(
            function(response) {
                if (response) {
                    let endpoint = response.config.url.replace(
                        response.config.baseURL,
                        ""
                    );

                    if (endpoint === "/auth/login") {
                        cookies.set(
                            "oauth_access_token",
                            $this.encryptToken(response.data.data.access_token),
                            cookieOptions
                        );
                        cookies.set(
                            "oauth_refresh_token",
                            $this.encryptToken(
                                response.data.data.refresh_token
                            ),
                            cookieOptions
                        );
                        cookies.set(
                            "oauth_expires",
                            Date.now() + response.data.data.expires_in * 1000,
                            cookieOptions
                        );

                        $this.axios.defaults.headers.common["Authorization"] =
                            response.data.data.access_token;
                    }
                }
                return response;
            },
            function(error) {
                console.log(error);
                if (error.response.status && error.response.status === 401) {
                    if (typeof $this.onUnauthorized === "function") {
                        $this.clearToken();
                        $this.onUnauthorized();
                    }
                }

                return Promise.reject(error);
            }
        );
    }

    isAllowedEndpoint(endpoint) {
        return this.allowedEndpoints.indexOf(endpoint) > -1;
    }

    isAuthorizedEndpoint(endpoint) {
        return this.authorizedEndpoints.indexOf(endpoint) > -1;
    }

    checkToken() {
        if (cookies.get("oauth_access_token")) {
            if (cookies.get("oauth_expires")) {
                let now = Date.now();
                let diff = cookies.get("oauth_expires") - now;
                if (diff < this.maxTokenExpirationDiff) {
                    return this.refreshToken();
                } else {
                    return Promise.resolve();
                }
            } else {
                return Promise.reject("There is no token expiration data.");
            }
        } else {
            return Promise.reject("There is no token. Authenticate first!");
        }
    }

    refreshToken() {
        return this.axios.get("/token");
    }

    encryptToken(token) {
        let textBytes = aesjs.utils.utf8.toBytes(token);
        let aesCtr = new aesjs.ModeOfOperation.ctr(key);
        let encryptedBytes = aesCtr.encrypt(textBytes);
        return aesjs.utils.hex.fromBytes(encryptedBytes); // to hex
    }

    decryptToken(encryptedData) {
        let encryptedBytes = aesjs.utils.hex.toBytes(encryptedData);
        let aesCtr = new aesjs.ModeOfOperation.ctr(key);
        let decryptedBytes = aesCtr.decrypt(encryptedBytes);
        return aesjs.utils.utf8.fromBytes(decryptedBytes); // to text
    }

    clearToken() {
        cookies.remove("oauth_access_token", cookieOptions);
        cookies.remove("oauth_refresh_token", cookieOptions);
        cookies.remove("oauth_expires", cookieOptions);
    }

    request(url) {
        return this.axios.request(url);
    }

    get(url, config) {
        return this.axios.get(url, config);
    }

    delete(url, config) {
        return this.axios.delete(url, config);
    }

    head(url, config) {
        return this.axios.head(url, config);
    }

    options(url, config) {
        return this.axios.options(url, config);
    }

    post(url, params, config) {
        return this.axios.post(url, params, config);
    }

    put(url, params, config) {
        params = params || {};
        if (params instanceof FormData) {
            params.append("_method", "PUT");
        } else {
            params._method = "PUT";
        }
        return this.axios.post(url, params, config);
    }

    patch(url, params, config) {
        return this.axios.patch(url, params, config);
    }

    download(url, onProgress) {
        return this.axios
            .get(url, {
                responseType: "blob",
                onDownloadProgress: onProgress
            })
            .then(response => {
                if (response.headers["content-type"] === "application/json") {
                    let reader = new FileReader();
                    reader.onload = function() {
                        response.data = JSON.parse(reader.result);
                    };
                    reader.readAsText(response.data);

                    return Promise.resolve(response);
                } else {
                    let filename = "file";

                    if (response.headers["content-disposition"]) {
                        let content_disposition = response.headers[
                            "content-disposition"
                        ].split(" ");
                        for (let i = 0; i < content_disposition.length; i++) {
                            if (
                                content_disposition[i].indexOf("filename") > -1
                            ) {
                                filename = content_disposition[i].split("=")[1];
                            }
                        }
                    }

                    let blob = new Blob([response.data], {
                        type:
                            response.headers["content-type"] ||
                            "application/octet-stream"
                    });
                    if (typeof window.navigator.msSaveBlob !== "undefined") {
                        window.navigator.msSaveBlob(blob, filename);
                    } else {
                        var blobURL = window.URL.createObjectURL(blob);
                        var tempLink = document.createElement("a");
                        tempLink.style.display = "none";
                        tempLink.href = blobURL;
                        tempLink.setAttribute("download", filename);

                        if (typeof tempLink.download === "undefined") {
                            tempLink.setAttribute("target", "_blank");
                        }

                        document.body.appendChild(tempLink);
                        tempLink.click();
                        document.body.removeChild(tempLink);
                        window.URL.revokeObjectURL(blobURL);
                    }
                }
            });
    }

    objectToFormData(obj, rootName, ignoreList) {
        var formData = new FormData();

        function appendFormData(data, root) {
            if (!ignore(root)) {
                root = root || "";
                if (data instanceof File) {
                    formData.append(root, data);
                } else if (Array.isArray(data)) {
                    for (var i = 0; i < data.length; i++) {
                        appendFormData(data[i], root + "[" + i + "]");
                    }
                } else if (typeof data === "object" && data) {
                    for (var key in data) {
                        // eslint-disable-next-line no-prototype-builtins
                        if (data.hasOwnProperty(key)) {
                            if (root === "") {
                                appendFormData(data[key], key);
                            } else {
                                appendFormData(
                                    data[key],
                                    root + "[" + key + "]"
                                );
                            }
                        }
                    }
                } else {
                    if (data !== null && typeof data !== "undefined") {
                        formData.append(root, data);
                    }
                }
            }
        }

        function ignore(root) {
            return (
                Array.isArray(ignoreList) &&
                ignoreList.some(function(x) {
                    return x === root;
                })
            );
        }

        appendFormData(obj, rootName);

        return formData;
    }
}

export const API = new ApiClass();
