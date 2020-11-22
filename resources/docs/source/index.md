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
    -d '{"name":"praesentium","surname":"excepturi","phone":"qui","street":"qui","street_number":"illum","city":"iure","postal":"itaque","is_company":false,"email":"commodi","password":"est","password_confirmation":"a","company_nip":1,"company_name":"laudantium","company_phone":"non","company_street":"dolorum","company_street_number":"laudantium","company_city":"enim","company_postal":"architecto","company_description":"rerum","company_slogan":"dolorum","company_contacts":[],"category_id":6}'

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
    "name": "praesentium",
    "surname": "excepturi",
    "phone": "qui",
    "street": "qui",
    "street_number": "illum",
    "city": "iure",
    "postal": "itaque",
    "is_company": false,
    "email": "commodi",
    "password": "est",
    "password_confirmation": "a",
    "company_nip": 1,
    "company_name": "laudantium",
    "company_phone": "non",
    "company_street": "dolorum",
    "company_street_number": "laudantium",
    "company_city": "enim",
    "company_postal": "architecto",
    "company_description": "rerum",
    "company_slogan": "dolorum",
    "company_contacts": [],
    "category_id": 6
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
    -d '{"email":"suscipit","password":"amet"}'

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
    "email": "suscipit",
    "password": "amet"
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
    -d '{"name":"dignissimos","surname":"aspernatur","email":"sit","company_nip":12,"company_name":"dolores","company_phone":"excepturi","company_street":"laboriosam","company_street_number":"omnis","company_city":"ut","company_postal":"dolore","company_description":"accusamus","company_slogan":"odit","category_id":17,"company_contacts":[]}'

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
    "name": "dignissimos",
    "surname": "aspernatur",
    "email": "sit",
    "company_nip": 12,
    "company_name": "dolores",
    "company_phone": "excepturi",
    "company_street": "laboriosam",
    "company_street_number": "omnis",
    "company_city": "ut",
    "company_postal": "dolore",
    "company_description": "accusamus",
    "company_slogan": "odit",
    "category_id": 17,
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

<!-- START_2eee1ffe54f685bdbed2866b02227832 -->
## api/company/latest

Returns 3 latest companies

> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/api/company/latest" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/company/latest"
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
    "data": {
        "1": {
            "id": 2,
            "company_nip": 1111111111,
            "company_name": "3fb1e",
            "company_slug": "3fb1e",
            "company_phone": "3fb1e",
            "company_street": "3fb1e",
            "company_street_number": "3fb1e",
            "company_city": "3fb1e",
            "company_postal": "3fb1e",
            "company_description": "3fb1e",
            "company_slogan": "3fb1e",
            "created_at": "2020-11-18T04:58:56.000000Z",
            "updated_at": null,
            "category": {
                "id": 7,
                "name": "Elektronika",
                "slug": "elektronika",
                "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/elektronika.jpg"
            },
            "company_contacts": [
                {
                    "id": 3,
                    "name": "3fb1e0",
                    "contact": "3fb1e0",
                    "company_id": 2,
                    "created_at": null,
                    "updated_at": null
                },
                {
                    "id": 4,
                    "name": "3fb1e1",
                    "contact": "3fb1e1",
                    "company_id": 2,
                    "created_at": null,
                    "updated_at": null
                }
            ]
        },
        "0": {
            "id": 1,
            "company_nip": 1111111111,
            "company_name": "22cac",
            "company_slug": "22cac",
            "company_phone": "22cac",
            "company_street": "22cac",
            "company_street_number": "22cac",
            "company_city": "22cac",
            "company_postal": "22cac",
            "company_description": "22cac",
            "company_slogan": "22cac",
            "created_at": "2020-10-19T04:58:55.000000Z",
            "updated_at": null,
            "category": {
                "id": 6,
                "name": "Transport",
                "slug": "transport",
                "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/transport.jpg"
            },
            "company_contacts": [
                {
                    "id": 1,
                    "name": "22cac0",
                    "contact": "22cac0",
                    "company_id": 1,
                    "created_at": null,
                    "updated_at": null
                },
                {
                    "id": 2,
                    "name": "22cac1",
                    "contact": "22cac1",
                    "company_id": 1,
                    "created_at": null,
                    "updated_at": null
                }
            ]
        },
        "4": {
            "id": 5,
            "company_nip": 1111111111,
            "company_name": "c5c74",
            "company_slug": "c5c74",
            "company_phone": "c5c74",
            "company_street": "c5c74",
            "company_street_number": "c5c74",
            "company_city": "c5c74",
            "company_postal": "c5c74",
            "company_description": "c5c74",
            "company_slogan": "c5c74",
            "created_at": "2020-09-04T04:58:56.000000Z",
            "updated_at": null,
            "category": {
                "id": 10,
                "name": "Inne Usługi",
                "slug": "inne-uslugi",
                "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/inne-uslugi.jpg"
            },
            "company_contacts": [
                {
                    "id": 9,
                    "name": "c5c740",
                    "contact": "c5c740",
                    "company_id": 5,
                    "created_at": null,
                    "updated_at": null
                }
            ]
        }
    }
}
```

### HTTP Request
`GET api/company/latest`


<!-- END_2eee1ffe54f685bdbed2866b02227832 -->

<!-- START_8d1557a19aa996ed07561aaff12d51f8 -->
## api/company/{slug}

Returns company by slug

> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/api/company/1?slug=omnis" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/company/1"
);

let params = {
    "slug": "omnis",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

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
    "data": null
}
```

