---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Welcome to the generated API reference.
[Get Postman Collection](http://localhost/Lokando/docs/collection.json)

<!-- END_INFO -->

#Auth


Authorization endpoints
<!-- START_2e1c96dcffcfe7e0eb58d6408f1d619e -->
## api/auth/register

Registers new user
If company_* fields are provided it also creates company profile, and user's optional fields are unnecessary

> Example request:

```bash
curl -X POST \
    "http://localhost/Lokando/api/auth/register" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"quam","surname":"sed","phone":"quis","street":"eum","street_number":"quia","city":"soluta","postal":"expedita","is_company":false,"email":"veniam","password":"voluptatem","password_confirmation":"eos","company_nip":16,"company_name":"modi","company_phone":"rerum","company_street":"sint","company_street_number":"consectetur","company_city":"repellendus","company_postal":"voluptate","company_description":"minus","company_slogan":"velit","company_contacts":[],"category_id":19}'

```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/auth/register"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "quam",
    "surname": "sed",
    "phone": "quis",
    "street": "eum",
    "street_number": "quia",
    "city": "soluta",
    "postal": "expedita",
    "is_company": false,
    "email": "veniam",
    "password": "voluptatem",
    "password_confirmation": "eos",
    "company_nip": 16,
    "company_name": "modi",
    "company_phone": "rerum",
    "company_street": "sint",
    "company_street_number": "consectetur",
    "company_city": "repellendus",
    "company_postal": "voluptate",
    "company_description": "minus",
    "company_slogan": "velit",
    "company_contacts": [],
    "category_id": 19
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/auth/register`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `name` | string |  required  | 
        `surname` | string |  required  | 
        `phone` | string |  optional  | optional DO NOT USE IF ITS COMPANY PROFILE
        `street` | string |  optional  | optional DO NOT USE IF ITS COMPANY PROFILE
        `street_number` | string |  optional  | optiona lDO NOT USE IF ITS COMPANY PROFILE
        `city` | string |  optional  | optional DO NOT USE IF ITS COMPANY PROFILE
        `postal` | string |  optional  | optional DO NOT USE IF ITS COMPANY PROFILE
        `is_company` | boolean |  optional  | optional
        `email` | email |  required  | 
        `password` | string |  required  | 
        `password_confirmation` | string |  required  | 
        `company_nip` | integer |  required  | 
        `company_name` | string |  required  | 
        `company_phone` | string |  required  | 
        `company_street` | string |  required  | 
        `company_street_number` | string |  required  | 
        `company_city` | string |  required  | 
        `company_postal` | string |  required  | 
        `company_description` | string |  required  | 
        `company_slogan` | string |  optional  | optional
        `company_contacts` | array |  optional  | optional [name-string, contact-string]
        `category_id` | integer |  required  | 
    
<!-- END_2e1c96dcffcfe7e0eb58d6408f1d619e -->

<!-- START_a925a8d22b3615f12fca79456d286859 -->
## api/auth/login

Login user using credentials

> Example request:

```bash
curl -X POST \
    "http://localhost/Lokando/api/auth/login" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"email":"excepturi","password":"esse"}'

```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/auth/login"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "email": "excepturi",
    "password": "esse"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/auth/login`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `email` | email |  required  | 
        `password` | string |  required  | 
    
<!-- END_a925a8d22b3615f12fca79456d286859 -->

<!-- START_b19e2ecbb41b5fa6802edaf581aab5f6 -->
## api/me

return user data based on sended token

> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/api/me" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/me"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET api/me`


<!-- END_b19e2ecbb41b5fa6802edaf581aab5f6 -->

<!-- START_00e7e21641f05de650dbe13f242c6f2c -->
## api/logout

removes token from database disabling login possibility

> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/api/logout" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/logout"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET api/logout`


<!-- END_00e7e21641f05de650dbe13f242c6f2c -->

#Category


Categories Managment
<!-- START_109013899e0bc43247b0f00b67f889cf -->
## api/categories

