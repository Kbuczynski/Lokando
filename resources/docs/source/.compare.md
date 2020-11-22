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
    -d '{"name":"voluptatem","surname":"aut","phone":"optio","street":"quis","street_number":"dolor","city":"dolorem","postal":"nihil","is_company":false,"email":"nesciunt","password":"sapiente","password_confirmation":"quo","company_nip":17,"company_name":"est","company_phone":"sed","company_street":"et","company_street_number":"qui","company_city":"est","company_postal":"dolor","company_description":"asperiores","company_slogan":"rerum","company_contacts":[],"category_id":14}'

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
    "name": "voluptatem",
    "surname": "aut",
    "phone": "optio",
    "street": "quis",
    "street_number": "dolor",
    "city": "dolorem",
    "postal": "nihil",
    "is_company": false,
    "email": "nesciunt",
    "password": "sapiente",
    "password_confirmation": "quo",
    "company_nip": 17,
    "company_name": "est",
    "company_phone": "sed",
    "company_street": "et",
    "company_street_number": "qui",
    "company_city": "est",
    "company_postal": "dolor",
    "company_description": "asperiores",
    "company_slogan": "rerum",
    "company_contacts": [],
    "category_id": 14
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
    -d '{"email":"incidunt","password":"fugit"}'

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
    "email": "incidunt",
    "password": "fugit"
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
    -d '{"name":"numquam","surname":"reiciendis","email":"quia","company_nip":2,"company_name":"sed","company_phone":"dolores","company_street":"rem","company_street_number":"sed","company_city":"consequuntur","company_postal":"eum","company_description":"perferendis","company_slogan":"fugit","category_id":7,"company_contacts":[]}'

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
    "name": "numquam",
    "surname": "reiciendis",
    "email": "quia",
    "company_nip": 2,
    "company_name": "sed",
    "company_phone": "dolores",
    "company_street": "rem",
    "company_street_number": "sed",
    "company_city": "consequuntur",
    "company_postal": "eum",
    "company_description": "perferendis",
    "company_slogan": "fugit",
    "category_id": 7,
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
        "2": {
            "id": 3,
            "company_nip": 1111111111,
            "company_name": "3b3f7",
            "company_slug": "3b3f7",
            "company_phone": "3b3f7",
            "company_street": "3b3f7",
            "company_street_number": "3b3f7",
            "company_city": "3b3f7",
            "company_postal": "3b3f7",
            "company_description": "3b3f7",
            "company_slogan": "3b3f7",
            "created_at": "2020-11-18T00:29:08.000000Z",
            "updated_at": null,
            "category": {
                "id": 2,
                "name": "Zakupy",
                "slug": "zakupy",
                "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/zakupy.jpg"
            },
            "company_contacts": [
                {
                    "id": 5,
                    "name": "3b3f70",
                    "contact": "3b3f70",
                    "company_id": 3,
                    "created_at": null,
                    "updated_at": null
                },
                {
                    "id": 6,
                    "name": "3b3f71",
                    "contact": "3b3f71",
                    "company_id": 3,
                    "created_at": null,
                    "updated_at": null
                },
                {
                    "id": 7,
                    "name": "3b3f72",
                    "contact": "3b3f72",
                    "company_id": 3,
                    "created_at": null,
                    "updated_at": null
                }
            ]
        },
        "3": {
            "id": 4,
            "company_nip": 1111111111,
            "company_name": "d8dfd",
            "company_slug": "d8dfd",
            "company_phone": "d8dfd",
            "company_street": "d8dfd",
            "company_street_number": "d8dfd",
            "company_city": "d8dfd",
            "company_postal": "d8dfd",
            "company_description": "d8dfd",
            "company_slogan": "d8dfd",
            "created_at": "2020-10-28T00:29:08.000000Z",
            "updated_at": null,
            "category": {
                "id": 7,
                "name": "Elektronika",
                "slug": "elektronika",
                "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/elektronika.jpg"
            },
            "company_contacts": [
                {
                    "id": 8,
                    "name": "d8dfd0",
                    "contact": "d8dfd0",
                    "company_id": 4,
                    "created_at": null,
                    "updated_at": null
                }
            ]
        },
        "4": {
            "id": 5,
            "company_nip": 1111111111,
            "company_name": "1fd75",
            "company_slug": "1fd75",
            "company_phone": "1fd75",
            "company_street": "1fd75",
            "company_street_number": "1fd75",
            "company_city": "1fd75",
            "company_postal": "1fd75",
            "company_description": "1fd75",
            "company_slogan": "1fd75",
            "created_at": "2020-10-04T00:29:08.000000Z",
            "updated_at": null,
            "category": {
                "id": 5,
                "name": "Edukacja",
                "slug": "edukacja",
                "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/edukacja.jpg"
            },
            "company_contacts": [
                {
                    "id": 9,
                    "name": "1fd750",
                    "contact": "1fd750",
                    "company_id": 5,
                    "created_at": null,
                    "updated_at": null
                },
                {
                    "id": 10,
                    "name": "1fd751",
                    "contact": "1fd751",
                    "company_id": 5,
                    "created_at": null,
                    "updated_at": null
                },
                {
                    "id": 11,
                    "name": "1fd752",
                    "contact": "1fd752",
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
    -d '{"name":"voluptatem","short_description":"distinctio","long_description":"temporibus","price":17,"type":10}'

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
    "name": "voluptatem",
    "short_description": "distinctio",
    "long_description": "temporibus",
    "price": 17,
    "type": 10
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

<!-- START_241fd2204f9f5b65c7aa7c9618dcca22 -->
## api/products/{id}

Updates Product

> Example request:

```bash
curl -X PUT \
    "http://localhost/Lokando/api/products/1?id=doloribus" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"molestiae","short_description":"optio","long_description":"odit","price":11,"type":7}'

```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/products/1"
);

let params = {
    "id": "doloribus",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "molestiae",
    "short_description": "optio",
    "long_description": "odit",
    "price": 11,
    "type": 7
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
    "http://localhost/Lokando/api/products/1/rate?id=aut" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"rate":3}'

```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/products/1/rate"
);

let params = {
    "id": "aut",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "rate": 3
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
                "name": "voluptatibus accusamus quia",
                "short_description": "Odit pariatur at qui repudiandae veritatis. Eaque minima ad quaerat est. Exercitationem harum qui aut et.",
                "long_description": "Labore possimus similique ullam et laborum dignissimos iure nihil. Expedita pariatur voluptatem officia dolorem vitae. Non eveniet voluptatum cum voluptatem. Nisi voluptatem nulla tenetur. Ut dolores omnis nobis impedit. Quibusdam quisquam quaerat sit vero at iusto et. Et ea magni illum aperiam nisi accusamus suscipit. Et vel id ratione. Quisquam molestiae quia quia dolorum vitae nihil voluptates. Quisquam cumque placeat sunt. Et sint voluptatem aut. Voluptatem sit nisi eveniet repellendus.",
                "price": 331,
                "type": 2,
                "rating": 4.88,
                "rating_amount": 50,
                "company_id": 1,
                "created_at": "2020-11-22T00:29:08.000000Z",
                "updated_at": "2020-11-22T00:29:08.000000Z",
                "company": {
                    "id": 1,
                    "company_name": "a1bca",
                    "company_street": "a1bca",
                    "company_street_number": "a1bca",
                    "company_city": "a1bca",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 1,
                            "name": "a1bca0",
                            "contact": "a1bca0",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 2,
                            "name": "a1bca1",
                            "contact": "a1bca1",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 3,
                            "name": "a1bca2",
                            "contact": "a1bca2",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 2,
                "name": "fugit aut rem",
                "short_description": "Sit aut libero ratione omnis dolor autem natus. Voluptas sed voluptatem aperiam ex possimus esse et. In sint voluptate maxime ut expedita repudiandae accusantium at.",
                "long_description": "Nemo deleniti placeat ipsa itaque. Architecto inventore qui at est hic quae. Voluptates voluptas mollitia dolores ea minima tempore eligendi. Ut eaque et rem et dolores. Dicta alias eius reprehenderit consequatur quisquam doloremque est. Aut voluptate sunt eos non. Autem sequi exercitationem facere ea ut ea error. Laboriosam nobis illum vel et veniam id quae optio. Minus quaerat quaerat voluptatibus ipsa consequatur. Aperiam sint necessitatibus exercitationem. Vel in voluptas corrupti qui.",
                "price": 11309,
                "type": 1,
                "rating": 1.94,
                "rating_amount": 68,
                "company_id": 4,
                "created_at": "2020-11-22T00:29:08.000000Z",
                "updated_at": "2020-11-22T00:29:08.000000Z",
                "company": {
                    "id": 4,
                    "company_name": "d8dfd",
                    "company_street": "d8dfd",
                    "company_street_number": "d8dfd",
                    "company_city": "d8dfd",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 8,
                            "name": "d8dfd0",
                            "contact": "d8dfd0",
                            "company_id": 4,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 3,
                "name": "id alias officiis",
                "short_description": "Ut aliquid aut sapiente omnis itaque. Id qui soluta aut illum consequatur quod. Aliquam voluptatibus voluptatem et aut enim quia. Maxime enim sint aut illum itaque.",
                "long_description": "Qui rem eaque aut nostrum laborum aliquid. Quia inventore voluptatem voluptas cupiditate magni. In suscipit ipsam deleniti nobis temporibus. Assumenda numquam cupiditate explicabo voluptatibus est. Sed ratione fugit quibusdam non illum hic beatae. Et voluptatum qui perspiciatis debitis est molestias eaque. Sint quia voluptatem nesciunt enim. Est esse aperiam suscipit esse quisquam. Qui distinctio consequatur omnis similique. Et veniam id unde illo. Explicabo aut magni magnam et.",
                "price": 12890,
                "type": 1,
                "rating": 0.77,
                "rating_amount": 90,
                "company_id": 3,
                "created_at": "2020-11-22T00:29:08.000000Z",
                "updated_at": "2020-11-22T00:29:08.000000Z",
                "company": {
                    "id": 3,
                    "company_name": "3b3f7",
                    "company_street": "3b3f7",
                    "company_street_number": "3b3f7",
                    "company_city": "3b3f7",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 5,
                            "name": "3b3f70",
                            "contact": "3b3f70",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 6,
                            "name": "3b3f71",
                            "contact": "3b3f71",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 7,
                            "name": "3b3f72",
                            "contact": "3b3f72",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 4,
                "name": "incidunt sint accusantium",
                "short_description": "Sint impedit mollitia perferendis et deleniti. Qui sapiente expedita doloremque optio eos debitis omnis sed. Minus voluptas omnis id ut est rerum. Aspernatur ea cupiditate in perspiciatis.",
                "long_description": "Maxime iure quia a vel sunt. Magnam ducimus cupiditate deserunt eveniet unde odio quaerat laudantium. Provident sed vel rerum nihil deleniti voluptates. Odio placeat laudantium occaecati quia vel voluptatum rem esse. Quam modi officia similique incidunt cupiditate natus accusamus. Placeat rerum aliquid quisquam maxime. Autem dolorem suscipit rerum ex. Consequatur odio id et et dolorum nihil nisi. Ut consequatur qui nostrum atque facere amet rem.",
                "price": 8574,
                "type": 1,
                "rating": 4.78,
                "rating_amount": 96,
                "company_id": 1,
                "created_at": "2020-11-22T00:29:08.000000Z",
                "updated_at": "2020-11-22T00:29:08.000000Z",
                "company": {
                    "id": 1,
                    "company_name": "a1bca",
                    "company_street": "a1bca",
                    "company_street_number": "a1bca",
                    "company_city": "a1bca",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 1,
                            "name": "a1bca0",
                            "contact": "a1bca0",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 2,
                            "name": "a1bca1",
                            "contact": "a1bca1",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 3,
                            "name": "a1bca2",
                            "contact": "a1bca2",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 5,
                "name": "ea dolor modi",
                "short_description": "Quo suscipit tempora modi vel consequatur aut. Tempore et voluptatibus rem nihil. Amet repudiandae dolorem fuga distinctio dolores praesentium.",
                "long_description": "Quos ea iste autem culpa qui. Consequatur sequi repudiandae et quos ratione ut optio fugit. Nihil ratione et eum aut eveniet. Nesciunt dolorem quo officiis sunt molestias similique consectetur. Dolor quo odit sit sunt consequuntur perspiciatis. Excepturi maxime minima fugiat laboriosam molestiae. Esse praesentium cum mollitia quod. Neque illum aspernatur nam qui debitis. Velit et optio ducimus vel eum.",
                "price": 7506,
                "type": 2,
                "rating": 0.59,
                "rating_amount": 2,
                "company_id": 4,
                "created_at": "2020-11-22T00:29:08.000000Z",
                "updated_at": "2020-11-22T00:29:08.000000Z",
                "company": {
                    "id": 4,
                    "company_name": "d8dfd",
                    "company_street": "d8dfd",
                    "company_street_number": "d8dfd",
                    "company_city": "d8dfd",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 8,
                            "name": "d8dfd0",
                            "contact": "d8dfd0",
                            "company_id": 4,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 6,
                "name": "nesciunt non et",
                "short_description": "Exercitationem est praesentium qui voluptatem excepturi vero quis. Impedit aut est natus eos quis. Est nostrum aut similique quod minus. Et non asperiores pariatur et facere dolorem et.",
                "long_description": "Deserunt quisquam ducimus corporis eos et facere cupiditate. Placeat aut omnis tenetur nobis deserunt libero a qui. Recusandae ut molestias beatae voluptatem sint dicta ipsam architecto. Dolorem quos rerum reiciendis consequuntur. Quas nemo illum saepe accusamus dolores voluptatibus occaecati deserunt. Aperiam omnis provident et sunt. Facilis deserunt vitae est aut minus eius. Nulla iste accusantium nam tempora veniam. Aut et praesentium repudiandae assumenda.",
                "price": 1669,
                "type": 1,
                "rating": 2.13,
                "rating_amount": 71,
                "company_id": 3,
                "created_at": "2020-11-22T00:29:08.000000Z",
                "updated_at": "2020-11-22T00:29:08.000000Z",
                "company": {
                    "id": 3,
                    "company_name": "3b3f7",
                    "company_street": "3b3f7",
                    "company_street_number": "3b3f7",
                    "company_city": "3b3f7",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 5,
                            "name": "3b3f70",
                            "contact": "3b3f70",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 6,
                            "name": "3b3f71",
                            "contact": "3b3f71",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 7,
                            "name": "3b3f72",
                            "contact": "3b3f72",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 7,
                "name": "corrupti magni beatae",
                "short_description": "Debitis et cumque corrupti deleniti quis dolores. Labore repudiandae vel ab mollitia tempore tenetur. Est dignissimos sint perferendis.",
                "long_description": "Dolor ut quaerat atque corrupti architecto voluptatem nostrum. Perferendis ut quasi eligendi. Deleniti dolor quos est distinctio voluptatem. Excepturi culpa maxime iure cum suscipit vel voluptatem. Accusamus voluptatibus illum fuga quod. Minima at repellendus fuga est quibusdam et consequatur. Dolore voluptatem omnis quis qui. Sit sunt mollitia a fugit sed. Consectetur quaerat unde aut nostrum veniam. Quam beatae quaerat nihil. Sequi quidem cum temporibus velit voluptas molestias sapiente.",
                "price": 16856,
                "type": 2,
                "rating": 4.82,
                "rating_amount": 22,
                "company_id": 3,
                "created_at": "2020-11-22T00:29:08.000000Z",
                "updated_at": "2020-11-22T00:29:08.000000Z",
                "company": {
                    "id": 3,
                    "company_name": "3b3f7",
                    "company_street": "3b3f7",
                    "company_street_number": "3b3f7",
                    "company_city": "3b3f7",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 5,
                            "name": "3b3f70",
                            "contact": "3b3f70",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 6,
                            "name": "3b3f71",
                            "contact": "3b3f71",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 7,
                            "name": "3b3f72",
                            "contact": "3b3f72",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 8,
                "name": "occaecati ut fugit",
                "short_description": "Consequatur maxime enim ut saepe quam id quam. Perspiciatis et quia est incidunt molestiae.",
                "long_description": "Enim sed ex soluta nemo distinctio consequuntur in. Quisquam occaecati ex et sunt qui omnis labore. Illum nobis recusandae explicabo vel fugit non vero. Harum soluta vel molestiae. Id expedita omnis cupiditate necessitatibus officiis totam tempora. Recusandae quo vero in ea. Repellat culpa laborum magnam et. Qui ut repellat dolores sed consequatur facilis pariatur nulla.",
                "price": 12118,
                "type": 2,
                "rating": 2.15,
                "rating_amount": 61,
                "company_id": 1,
                "created_at": "2020-11-22T00:29:08.000000Z",
                "updated_at": "2020-11-22T00:29:08.000000Z",
                "company": {
                    "id": 1,
                    "company_name": "a1bca",
                    "company_street": "a1bca",
                    "company_street_number": "a1bca",
                    "company_city": "a1bca",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 1,
                            "name": "a1bca0",
                            "contact": "a1bca0",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 2,
                            "name": "a1bca1",
                            "contact": "a1bca1",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 3,
                            "name": "a1bca2",
                            "contact": "a1bca2",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 9,
                "name": "blanditiis recusandae facere",
                "short_description": "Quam quas modi reprehenderit laborum quas totam consequatur. Laborum ducimus repellendus dolores. Ut quia dolor blanditiis est id quaerat unde exercitationem.",
                "long_description": "Et similique officiis cupiditate ut non. Nihil nobis voluptas est et voluptatum. Et velit facere aut dolores numquam et ea. Tenetur omnis id ullam quo odit nulla. Quia porro consequatur voluptatum quod deserunt sed odit. Et odit tempora ut repudiandae placeat et. Et distinctio magnam praesentium recusandae sed. Animi ut nisi nostrum laudantium. Neque sed et ducimus nihil consequuntur.",
                "price": 71,
                "type": 1,
                "rating": 2.91,
                "rating_amount": 75,
                "company_id": 1,
                "created_at": "2020-11-22T00:29:08.000000Z",
                "updated_at": "2020-11-22T00:29:08.000000Z",
                "company": {
                    "id": 1,
                    "company_name": "a1bca",
                    "company_street": "a1bca",
                    "company_street_number": "a1bca",
                    "company_city": "a1bca",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 1,
                            "name": "a1bca0",
                            "contact": "a1bca0",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 2,
                            "name": "a1bca1",
                            "contact": "a1bca1",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 3,
                            "name": "a1bca2",
                            "contact": "a1bca2",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 10,
                "name": "odio explicabo esse",
                "short_description": "Est et nostrum quia quia accusantium quisquam. Ipsa rerum autem dolorem. Ut in sit nihil enim provident error eum. Et vel est laboriosam quod voluptas.",
                "long_description": "Ratione quasi occaecati blanditiis repellat. Non voluptatibus necessitatibus ea at id. Consequatur ratione itaque asperiores occaecati laudantium veritatis praesentium. Sapiente repellendus dolores voluptatibus provident qui velit. Est omnis minima impedit et cum. Tempore itaque molestiae assumenda adipisci eum quia aut. Nihil ullam quaerat iste quos. Harum pariatur autem soluta.",
                "price": 17200,
                "type": 2,
                "rating": 0.16,
                "rating_amount": 73,
                "company_id": 5,
                "created_at": "2020-11-22T00:29:08.000000Z",
                "updated_at": "2020-11-22T00:29:08.000000Z",
                "company": {
                    "id": 5,
                    "company_name": "1fd75",
                    "company_street": "1fd75",
                    "company_street_number": "1fd75",
                    "company_city": "1fd75",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 9,
                            "name": "1fd750",
                            "contact": "1fd750",
                            "company_id": 5,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 10,
                            "name": "1fd751",
                            "contact": "1fd751",
                            "company_id": 5,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 11,
                            "name": "1fd752",
                            "contact": "1fd752",
                            "company_id": 5,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 11,
                "name": "velit commodi qui",
                "short_description": "Iusto voluptas omnis libero. Voluptates qui perferendis adipisci et nulla excepturi aut. Dolore et officiis voluptatem et inventore assumenda beatae earum.",
                "long_description": "Saepe tempora distinctio quis voluptas dolor rem et. In est id quisquam aut fugiat. Sint qui architecto eos hic vitae porro. Voluptatem nostrum optio sint voluptatum. Amet ab aut vel fugit. Consequuntur ea aut deserunt molestiae vel. Perspiciatis provident qui fugiat quia voluptatum. Vitae omnis sit itaque impedit aut voluptates doloribus sit. Possimus placeat accusantium sed quo. Accusamus dolor illo error est voluptatem repellat voluptate quis. Nihil quis ratione nihil soluta maxime.",
                "price": 12027,
                "type": 2,
                "rating": 0.32,
                "rating_amount": 81,
                "company_id": 1,
                "created_at": "2020-11-22T00:29:08.000000Z",
                "updated_at": "2020-11-22T00:29:08.000000Z",
                "company": {
                    "id": 1,
                    "company_name": "a1bca",
                    "company_street": "a1bca",
                    "company_street_number": "a1bca",
                    "company_city": "a1bca",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 1,
                            "name": "a1bca0",
                            "contact": "a1bca0",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 2,
                            "name": "a1bca1",
                            "contact": "a1bca1",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 3,
                            "name": "a1bca2",
                            "contact": "a1bca2",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 12,
                "name": "aliquam id natus",
                "short_description": "Sed cumque quia aspernatur exercitationem et et. Sit quia aspernatur non ut voluptatem et voluptatem quasi.",
                "long_description": "Minus commodi deserunt quibusdam quis sint cum tempore. Assumenda qui at quo voluptatem sint. Numquam molestiae quia aut autem reprehenderit. Laboriosam fugiat soluta sequi maxime. Recusandae sequi ipsam maiores itaque neque. Ducimus odit ad consequatur molestias. Vel itaque eligendi et quis aliquid molestiae. Sed omnis quis sed autem quae officia.",
                "price": 17058,
                "type": 2,
                "rating": 2.95,
                "rating_amount": 54,
                "company_id": 2,
                "created_at": "2020-11-22T00:29:08.000000Z",
                "updated_at": "2020-11-22T00:29:08.000000Z",
                "company": {
                    "id": 2,
                    "company_name": "de985",
                    "company_street": "de985",
                    "company_street_number": "de985",
                    "company_city": "de985",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 4,
                            "name": "de9850",
                            "contact": "de9850",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 13,
                "name": "alias voluptas saepe",
                "short_description": "Officiis sequi consequatur iste et. Tenetur est quam minus et. Vitae dicta dolor dolor quia et labore accusantium et. Excepturi commodi consectetur nemo adipisci quod dicta explicabo.",
                "long_description": "Quis saepe ut labore ratione consequatur beatae. Architecto quae voluptatem ut aut officiis. Autem dolorum dolores cum voluptatem ratione ipsa sit vel. Aspernatur dignissimos neque est ad rerum. Repellendus vel optio voluptatem quia quisquam placeat. Iste tempora dolore voluptatibus perspiciatis. Qui rerum perspiciatis neque velit magni perspiciatis odit. Repellendus deserunt ea ipsa.",
                "price": 18638,
                "type": 1,
                "rating": 1.85,
                "rating_amount": 84,
                "company_id": 5,
                "created_at": "2020-11-22T00:29:08.000000Z",
                "updated_at": "2020-11-22T00:29:08.000000Z",
                "company": {
                    "id": 5,
                    "company_name": "1fd75",
                    "company_street": "1fd75",
                    "company_street_number": "1fd75",
                    "company_city": "1fd75",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 9,
                            "name": "1fd750",
                            "contact": "1fd750",
                            "company_id": 5,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 10,
                            "name": "1fd751",
                            "contact": "1fd751",
                            "company_id": 5,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 11,
                            "name": "1fd752",
                            "contact": "1fd752",
                            "company_id": 5,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 14,
                "name": "maiores earum dolore",
                "short_description": "Ut dolores voluptates vitae facere. Incidunt culpa unde eos eius optio rerum autem. Deleniti doloribus non aliquid voluptates occaecati. Rerum doloribus exercitationem labore itaque nostrum qui.",
                "long_description": "Rerum velit sint culpa eum sed et. Ullam molestiae ut voluptatum molestiae vel libero nulla. Omnis blanditiis quia vel repellendus excepturi delectus id illum. Distinctio rerum qui commodi numquam. Excepturi aperiam omnis eum harum debitis nesciunt. Aut sit incidunt natus culpa rerum. Modi illo dolorem ea et velit. Voluptas fugiat ab vel placeat aut tempora ad.",
                "price": null,
                "type": 0,
                "rating": 1.24,
                "rating_amount": 97,
                "company_id": 3,
                "created_at": "2020-11-22T00:29:08.000000Z",
                "updated_at": "2020-11-22T00:29:08.000000Z",
                "company": {
                    "id": 3,
                    "company_name": "3b3f7",
                    "company_street": "3b3f7",
                    "company_street_number": "3b3f7",
                    "company_city": "3b3f7",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 5,
                            "name": "3b3f70",
                            "contact": "3b3f70",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 6,
                            "name": "3b3f71",
                            "contact": "3b3f71",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 7,
                            "name": "3b3f72",
                            "contact": "3b3f72",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 15,
                "name": "et et doloribus",
                "short_description": "Quaerat ipsam quos ullam quisquam est. Ullam voluptas voluptatem modi laborum eos ut. Facilis et qui ut dolorem aliquam temporibus. Iusto in dolor nesciunt quia voluptatem maiores.",
                "long_description": "Sunt cupiditate vitae laudantium. Enim quis est molestiae ut et mollitia occaecati. Harum nesciunt reprehenderit ducimus doloribus deserunt dicta tempora. Quos sunt dolorum nobis quidem. Cupiditate accusamus corporis quo quo. Aut qui harum et quibusdam quaerat modi. Aspernatur a tempora deserunt voluptas. Facere et quas id vel. Ut qui saepe nihil sint voluptatem. Repellat est et corporis omnis consequatur aut voluptas. Quia est totam et fuga.",
                "price": 8955,
                "type": 2,
                "rating": 2.01,
                "rating_amount": 70,
                "company_id": 5,
                "created_at": "2020-11-22T00:29:08.000000Z",
                "updated_at": "2020-11-22T00:29:08.000000Z",
                "company": {
                    "id": 5,
                    "company_name": "1fd75",
                    "company_street": "1fd75",
                    "company_street_number": "1fd75",
                    "company_city": "1fd75",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 9,
                            "name": "1fd750",
                            "contact": "1fd750",
                            "company_id": 5,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 10,
                            "name": "1fd751",
                            "contact": "1fd751",
                            "company_id": 5,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 11,
                            "name": "1fd752",
                            "contact": "1fd752",
                            "company_id": 5,
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
    -d '{"name":"laboriosam","surname":"et","phone":"sunt","street":"natus","street_number":"iste","city":"aliquid","postal":"tempore","email":"sequi"}'

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
    "name": "laboriosam",
    "surname": "et",
    "phone": "sunt",
    "street": "natus",
    "street_number": "iste",
    "city": "aliquid",
    "postal": "tempore",
    "email": "sequi"
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