### HTTP Request
`GET api/company/{slug}`

#### Query Parameters

Parameter | Status | Description
--------- | ------- | ------- | -----------
    `slug` |  optional  | string required

<!-- END_8d1557a19aa996ed07561aaff12d51f8 -->

#Orders

Managing Orders
<!-- START_ff07237b5ede60d2c55fb0cd3a3aacc0 -->
## api/orders/{id}

Creating new order

> Example request:

```bash
curl -X POST \
    "http://localhost/Lokando/api/orders/1?id=dolores" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"status":7,"type":12,"products":[]}'

```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/orders/1"
);

let params = {
    "id": "dolores",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "status": 7,
    "type": 12,
    "products": []
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
`POST api/orders/{id}`

#### Query Parameters

Parameter | Status | Description
--------- | ------- | ------- | -----------
    `id` |  optional  | integer required id of company
#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `status` | integer |  required  | 0 - not taken, 1 - taken, 2 - done
        `type` | integer |  required  | 0 - usluga, 1 - koszyki, 2 - jedzenie
        `products` | array |  required  | same id produktow
    
<!-- END_ff07237b5ede60d2c55fb0cd3a3aacc0 -->

<!-- START_9c8e679f3113cc5c115c5c2561c536cb -->
## api/orders/{id}

> Example request:

```bash
curl -X PUT \
    "http://localhost/Lokando/api/orders/1?id=fuga" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"status":20}'

```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/orders/1"
);