Return list of categories

> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/api/categories" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/categories"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "name": "Gastronomia",
            "slug": "gastronomia",
            "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/gastronomia.jpg"
        },
        {
            "id": 2,
            "name": "Zakupy",
            "slug": "zakupy",
            "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/zakupy.jpg"
        },
        {
            "id": 3,
            "name": "Zdrowie i Uroda",
            "slug": "zdrowie-i-uroda",
            "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/zdrowie-i-uroda.jpg"
        },
        {
            "id": 4,
            "name": "Wyposażenie",
            "slug": "wyposazenie",
            "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/wyposazenie.jpg"
        },
        {
            "id": 5,
            "name": "Edukacja",
            "slug": "edukacja",
            "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/edukacja.jpg"
        },
        {
            "id": 6,
            "name": "Transport",
            "slug": "transport",
            "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/transport.jpg"
        },
        {
            "id": 7,
            "name": "Elektronika",
            "slug": "elektronika",
            "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/elektronika.jpg"
        },
        {
            "id": 8,
            "name": "Zwierzęta",
            "slug": "zwierzeta",
            "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/zwierzeta.jpg"
        },
        {
            "id": 9,
            "name": "Sport i Hobby",
            "slug": "sport-i-hobby",
            "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/sport-i-hobby.jpg"
        },
        {
            "id": 10,
            "name": "Inne Usługi",
            "slug": "inne-uslugi",
            "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/inne-uslugi.jpg"
        }
    ],
    "first_page_url": "http:\/\/localhost\/api\/categories?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http:\/\/localhost\/api\/categories?page=1",
    "next_page_url": null,
    "path": "http:\/\/localhost\/api\/categories",
    "per_page": 15,
    "prev_page_url": null,
    "to": 10,
    "total": 10
}
```

### HTTP Request
`GET api/categories`


<!-- END_109013899e0bc43247b0f00b67f889cf -->

#Company


Company managment
<!-- START_08289eb8070f67ec2732827447292fbc -->
## api/company

Updates company

> Example request:

```bash
curl -X PUT \
    "http://localhost/Lokando/api/company" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"ipsum","surname":"et","email":"laborum","company_nip":14,"company_name":"incidunt","company_phone":"non","company_street":"rerum","company_street_number":"temporibus","company_city":"quis","company_postal":"expedita","company_description":"unde","company_slogan":"vel","category_id":16,"company_contacts":[]}'

```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/company"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "ipsum",
    "surname": "et",
    "email": "laborum",
    "company_nip": 14,
    "company_name": "incidunt",
    "company_phone": "non",
    "company_street": "rerum",
    "company_street_number": "temporibus",
    "company_city": "quis",
    "company_postal": "expedita",
    "company_description": "unde",
    "company_slogan": "vel",
    "category_id": 16,
    "company_contacts": []
}

fetch(url, {
    method: "PUT",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/company`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `name` | string |  required  | 
        `surname` | string |  required  | 
        `email` | email |  required  | 
        `company_nip` | integer |  required  | 
        `company_name` | string |  required  | 
        `company_phone` | string |  required  | 
        `company_street` | string |  required  | 
        `company_street_number` | string |  required  | 
        `company_city` | string |  required  | 
        `company_postal` | string |  required  | 
        `company_description` | string |  required  | 
        `company_slogan` | string |  optional  | optional
        `category_id` | integer |  required  | 
        `company_contacts` | array |  optional  | optional [name-string, contact-string]
    
<!-- END_08289eb8070f67ec2732827447292fbc -->

#Users


Users Managment
<!-- START_00f7d0be1226887c1ffa251c97c8740a -->
## api/user

Updates user

> Example request:

```bash
curl -X PUT \
    "http://localhost/Lokando/api/user" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"doloremque","surname":"ut","phone":"eaque","street":"quia","street_number":"aut","city":"illo","postal":"consequatur","email":"eaque"}'

```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/user"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "doloremque",
    "surname": "ut",
    "phone": "eaque",
    "street": "quia",
    "street_number": "aut",
    "city": "illo",
    "postal": "consequatur",
    "email": "eaque"
}