let params = {
    "id": "fuga",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "status": 20
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
`PUT api/orders/{id}`

#### Query Parameters

Parameter | Status | Description
--------- | ------- | ------- | -----------
    `id` |  optional  | integer required id of company
#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `status` | integer |  required  | 0 - not taken, 1 - taken, 2 - done
    
<!-- END_9c8e679f3113cc5c115c5c2561c536cb -->

#Product


Product managment
<!-- START_1075cca837341737c05bc535198b1f38 -->
## api/{id}/products

Returns company product based on id

> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/api/1/products" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/1/products"
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
`GET api/{id}/products`


<!-- END_1075cca837341737c05bc535198b1f38 -->

<!-- START_183dbd753d5c61c899e9d116e422bdd1 -->
## api/products/own

Returns all currently user's company products

> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/api/products/own" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/products/own"
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
`GET api/products/own`


<!-- END_183dbd753d5c61c899e9d116e422bdd1 -->

<!-- START_05b4383f00fd57c4828a831e7057e920 -->
## api/products

Stores new Product

> Example request:

```bash
curl -X POST \
    "http://localhost/Lokando/api/products" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"illum","short_description":"dolores","long_description":"sunt","price":15,"type":2}'

```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/products"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "illum",
    "short_description": "dolores",
    "long_description": "sunt",
    "price": 15,
    "type": 2
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
`POST api/products`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `name` | string |  required  | 
        `short_description` | string |  required  | 
        `long_description` | string |  optional  | optional
        `price` | integer |  required  | null if type 0
        `type` | integer |  required  | 0,1,2
    
<!-- END_05b4383f00fd57c4828a831e7057e920 -->

<!-- START_7b1b863a682a5bcb2a423df0d56eec77 -->
## api/products/search

> Example request:

```bash
curl -X POST \
    "http://localhost/Lokando/api/products/search" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"phrase":"est","category":4,"order_by":"qui","ascending":false}'

```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/products/search"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "phrase": "est",
    "category": 4,
    "order_by": "qui",
    "ascending": false
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
`POST api/products/search`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `phrase` | string |  required  | 
        `category` | integer |  optional  | optional
        `order_by` | string |  optional  | optional
        `ascending` | boolean |  optional  | optional
    
<!-- END_7b1b863a682a5bcb2a423df0d56eec77 -->

<!-- START_241fd2204f9f5b65c7aa7c9618dcca22 -->
## api/products/{id}

Updates Product

> Example request:

```bash
curl -X PUT \
    "http://localhost/Lokando/api/products/1?id=optio" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"tempora","short_description":"laboriosam","long_description":"commodi","price":5,"type":19}'

```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/products/1"
);

let params = {
    "id": "optio",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "tempora",
    "short_description": "laboriosam",
    "long_description": "commodi",
    "price": 5,
    "type": 19
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
`PUT api/products/{id}`

#### Query Parameters

Parameter | Status | Description
--------- | ------- | ------- | -----------
    `id` |  optional  | integer required
#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `name` | string |  required  | 
        `short_description` | string |  required  | 
        `long_description` | string |  optional  | optional
        `price` | integer |  required  | null if type 0
        `type` | integer |  required  | 0,1,2
    
<!-- END_241fd2204f9f5b65c7aa7c9618dcca22 -->

<!-- START_2aba0d37d71f9f7fdc89261ceb107ba6 -->
## api/products/{id}/rate

Rates Product

> Example request:

```bash
curl -X PUT \
    "http://localhost/Lokando/api/products/1/rate?id=et" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"rate":2}'

```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/products/1/rate"
);