fetch(url, {
    method: "PUT",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/user`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `name` | string |  required  | 
        `surname` | string |  required  | 
        `phone` | string |  optional  | optional DO NOT USE IF ITS COMPANY PROFILE
        `street` | string |  optional  | optional DO NOT USE IF ITS COMPANY PROFILE
        `street_number` | string |  optional  | optional lDO NOT USE IF ITS COMPANY PROFILE
        `city` | string |  optional  | optional DO NOT USE IF ITS COMPANY PROFILE
        `postal` | string |  optional  | optional DO NOT USE IF ITS COMPANY PROFILE
        `email` | email |  required  | 
    
<!-- END_00f7d0be1226887c1ffa251c97c8740a -->

#general


<!-- START_c6c5c00d6ac7f771f157dff4a2889b1a -->
## _debugbar/open
> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/_debugbar/open" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/_debugbar/open"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": ""
}
```

### HTTP Request
`GET _debugbar/open`


<!-- END_c6c5c00d6ac7f771f157dff4a2889b1a -->

<!-- START_7b167949c615f4a7e7b673f8d5fdaf59 -->
## Return Clockwork output

> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/_debugbar/clockwork/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/_debugbar/clockwork/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": ""
}
```

### HTTP Request
`GET _debugbar/clockwork/{id}`


<!-- END_7b167949c615f4a7e7b673f8d5fdaf59 -->

<!-- START_01a252c50bd17b20340dbc5a91cea4b7 -->
## _debugbar/telescope/{id}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/_debugbar/telescope/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/_debugbar/telescope/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": ""
}
```

### HTTP Request
`GET _debugbar/telescope/{id}`


<!-- END_01a252c50bd17b20340dbc5a91cea4b7 -->

<!-- START_5f8a640000f5db43332951f0d77378c4 -->
## Return the stylesheets for the Debugbar

> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/_debugbar/assets/stylesheets" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/_debugbar/assets/stylesheets"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": ""
}
```

### HTTP Request
`GET _debugbar/assets/stylesheets`


<!-- END_5f8a640000f5db43332951f0d77378c4 -->

<!-- START_db7a887cf930ce3c638a8708fd1a75ee -->
## Return the javascript for the Debugbar

> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/_debugbar/assets/javascript" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/_debugbar/assets/javascript"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": ""
}
```

### HTTP Request
`GET _debugbar/assets/javascript`


<!-- END_db7a887cf930ce3c638a8708fd1a75ee -->

<!-- START_0973671c4f56e7409202dc85c868d442 -->
## Forget a cache key

> Example request:

```bash
curl -X DELETE \
    "http://localhost/Lokando/_debugbar/cache/1/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/_debugbar/cache/1/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE _debugbar/cache/{key}/{tags?}`


<!-- END_0973671c4f56e7409202dc85c868d442 -->

<!-- START_0c068b4037fb2e47e71bd44bd36e3e2a -->
## Authorize a client to access the user&#039;s account.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/oauth/authorize" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/oauth/authorize"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET oauth/authorize`


<!-- END_0c068b4037fb2e47e71bd44bd36e3e2a -->

<!-- START_e48cc6a0b45dd21b7076ab2c03908687 -->
## Approve the authorization request.

> Example request:

```bash
curl -X POST \
    "http://localhost/Lokando/oauth/authorize" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/oauth/authorize"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST oauth/authorize`


<!-- END_e48cc6a0b45dd21b7076ab2c03908687 -->

<!-- START_de5d7581ef1275fce2a229b6b6eaad9c -->
## Deny the authorization request.

> Example request:

```bash
curl -X DELETE \
    "http://localhost/Lokando/oauth/authorize" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/oauth/authorize"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE oauth/authorize`


<!-- END_de5d7581ef1275fce2a229b6b6eaad9c -->