let params = {
    "id": "et",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "rate": 2
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
`PUT api/products/{id}/rate`

#### Query Parameters

Parameter | Status | Description
--------- | ------- | ------- | -----------
    `id` |  optional  | integer required
#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `rate` | integer |  required  | between 1 and 5
    
<!-- END_2aba0d37d71f9f7fdc89261ceb107ba6 -->

<!-- START_86e0ac5d4f8ce9853bc22fd08f2a0109 -->
## api/products

Returns all products with pagination

> Example request:

```bash
curl -X GET \
    -G "http://localhost/Lokando/api/products" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/products"
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
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "name": "iste praesentium et",
                "short_description": "Repellat omnis cumque quasi earum. Dignissimos et ex sed nam ipsa natus. Repudiandae eos consequatur tempora tenetur id. Ut consequuntur sint reprehenderit.",
                "long_description": "Sit sunt quas voluptas dolor corrupti. Beatae sunt laborum inventore nesciunt quas voluptas ipsum ex. Et ratione quisquam ab quisquam sapiente soluta harum. Omnis et omnis magni tenetur qui in repellendus quae. Totam ut et quia adipisci. Distinctio magnam voluptatem odio culpa voluptatem. Aut vitae alias vel ducimus.",
                "price": 18071,
                "type": 2,
                "rating": 3.74,
                "rating_amount": 85,
                "category_id": 10,
                "company_id": 2,
                "created_at": "2020-11-22T04:58:56.000000Z",
                "updated_at": "2020-11-22T04:58:56.000000Z",
                "company": {
                    "id": 2,
                    "company_name": "3fb1e",
                    "company_street": "3fb1e",
                    "company_street_number": "3fb1e",
                    "company_city": "3fb1e",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 3,
                            "name": "3fb1e0",
                            "contact": "3fb1e0",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 4,
                            "name": "3fb1e1",
                            "contact": "3fb1e1",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 2,
                "name": "non aperiam quia",
                "short_description": "Occaecati ad culpa officia non. Blanditiis aut quod animi et. Labore quasi est blanditiis voluptatem.",
                "long_description": "Odit aut dolorem hic non. Nihil error distinctio explicabo laborum soluta. Vero et earum suscipit qui adipisci. Molestiae iure et et quia reiciendis et autem quis. Sit autem et molestiae dolorem repellendus quisquam. Quis aliquam veniam voluptas dolorum. Suscipit eos occaecati eligendi error tempora. Reprehenderit est veniam labore. Dolor ipsum a reprehenderit et eligendi eaque. Voluptatem culpa nulla ducimus aliquid ut omnis quia. Voluptas impedit vel sequi cumque enim libero ducimus itaque.",
                "price": 2217,
                "type": 1,
                "rating": 3.7,
                "rating_amount": 92,
                "category_id": 7,
                "company_id": 1,
                "created_at": "2020-11-22T04:58:56.000000Z",
                "updated_at": "2020-11-22T04:58:56.000000Z",
                "company": {
                    "id": 1,
                    "company_name": "22cac",
                    "company_street": "22cac",
                    "company_street_number": "22cac",
                    "company_city": "22cac",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 1,
                            "name": "22cac0",
                            "contact": "22cac0",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 2,
                            "name": "22cac1",
                            "contact": "22cac1",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 3,
                "name": "excepturi veniam aut",
                "short_description": "Soluta enim et dolor non tenetur error fugit. Dolor nam soluta et accusamus. Molestiae a eligendi placeat sit. Eos aut et at. Quaerat repellat odit iusto a explicabo. Aut itaque adipisci nihil ipsam.",
                "long_description": "Debitis impedit quis sit omnis et quaerat non ratione. Eos eos omnis inventore sit. Repudiandae deleniti id veritatis iste. Ea sint quos quos. Reprehenderit impedit vel voluptas magnam neque quia. Atque alias iste nisi officia dolorum ut. Ab eveniet est sed possimus. Accusantium et nam debitis vero fugit. Rem aut laborum dicta rerum sit facilis. Sit minus et id architecto recusandae. Veniam molestiae ea dolores distinctio nemo ex.",
                "price": null,
                "type": 0,
                "rating": 2.06,
                "rating_amount": 65,
                "category_id": 7,
                "company_id": 2,
                "created_at": "2020-11-22T04:58:56.000000Z",
                "updated_at": "2020-11-22T04:58:56.000000Z",
                "company": {
                    "id": 2,
                    "company_name": "3fb1e",
                    "company_street": "3fb1e",
                    "company_street_number": "3fb1e",
                    "company_city": "3fb1e",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 3,
                            "name": "3fb1e0",
                            "contact": "3fb1e0",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 4,
                            "name": "3fb1e1",
                            "contact": "3fb1e1",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 4,
                "name": "natus unde incidunt",
                "short_description": "Voluptatem maxime minima aut expedita voluptatum neque nihil fuga. Voluptate laboriosam sed iusto dignissimos repellendus. Eius reiciendis cum dolor in. Est porro necessitatibus aut ut tempora.",
                "long_description": "A ea voluptates repellat molestias sint repellendus quia iure. Reiciendis laboriosam odit in ea accusantium sunt ipsa. Ipsa blanditiis quod ullam dolor voluptate unde et velit. Enim delectus error nihil repudiandae aut minus. Ut debitis aut voluptas numquam facilis dicta maiores. Eos quos earum eum magni. Voluptatem et cupiditate et reiciendis totam autem rerum. Porro ratione fugit dolor omnis qui.",
                "price": 11179,
                "type": 1,
                "rating": 2.43,
                "rating_amount": 9,
                "category_id": 7,
                "company_id": 3,
                "created_at": "2020-11-22T04:58:56.000000Z",
                "updated_at": "2020-11-22T04:58:56.000000Z",
                "company": {
                    "id": 3,
                    "company_name": "022f0",
                    "company_street": "022f0",
                    "company_street_number": "022f0",
                    "company_city": "022f0",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 5,
                            "name": "022f00",
                            "contact": "022f00",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 5,
                "name": "beatae saepe ut",
                "short_description": "Voluptas reiciendis fuga exercitationem esse et minus. Nihil et qui at laborum nihil. Necessitatibus dicta nihil ipsam aliquid vero voluptatem. Quia in inventore qui nisi repellendus omnis.",
                "long_description": "Natus aperiam occaecati est et sed eos. Cumque mollitia aut quaerat. Sapiente voluptates omnis odio exercitationem. Autem ex mollitia maiores saepe eos. Odio quia laboriosam quia odio voluptatem voluptas molestias. Iure in voluptates dolor non qui ut perferendis. Sit ullam amet ipsam laborum aliquid dicta saepe. Repudiandae ducimus eum similique odit sint incidunt nemo velit.",
                "price": 18699,
                "type": 1,
                "rating": 0.72,
                "rating_amount": 76,
                "category_id": 8,
                "company_id": 2,
                "created_at": "2020-11-22T04:58:56.000000Z",
                "updated_at": "2020-11-22T04:58:56.000000Z",
                "company": {
                    "id": 2,
                    "company_name": "3fb1e",
                    "company_street": "3fb1e",
                    "company_street_number": "3fb1e",
                    "company_city": "3fb1e",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 3,
                            "name": "3fb1e0",
                            "contact": "3fb1e0",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 4,
                            "name": "3fb1e1",
                            "contact": "3fb1e1",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 6,
                "name": "excepturi totam ea",
                "short_description": "Dolorem et id quisquam minima. Nemo ea quasi quaerat qui esse atque quasi. Non maiores rerum aliquid aut voluptas est.",
                "long_description": "Id aliquid doloribus magni vitae ea dolores. Ut vero quo dolor minima consequatur quia quibusdam. Omnis quos error nesciunt asperiores. Voluptatem molestias consequuntur fugit dolor molestiae dolor sit. Pariatur qui harum quasi ut dolorem reiciendis magnam. Odio et rerum et veniam nemo distinctio repudiandae. Rerum facilis ut fugiat sed quod veniam. Nesciunt rerum soluta mollitia itaque quibusdam. Quis voluptate sint animi sit.",
                "price": null,
                "type": 0,
                "rating": 4.16,
                "rating_amount": 73,
                "category_id": 6,
                "company_id": 2,
                "created_at": "2020-11-22T04:58:56.000000Z",
                "updated_at": "2020-11-22T04:58:56.000000Z",
                "company": {
                    "id": 2,
                    "company_name": "3fb1e",
                    "company_street": "3fb1e",
                    "company_street_number": "3fb1e",
                    "company_city": "3fb1e",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 3,
                            "name": "3fb1e0",
                            "contact": "3fb1e0",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 4,
                            "name": "3fb1e1",
                            "contact": "3fb1e1",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 7,
                "name": "earum eius sed",
                "short_description": "Sunt consequatur inventore illum provident consequuntur animi. Voluptatem perferendis non accusamus aperiam omnis autem consequatur aut.",
                "long_description": "Inventore delectus fuga autem. Enim magni vel et sed fugit. A voluptatem accusantium rerum est dolor iste tempora. Dolores omnis magnam animi quis totam. Eos consequatur quos quia veritatis. Pariatur ducimus sit velit. Delectus ex non aperiam cum voluptates tenetur. Tempore sunt possimus quam et voluptatem. Est illum voluptas soluta enim. Debitis numquam deleniti hic consequatur distinctio possimus. Omnis molestiae sit cum ex impedit ex. Aut nostrum molestias repellat sit et.",
                "price": 17077,
                "type": 2,
                "rating": 3.88,
                "rating_amount": 43,
                "category_id": 9,
                "company_id": 3,
                "created_at": "2020-11-22T04:58:56.000000Z",
                "updated_at": "2020-11-22T04:58:56.000000Z",
                "company": {
                    "id": 3,
                    "company_name": "022f0",
                    "company_street": "022f0",
                    "company_street_number": "022f0",
                    "company_city": "022f0",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 5,
                            "name": "022f00",
                            "contact": "022f00",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 8,
                "name": "ea voluptatem voluptatem",
                "short_description": "Fugiat voluptatum hic fuga debitis architecto. Adipisci et qui quia expedita. Numquam tempora sed magnam inventore. Consequatur id nisi ducimus ipsam consequuntur labore quidem nesciunt.",
                "long_description": "Fugiat deleniti qui odio est voluptates. Maxime nostrum sed aperiam quia et aut est. Tempore quia qui consequatur optio. Aut voluptas voluptatem incidunt ratione neque aut possimus. Aperiam error et quam facere esse non quibusdam enim. Et velit ut quia aut. Aperiam quia soluta fugiat. Laboriosam rerum voluptatibus qui et eius dignissimos facilis. Ipsa assumenda consectetur quisquam eos illo quibusdam vel sit.",
                "price": 13245,
                "type": 2,
                "rating": 2.4,
                "rating_amount": 19,
                "category_id": 5,
                "company_id": 4,
                "created_at": "2020-11-22T04:58:56.000000Z",
                "updated_at": "2020-11-22T04:58:56.000000Z",
                "company": {
                    "id": 4,
                    "company_name": "344c9",
                    "company_street": "344c9",
                    "company_street_number": "344c9",
                    "company_city": "344c9",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 6,
                            "name": "344c90",
                            "contact": "344c90",
                            "company_id": 4,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 7,
                            "name": "344c91",
                            "contact": "344c91",
                            "company_id": 4,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 8,
                            "name": "344c92",
                            "contact": "344c92",
                            "company_id": 4,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 9,
                "name": "magnam iure eveniet",
                "short_description": "Totam dolore accusamus labore est. Autem est odio esse omnis optio velit ut eveniet. Est perferendis tempore blanditiis esse reprehenderit qui beatae. Possimus sint ex in praesentium.",
                "long_description": "Repellendus voluptas voluptatibus mollitia ea repellat recusandae nihil. Ducimus et sed necessitatibus nobis. Rem ut quasi pariatur commodi. Officia hic quo perferendis. Reiciendis nostrum nisi aut quam ipsa itaque qui. Odit praesentium dolores eos harum. Beatae in est repellat harum et unde qui officia.",
                "price": 18076,
                "type": 2,
                "rating": 1.75,
                "rating_amount": 99,
                "category_id": 10,
                "company_id": 2,
                "created_at": "2020-11-22T04:58:56.000000Z",
                "updated_at": "2020-11-22T04:58:56.000000Z",
                "company": {
                    "id": 2,
                    "company_name": "3fb1e",
                    "company_street": "3fb1e",
                    "company_street_number": "3fb1e",
                    "company_city": "3fb1e",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 3,
                            "name": "3fb1e0",
                            "contact": "3fb1e0",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 4,
                            "name": "3fb1e1",
                            "contact": "3fb1e1",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 10,
                "name": "doloremque placeat provident",
                "short_description": "Quibusdam inventore voluptates est incidunt esse porro odio rerum. Nobis reiciendis officiis cumque quo ea saepe. Quas omnis aut sunt corporis quo eos.",
                "long_description": "Ut est et minima vero expedita. Nesciunt qui voluptas laborum odio. Maiores magni repudiandae non natus sint. Commodi maxime est voluptate aliquid. Minus sint vitae explicabo dignissimos. Sint suscipit aut dolores doloribus. Dicta libero ullam nemo labore dicta. Laborum voluptate eos nesciunt excepturi ea sit qui consequatur. Numquam illum in qui numquam est. Voluptas qui eos aut qui. Impedit consequatur dolore eos eaque animi.",
                "price": 18302,
                "type": 2,
                "rating": 3.84,
                "rating_amount": 49,
                "category_id": 7,
                "company_id": 2,
                "created_at": "2020-11-22T04:58:56.000000Z",
                "updated_at": "2020-11-22T04:58:56.000000Z",
                "company": {
                    "id": 2,
                    "company_name": "3fb1e",
                    "company_street": "3fb1e",
                    "company_street_number": "3fb1e",
                    "company_city": "3fb1e",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 3,
                            "name": "3fb1e0",
                            "contact": "3fb1e0",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 4,
                            "name": "3fb1e1",
                            "contact": "3fb1e1",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 11,
                "name": "est qui aut",
                "short_description": "Saepe deleniti consequatur perspiciatis. Et distinctio voluptatem adipisci possimus provident ut. Accusantium quia provident quo distinctio.",
                "long_description": "Velit eaque cumque tempore. Sit quis quibusdam omnis aut quasi accusantium. Saepe vel et aliquid. Ut dolorum enim rerum distinctio. Fuga totam omnis qui inventore tempore. Eveniet accusantium qui ut excepturi qui. Dolore molestiae exercitationem optio dolore. Et omnis deleniti labore consequatur. Quo harum unde animi. Quisquam ea est neque error ab rerum. Aperiam et dolorem laudantium eos voluptates excepturi veritatis et.",
                "price": 6949,
                "type": 1,
                "rating": 0.37,
                "rating_amount": 24,
                "category_id": 3,
                "company_id": 2,
                "created_at": "2020-11-22T04:58:56.000000Z",
                "updated_at": "2020-11-22T04:58:56.000000Z",
                "company": {
                    "id": 2,
                    "company_name": "3fb1e",
                    "company_street": "3fb1e",
                    "company_street_number": "3fb1e",
                    "company_city": "3fb1e",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 3,
                            "name": "3fb1e0",
                            "contact": "3fb1e0",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 4,
                            "name": "3fb1e1",
                            "contact": "3fb1e1",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 12,
                "name": "ducimus tempora facere",
                "short_description": "Qui est enim ut et. Ut consequatur aliquam eius aspernatur est sit. Numquam sed est non esse velit architecto. Aperiam nulla a nulla labore.",
                "long_description": "Eligendi animi nihil est. Dolores eveniet veniam delectus sit. Minima eveniet neque necessitatibus nihil reiciendis consequatur. Voluptas eveniet itaque vero impedit sed at. Nulla et recusandae vel dolores provident fuga ut. Autem sit rerum at. Voluptates nostrum voluptatem ducimus ipsum ipsa soluta. At molestiae ex sunt rerum cum vel. Esse repellat iusto quisquam. Iusto est aspernatur ex rerum eos.",
                "price": 1865,
                "type": 2,
                "rating": 0.51,
                "rating_amount": 3,
                "category_id": 6,
                "company_id": 3,
                "created_at": "2020-11-22T04:58:56.000000Z",
                "updated_at": "2020-11-22T04:58:56.000000Z",
                "company": {
                    "id": 3,
                    "company_name": "022f0",
                    "company_street": "022f0",
                    "company_street_number": "022f0",
                    "company_city": "022f0",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 5,
                            "name": "022f00",
                            "contact": "022f00",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 13,
                "name": "odio natus dolor",
                "short_description": "Adipisci enim atque commodi cumque est. Perspiciatis excepturi consequatur qui similique at labore. Ut ducimus aliquid adipisci architecto voluptate ipsam sed.",
                "long_description": "Tenetur enim reiciendis temporibus nisi. Eos rem velit eius vitae atque et reiciendis. Pariatur quod dolor deserunt id consequatur facilis. Dolor qui modi eos id necessitatibus consequuntur. Eos laudantium suscipit quod itaque saepe. Alias qui placeat at ea consequatur. Alias qui voluptatum ipsam. Sequi ipsum sequi earum cupiditate tempore. In dolores veniam numquam quibusdam illum. Natus vel dolorum odio suscipit consequatur.",
                "price": 9660,
                "type": 2,
                "rating": 3.18,
                "rating_amount": 89,
                "category_id": 3,
                "company_id": 4,
                "created_at": "2020-11-22T04:58:56.000000Z",
                "updated_at": "2020-11-22T04:58:56.000000Z",
                "company": {
                    "id": 4,
                    "company_name": "344c9",
                    "company_street": "344c9",
                    "company_street_number": "344c9",
                    "company_city": "344c9",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 6,
                            "name": "344c90",
                            "contact": "344c90",
                            "company_id": 4,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 7,
                            "name": "344c91",
                            "contact": "344c91",
                            "company_id": 4,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 8,
                            "name": "344c92",
                            "contact": "344c92",
                            "company_id": 4,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 14,
                "name": "sed et nostrum",
                "short_description": "Explicabo quia delectus error voluptatem rerum dignissimos sit. Numquam ea aut mollitia beatae dolorem quas.",
                "long_description": "Corporis quia at quasi facilis eum. Voluptatibus cum et nam recusandae voluptas. Debitis sit neque quo deserunt laudantium. Ea sint voluptates nostrum quibusdam facilis laborum eius. Vitae deleniti velit qui in. Asperiores porro ex fuga magni aut. Et ipsum suscipit fuga recusandae fugit aut. Molestiae reprehenderit blanditiis vitae quibusdam alias quia optio. Quod recusandae sint modi ipsa. Aut vel perspiciatis sint dolore repellat aut et modi.",
                "price": 1249,
                "type": 2,
                "rating": 0.42,
                "rating_amount": 67,
                "category_id": 10,
                "company_id": 1,
                "created_at": "2020-11-22T04:58:56.000000Z",
                "updated_at": "2020-11-22T04:58:56.000000Z",
                "company": {
                    "id": 1,
                    "company_name": "22cac",
                    "company_street": "22cac",
                    "company_street_number": "22cac",
                    "company_city": "22cac",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 1,
                            "name": "22cac0",
                            "contact": "22cac0",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 2,
                            "name": "22cac1",
                            "contact": "22cac1",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 15,
                "name": "optio natus et",
                "short_description": "Est omnis deserunt est et veritatis ullam dolorem. Dolores nobis a consequatur sint ipsum. Culpa est eos velit veritatis veritatis. Enim tenetur qui facere aut. Quia autem vel hic qui eveniet.",
                "long_description": "Distinctio nihil neque sint iusto eum est illo. Enim iusto mollitia non explicabo voluptas. Ducimus maxime labore minus dolorum accusantium amet. Consequatur nam voluptatem soluta nemo eum eos maxime. Pariatur est qui id facilis. Sed id corporis magni sed voluptates maxime iusto. Animi id explicabo nisi praesentium. Aut voluptas sint unde aut. Debitis perspiciatis culpa pariatur est. Quasi aut id dignissimos sapiente voluptas et iure.",
                "price": 2243,
                "type": 1,
                "rating": 3.26,
                "rating_amount": 24,
                "category_id": 8,
                "company_id": 1,
                "created_at": "2020-11-22T04:58:56.000000Z",
                "updated_at": "2020-11-22T04:58:56.000000Z",
                "company": {
                    "id": 1,
                    "company_name": "22cac",
                    "company_street": "22cac",
                    "company_street_number": "22cac",
                    "company_city": "22cac",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 1,
                            "name": "22cac0",
                            "contact": "22cac0",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 2,
                            "name": "22cac1",
                            "contact": "22cac1",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            }
        ],
        "first_page_url": "http:\/\/localhost\/api\/products?page=1",
        "from": 1,
        "last_page": 7,
        "last_page_url": "http:\/\/localhost\/api\/products?page=7",
        "next_page_url": "http:\/\/localhost\/api\/products?page=2",
        "path": "http:\/\/localhost\/api\/products",
        "per_page": 15,
        "prev_page_url": null,
        "to": 15,
        "total": 100
    }
}
```

### HTTP Request
`GET api/products`


<!-- END_86e0ac5d4f8ce9853bc22fd08f2a0109 -->

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
    -d '{"name":"enim","surname":"temporibus","phone":"accusantium","street":"doloribus","street_number":"vel","city":"quibusdam","postal":"earum","email":"ut"}'

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
    "name": "enim",
    "surname": "temporibus",
    "phone": "accusantium",
    "street": "doloribus",
    "street_number": "vel",
    "city": "quibusdam",
    "postal": "earum",
    "email": "ut"
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