<!-- START_a09d20357336aa979ecd8e3972ac9168 -->
## Authorize a client to access the user&#039;s account.

> Example request:

```bash
curl -X POST \
    "http://localhost/Lokando/oauth/token" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/oauth/token"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST oauth/token`


<!-- END_a09d20357336aa979ecd8e3972ac9168 -->

<!-- START_d6a56149547e03307199e39e03e12d1c -->
## Get all of the authorized tokens for the authenticated user.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/oauth/tokens" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/oauth/tokens"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET oauth/tokens`


<!-- END_d6a56149547e03307199e39e03e12d1c -->

<!-- START_a9a802c25737cca5324125e5f60b72a5 -->
## Delete the given token.

> Example request:

```bash
curl -X DELETE \
    "http://localhost/Lokando/oauth/tokens/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/oauth/tokens/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE oauth/tokens/{token_id}`


<!-- END_a9a802c25737cca5324125e5f60b72a5 -->

<!-- START_abe905e69f5d002aa7d26f433676d623 -->
## Get a fresh transient token cookie for the authenticated user.

> Example request:

```bash
curl -X POST \
    "http://localhost/Lokando/oauth/token/refresh" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/oauth/token/refresh"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST oauth/token/refresh`


<!-- END_abe905e69f5d002aa7d26f433676d623 -->

<!-- START_babcfe12d87b8708f5985e9d39ba8f2c -->
## Get all of the clients for the authenticated user.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/oauth/clients" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/oauth/clients"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET oauth/clients`


<!-- END_babcfe12d87b8708f5985e9d39ba8f2c -->

<!-- START_9eabf8d6e4ab449c24c503fcb42fba82 -->
## Store a new client.

> Example request:

```bash
curl -X POST \
    "http://localhost/Lokando/oauth/clients" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/oauth/clients"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST oauth/clients`


<!-- END_9eabf8d6e4ab449c24c503fcb42fba82 -->

<!-- START_784aec390a455073fc7464335c1defa1 -->
## Update the given client.

> Example request:

```bash
curl -X PUT \
    "http://localhost/Lokando/oauth/clients/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/oauth/clients/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT oauth/clients/{client_id}`


<!-- END_784aec390a455073fc7464335c1defa1 -->

<!-- START_1f65a511dd86ba0541d7ba13ca57e364 -->
## Delete the given client.

> Example request:

```bash
curl -X DELETE \
    "http://localhost/Lokando/oauth/clients/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/oauth/clients/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE oauth/clients/{client_id}`


<!-- END_1f65a511dd86ba0541d7ba13ca57e364 -->

<!-- START_9e281bd3a1eb1d9eb63190c8effb607c -->
## Get all of the available scopes for the application.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/oauth/scopes" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/oauth/scopes"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET oauth/scopes`


<!-- END_9e281bd3a1eb1d9eb63190c8effb607c -->

<!-- START_9b2a7699ce6214a79e0fd8107f8b1c9e -->
## Get all of the personal access tokens for the authenticated user.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/oauth/personal-access-tokens" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/oauth/personal-access-tokens"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET oauth/personal-access-tokens`


<!-- END_9b2a7699ce6214a79e0fd8107f8b1c9e -->

<!-- START_a8dd9c0a5583742e671711f9bb3ee406 -->
## Create a new personal access token for the user.

> Example request:

```bash
curl -X POST \
    "http://localhost/Lokando/oauth/personal-access-tokens" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/oauth/personal-access-tokens"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST oauth/personal-access-tokens`


<!-- END_a8dd9c0a5583742e671711f9bb3ee406 -->

<!-- START_bae65df80fd9d72a01439241a9ea20d0 -->
## Delete the given token.

> Example request:

```bash
curl -X DELETE \
    "http://localhost/Lokando/oauth/personal-access-tokens/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/oauth/personal-access-tokens/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE oauth/personal-access-tokens/{token_id}`


<!-- END_bae65df80fd9d72a01439241a9ea20d0 -->


