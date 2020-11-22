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
[Get Postman Collection](http://localhost/PROJEKTY/Lokando/public/docs/collection.json)

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
    "http://localhost/PROJEKTY/Lokando/public/api/auth/register" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"enim","surname":"quaerat","phone":"eaque","street":"facilis","street_number":"veniam","city":"est","postal":"eveniet","is_company":false,"email":"quis","password":"sed","password_confirmation":"eum","company_nip":12,"company_name":"aut","company_phone":"assumenda","company_street":"qui","company_street_number":"odio","company_city":"aut","company_postal":"culpa","company_description":"reiciendis","company_slogan":"illo","company_contacts":[],"category_id":6}'

```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/api/auth/register"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "enim",
    "surname": "quaerat",
    "phone": "eaque",
    "street": "facilis",
    "street_number": "veniam",
    "city": "est",
    "postal": "eveniet",
    "is_company": false,
    "email": "quis",
    "password": "sed",
    "password_confirmation": "eum",
    "company_nip": 12,
    "company_name": "aut",
    "company_phone": "assumenda",
    "company_street": "qui",
    "company_street_number": "odio",
    "company_city": "aut",
    "company_postal": "culpa",
    "company_description": "reiciendis",
    "company_slogan": "illo",
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
    "http://localhost/PROJEKTY/Lokando/public/api/auth/login" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"email":"qui","password":"voluptas"}'

```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/api/auth/login"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "email": "qui",
    "password": "voluptas"
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
    -G "http://localhost/PROJEKTY/Lokando/public/api/me" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/api/me"
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
    -G "http://localhost/PROJEKTY/Lokando/public/api/logout" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/api/logout"
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
    -G "http://localhost/PROJEKTY/Lokando/public/api/categories" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/api/categories"
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
            "url": "http:\/\/localhost\/PROJEKTY\/Lokando\/public\/assets\/images\/category\/gastronomia.jpg"
        },
        {
            "id": 2,
            "name": "Zakupy",
            "slug": "zakupy",
            "url": "http:\/\/localhost\/PROJEKTY\/Lokando\/public\/assets\/images\/category\/zakupy.jpg"
        },
        {
            "id": 3,
            "name": "Zdrowie i Uroda",
            "slug": "zdrowie-i-uroda",
            "url": "http:\/\/localhost\/PROJEKTY\/Lokando\/public\/assets\/images\/category\/zdrowie-i-uroda.jpg"
        },
        {
            "id": 4,
            "name": "Wyposażenie",
            "slug": "wyposazenie",
            "url": "http:\/\/localhost\/PROJEKTY\/Lokando\/public\/assets\/images\/category\/wyposazenie.jpg"
        },
        {
            "id": 5,
            "name": "Edukacja",
            "slug": "edukacja",
            "url": "http:\/\/localhost\/PROJEKTY\/Lokando\/public\/assets\/images\/category\/edukacja.jpg"
        },
        {
            "id": 6,
            "name": "Transport",
            "slug": "transport",
            "url": "http:\/\/localhost\/PROJEKTY\/Lokando\/public\/assets\/images\/category\/transport.jpg"
        },
        {
            "id": 7,
            "name": "Elektronika",
            "slug": "elektronika",
            "url": "http:\/\/localhost\/PROJEKTY\/Lokando\/public\/assets\/images\/category\/elektronika.jpg"
        },
        {
            "id": 8,
            "name": "Zwierzęta",
            "slug": "zwierzeta",
            "url": "http:\/\/localhost\/PROJEKTY\/Lokando\/public\/assets\/images\/category\/zwierzeta.jpg"
        },
        {
            "id": 9,
            "name": "Sport i Hobby",
            "slug": "sport-i-hobby",
            "url": "http:\/\/localhost\/PROJEKTY\/Lokando\/public\/assets\/images\/category\/sport-i-hobby.jpg"
        },
        {
            "id": 10,
            "name": "Inne Usługi",
            "slug": "inne-uslugi",
            "url": "http:\/\/localhost\/PROJEKTY\/Lokando\/public\/assets\/images\/category\/inne-uslugi.jpg"
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
    "http://localhost/PROJEKTY/Lokando/public/api/company" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"laudantium","surname":"autem","email":"in","company_nip":13,"company_name":"facere","company_phone":"natus","company_street":"omnis","company_street_number":"saepe","company_city":"perspiciatis","company_postal":"ut","company_description":"magnam","company_slogan":"nihil","category_id":18,"company_contacts":[]}'

```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/api/company"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "laudantium",
    "surname": "autem",
    "email": "in",
    "company_nip": 13,
    "company_name": "facere",
    "company_phone": "natus",
    "company_street": "omnis",
    "company_street_number": "saepe",
    "company_city": "perspiciatis",
    "company_postal": "ut",
    "company_description": "magnam",
    "company_slogan": "nihil",
    "category_id": 18,
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
    -G "http://localhost/PROJEKTY/Lokando/public/api/company/latest" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/api/company/latest"
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
        "3": {
            "id": 4,
            "company_nip": 1111111111,
            "company_name": "cfd36",
            "company_slug": "cfd36",
            "company_phone": "cfd36",
            "company_street": "cfd36",
            "company_street_number": "cfd36",
            "company_city": "cfd36",
            "company_postal": "cfd36",
            "company_description": "cfd36",
            "company_slogan": "cfd36",
            "created_at": "2020-10-22T01:40:07.000000Z",
            "updated_at": null,
            "category": {
                "id": 10,
                "name": "Inne Usługi",
                "slug": "inne-uslugi",
                "url": "http:\/\/localhost\/PROJEKTY\/Lokando\/public\/assets\/images\/category\/inne-uslugi.jpg"
            },
            "company_contacts": [
                {
                    "id": 8,
                    "name": "cfd360",
                    "contact": "cfd360",
                    "company_id": 4,
                    "created_at": null,
                    "updated_at": null
                },
                {
                    "id": 9,
                    "name": "cfd361",
                    "contact": "cfd361",
                    "company_id": 4,
                    "created_at": null,
                    "updated_at": null
                }
            ]
        },
        "1": {
            "id": 2,
            "company_nip": 1111111111,
            "company_name": "59d9b",
            "company_slug": "59d9b",
            "company_phone": "59d9b",
            "company_street": "59d9b",
            "company_street_number": "59d9b",
            "company_city": "59d9b",
            "company_postal": "59d9b",
            "company_description": "59d9b",
            "company_slogan": "59d9b",
            "created_at": "2020-10-21T01:40:06.000000Z",
            "updated_at": null,
            "category": {
                "id": 8,
                "name": "Zwierzęta",
                "slug": "zwierzeta",
                "url": "http:\/\/localhost\/PROJEKTY\/Lokando\/public\/assets\/images\/category\/zwierzeta.jpg"
            },
            "company_contacts": [
                {
                    "id": 4,
                    "name": "59d9b0",
                    "contact": "59d9b0",
                    "company_id": 2,
                    "created_at": null,
                    "updated_at": null
                }
            ]
        },
        "4": {
            "id": 5,
            "company_nip": 1111111111,
            "company_name": "1bf37",
            "company_slug": "1bf37",
            "company_phone": "1bf37",
            "company_street": "1bf37",
            "company_street_number": "1bf37",
            "company_city": "1bf37",
            "company_postal": "1bf37",
            "company_description": "1bf37",
            "company_slogan": "1bf37",
            "created_at": "2020-10-17T01:40:07.000000Z",
            "updated_at": null,
            "category": {
                "id": 6,
                "name": "Transport",
                "slug": "transport",
                "url": "http:\/\/localhost\/PROJEKTY\/Lokando\/public\/assets\/images\/category\/transport.jpg"
            },
            "company_contacts": [
                {
                    "id": 10,
                    "name": "1bf370",
                    "contact": "1bf370",
                    "company_id": 5,
                    "created_at": null,
                    "updated_at": null
                },
                {
                    "id": 11,
                    "name": "1bf371",
                    "contact": "1bf371",
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
    -G "http://localhost/PROJEKTY/Lokando/public/api/company/1?slug=consectetur" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/api/company/1"
);

let params = {
    "slug": "consectetur",
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

#Product


Product managment
<!-- START_1075cca837341737c05bc535198b1f38 -->
## api/{id}/products

Returns company product based on id

> Example request:

```bash
curl -X GET \
    -G "http://localhost/PROJEKTY/Lokando/public/api/1/products" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/api/1/products"
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
    -G "http://localhost/PROJEKTY/Lokando/public/api/products/own" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/api/products/own"
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
    "http://localhost/PROJEKTY/Lokando/public/api/products" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"totam","short_description":"corporis","long_description":"facere","price":11,"type":14}'

```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/api/products"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "totam",
    "short_description": "corporis",
    "long_description": "facere",
    "price": 11,
    "type": 14
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
    "http://localhost/PROJEKTY/Lokando/public/api/products/search" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/api/products/search"
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
`POST api/products/search`


<!-- END_7b1b863a682a5bcb2a423df0d56eec77 -->

<!-- START_241fd2204f9f5b65c7aa7c9618dcca22 -->
## api/products/{id}

Updates Product

> Example request:

```bash
curl -X PUT \
    "http://localhost/PROJEKTY/Lokando/public/api/products/1?id=reprehenderit" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"odio","short_description":"error","long_description":"libero","price":1,"type":11}'

```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/api/products/1"
);

let params = {
    "id": "reprehenderit",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "odio",
    "short_description": "error",
    "long_description": "libero",
    "price": 1,
    "type": 11
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
    "http://localhost/PROJEKTY/Lokando/public/api/products/1/rate?id=deserunt" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"rate":5}'

```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/api/products/1/rate"
);

let params = {
    "id": "deserunt",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "rate": 5
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
    -G "http://localhost/PROJEKTY/Lokando/public/api/products" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/api/products"
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
                "name": "sint sequi ullam",
                "short_description": "Omnis repudiandae impedit omnis corporis error maxime repellendus. Nihil soluta sed quo eum. Doloribus incidunt facere perferendis iusto possimus aut ratione autem.",
                "long_description": "Ullam ipsa sed minus autem provident et dicta debitis. Sit aperiam dolores ab voluptatem quos soluta. Mollitia velit sit unde eum dolores quod. Corporis aut non fugiat deserunt. Provident fugit modi illo illum quo aperiam. Itaque facere in porro. Maiores quis placeat deserunt esse quasi. Veritatis impedit aspernatur quia dignissimos dolorum dolorem illum. Doloribus rerum itaque dolor atque quia ex. Quis rerum perferendis sit ipsum.",
                "price": 18877,
                "type": 2,
                "rating": 1.79,
                "rating_amount": 44,
                "company_id": 5,
                "created_at": "2020-11-22T01:40:08.000000Z",
                "updated_at": "2020-11-22T01:40:08.000000Z",
                "company": {
                    "id": 5,
                    "company_name": "1bf37",
                    "company_street": "1bf37",
                    "company_street_number": "1bf37",
                    "company_city": "1bf37",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 10,
                            "name": "1bf370",
                            "contact": "1bf370",
                            "company_id": 5,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 11,
                            "name": "1bf371",
                            "contact": "1bf371",
                            "company_id": 5,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 2,
                "name": "harum ut delectus",
                "short_description": "Id est qui assumenda in. Quia dolorem iste neque aut. Ipsum quasi provident ratione vel. Magni nostrum labore provident tempore itaque et modi.",
                "long_description": "Omnis harum fuga animi ipsa beatae non ullam. Harum assumenda beatae error tenetur ipsam maiores ipsam. Laboriosam eveniet quia eos eos quia. Quis ratione dolores et cupiditate error consequatur. Odit aut omnis asperiores rem blanditiis libero. Rem optio sed at ut perspiciatis porro ut. Est dolore asperiores ullam quia esse fuga nam. Consectetur minima aut voluptatem in sint nihil cum. Nemo voluptatem quo nostrum repellat ut rerum. Dignissimos voluptas consequuntur perspiciatis non.",
                "price": 14121,
                "type": 2,
                "rating": 3.08,
                "rating_amount": 24,
                "company_id": 3,
                "created_at": "2020-11-22T01:40:08.000000Z",
                "updated_at": "2020-11-22T01:40:08.000000Z",
                "company": {
                    "id": 3,
                    "company_name": "e41f7",
                    "company_street": "e41f7",
                    "company_street_number": "e41f7",
                    "company_city": "e41f7",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 5,
                            "name": "e41f70",
                            "contact": "e41f70",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 6,
                            "name": "e41f71",
                            "contact": "e41f71",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 7,
                            "name": "e41f72",
                            "contact": "e41f72",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 3,
                "name": "ea enim quo",
                "short_description": "Voluptas quisquam maxime sequi possimus deserunt aut. Non aut quia ut vel non quis ducimus. Quibusdam sit veniam nihil cupiditate.",
                "long_description": "Exercitationem natus praesentium earum quisquam. Dolor quasi dignissimos accusamus nihil. Possimus voluptatem optio rerum sit natus. Aut quia omnis libero ullam hic laborum. Sit adipisci quod recusandae voluptas. Commodi aut ratione est commodi cumque. Vel magnam ea ut dolor fuga. Sit pariatur voluptate inventore beatae eveniet.",
                "price": null,
                "type": 0,
                "rating": 2.15,
                "rating_amount": 11,
                "company_id": 5,
                "created_at": "2020-11-22T01:40:08.000000Z",
                "updated_at": "2020-11-22T01:40:08.000000Z",
                "company": {
                    "id": 5,
                    "company_name": "1bf37",
                    "company_street": "1bf37",
                    "company_street_number": "1bf37",
                    "company_city": "1bf37",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 10,
                            "name": "1bf370",
                            "contact": "1bf370",
                            "company_id": 5,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 11,
                            "name": "1bf371",
                            "contact": "1bf371",
                            "company_id": 5,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 4,
                "name": "libero atque alias",
                "short_description": "Et ut architecto dignissimos fuga. Qui odio aut illum esse consequuntur voluptatum.",
                "long_description": "Error doloribus qui nisi incidunt recusandae. Ipsam quae delectus rerum et. In et nihil itaque quibusdam qui. Voluptatem totam molestiae rem ratione cumque. Ut inventore voluptatem corrupti. Enim sunt vitae asperiores reiciendis repellat. Fuga aut delectus sit ratione unde. Est accusamus dolores aut et eaque. Et voluptates quidem perferendis ipsam.",
                "price": 7503,
                "type": 1,
                "rating": 4.99,
                "rating_amount": 30,
                "company_id": 2,
                "created_at": "2020-11-22T01:40:08.000000Z",
                "updated_at": "2020-11-22T01:40:08.000000Z",
                "company": {
                    "id": 2,
                    "company_name": "59d9b",
                    "company_street": "59d9b",
                    "company_street_number": "59d9b",
                    "company_city": "59d9b",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 4,
                            "name": "59d9b0",
                            "contact": "59d9b0",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 5,
                "name": "blanditiis corrupti architecto",
                "short_description": "Qui omnis ipsum magni natus delectus non. Aut rerum eveniet ut officia possimus molestiae qui distinctio. Quas facere provident error et dolores quia.",
                "long_description": "Illum eaque neque voluptas laborum dolore ab quasi. Ullam voluptas quam nisi eum cupiditate repellendus sequi non. Vero et doloremque sapiente alias. Natus in ut delectus labore saepe est. Quod rerum qui odit labore. Deleniti quis est architecto blanditiis. Eligendi aspernatur quisquam quam maxime sed reprehenderit. Labore veniam omnis fugit accusantium. Nihil ut doloribus corrupti voluptatum ab ducimus libero.",
                "price": 14616,
                "type": 1,
                "rating": 4.82,
                "rating_amount": 96,
                "company_id": 3,
                "created_at": "2020-11-22T01:40:08.000000Z",
                "updated_at": "2020-11-22T01:40:08.000000Z",
                "company": {
                    "id": 3,
                    "company_name": "e41f7",
                    "company_street": "e41f7",
                    "company_street_number": "e41f7",
                    "company_city": "e41f7",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 5,
                            "name": "e41f70",
                            "contact": "e41f70",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 6,
                            "name": "e41f71",
                            "contact": "e41f71",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 7,
                            "name": "e41f72",
                            "contact": "e41f72",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 6,
                "name": "dolore aspernatur sunt",
                "short_description": "Ipsum ipsam tempore veritatis alias aperiam. Explicabo in sed pariatur voluptate quo libero. Accusantium atque laborum rerum optio sequi amet. Eius cum temporibus non.",
                "long_description": "Aliquid tempora tempora et placeat asperiores similique harum. Voluptate tenetur quisquam autem eveniet. Unde quia aut pariatur temporibus labore nam provident. Quisquam in est magni facilis repellat. Quia nihil deleniti totam mollitia quis accusamus ratione. Aut eius non iste occaecati impedit corrupti ex. Iusto consequatur totam beatae est. Fugiat molestias est quos animi est nihil. Earum facilis repudiandae itaque rem aut dolorem ut.",
                "price": 8237,
                "type": 2,
                "rating": 2.12,
                "rating_amount": 67,
                "company_id": 2,
                "created_at": "2020-11-22T01:40:08.000000Z",
                "updated_at": "2020-11-22T01:40:08.000000Z",
                "company": {
                    "id": 2,
                    "company_name": "59d9b",
                    "company_street": "59d9b",
                    "company_street_number": "59d9b",
                    "company_city": "59d9b",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 4,
                            "name": "59d9b0",
                            "contact": "59d9b0",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 7,
                "name": "aut sit natus",
                "short_description": "Corrupti ipsam quisquam et mollitia non nihil aliquid. Hic odio alias culpa perferendis recusandae. Consequatur accusamus illo consequuntur et.",
                "long_description": "Sunt voluptatem qui iure odio mollitia. Neque corporis repudiandae molestiae ut asperiores et. Voluptas dignissimos sequi autem nulla necessitatibus nobis. Nulla facilis possimus est modi aliquam ipsum omnis est. Veniam dolorum repellendus ex. Eligendi voluptatem architecto ducimus ea. Quos consequuntur eius error et voluptatem amet. Voluptatem atque et quo eius qui animi aut. Quis totam sint accusamus excepturi ea dolores neque.",
                "price": 11314,
                "type": 1,
                "rating": 3.68,
                "rating_amount": 40,
                "company_id": 4,
                "created_at": "2020-11-22T01:40:08.000000Z",
                "updated_at": "2020-11-22T01:40:08.000000Z",
                "company": {
                    "id": 4,
                    "company_name": "cfd36",
                    "company_street": "cfd36",
                    "company_street_number": "cfd36",
                    "company_city": "cfd36",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 8,
                            "name": "cfd360",
                            "contact": "cfd360",
                            "company_id": 4,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 9,
                            "name": "cfd361",
                            "contact": "cfd361",
                            "company_id": 4,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 8,
                "name": "maiores qui ut",
                "short_description": "Qui tenetur harum aut nulla a et maiores. Alias rem assumenda officiis quidem ut adipisci. Eveniet quisquam aut est eaque ut culpa nostrum.",
                "long_description": "Aut ex porro et omnis harum qui quidem. Tenetur voluptate id consequuntur cupiditate veritatis vel beatae. Dolores occaecati perspiciatis nihil nemo ullam. Aut est commodi ab error optio consectetur. Ab facere beatae voluptas qui. Ut velit officiis similique est. Rerum et molestiae fugiat quis. Neque fugiat asperiores quia ut nemo. Tempora blanditiis mollitia quis vero.",
                "price": 17035,
                "type": 1,
                "rating": 2.14,
                "rating_amount": 31,
                "company_id": 4,
                "created_at": "2020-11-22T01:40:08.000000Z",
                "updated_at": "2020-11-22T01:40:08.000000Z",
                "company": {
                    "id": 4,
                    "company_name": "cfd36",
                    "company_street": "cfd36",
                    "company_street_number": "cfd36",
                    "company_city": "cfd36",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 8,
                            "name": "cfd360",
                            "contact": "cfd360",
                            "company_id": 4,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 9,
                            "name": "cfd361",
                            "contact": "cfd361",
                            "company_id": 4,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 9,
                "name": "et officia alias",
                "short_description": "Ut tenetur sunt incidunt quo aut. Doloribus cumque aliquam placeat vel recusandae hic quasi. Sunt placeat sint ut aut laboriosam et qui. Ex nobis aliquid architecto sed.",
                "long_description": "Magnam quia ipsa dolores blanditiis non nostrum totam. Natus quibusdam magni maxime tempore eum ducimus. Eum cumque sapiente animi quis deleniti. Dicta deserunt assumenda voluptates est. Non culpa consectetur ut nihil adipisci inventore. Asperiores deserunt odio laboriosam quo. Iste modi autem deserunt. Corrupti debitis corporis excepturi dignissimos earum.",
                "price": 9048,
                "type": 2,
                "rating": 4.34,
                "rating_amount": 74,
                "company_id": 3,
                "created_at": "2020-11-22T01:40:08.000000Z",
                "updated_at": "2020-11-22T01:40:08.000000Z",
                "company": {
                    "id": 3,
                    "company_name": "e41f7",
                    "company_street": "e41f7",
                    "company_street_number": "e41f7",
                    "company_city": "e41f7",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 5,
                            "name": "e41f70",
                            "contact": "e41f70",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 6,
                            "name": "e41f71",
                            "contact": "e41f71",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 7,
                            "name": "e41f72",
                            "contact": "e41f72",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 10,
                "name": "voluptatem corrupti omnis",
                "short_description": "Nemo quis quia dolorum nesciunt. Facilis voluptas veritatis delectus et debitis accusantium impedit. Molestias provident natus quo ipsa expedita. Aut quis natus beatae dolores atque officiis sint.",
                "long_description": "Voluptatibus nostrum cum veniam velit totam dolorum ut. Sequi temporibus qui voluptatum distinctio harum odio temporibus. Quia similique quos unde nostrum ut cupiditate optio voluptas. Autem molestiae in consectetur consectetur nisi magnam nesciunt. Consequatur dolor rem incidunt ut culpa. Ea doloribus non provident ullam non ipsam. Possimus maxime non vero est unde sequi. Dicta molestiae quia fuga quod ullam a. Est fuga illum beatae vitae. Incidunt et quisquam ipsam quibusdam sit.",
                "price": 10194,
                "type": 1,
                "rating": 4.89,
                "rating_amount": 100,
                "company_id": 3,
                "created_at": "2020-11-22T01:40:08.000000Z",
                "updated_at": "2020-11-22T01:40:08.000000Z",
                "company": {
                    "id": 3,
                    "company_name": "e41f7",
                    "company_street": "e41f7",
                    "company_street_number": "e41f7",
                    "company_city": "e41f7",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 5,
                            "name": "e41f70",
                            "contact": "e41f70",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 6,
                            "name": "e41f71",
                            "contact": "e41f71",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 7,
                            "name": "e41f72",
                            "contact": "e41f72",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 11,
                "name": "ut aliquam amet",
                "short_description": "Ratione possimus veniam nostrum consequatur ea sed nihil. Et consectetur voluptatem officia eum. Neque sit enim quam aut. Id animi voluptate cum fugit assumenda quae. A magni dolorem blanditiis.",
                "long_description": "Autem vitae saepe odio velit eius nisi. Ab sunt facilis dolor vitae a sed mollitia. At commodi molestiae animi rerum. Eum in beatae aspernatur totam dolores. Sequi atque et excepturi ex molestiae eum quisquam. Distinctio similique vel temporibus modi dolore consequatur enim. Exercitationem consequatur impedit aut quo aut. Non ut dignissimos molestiae commodi reiciendis.",
                "price": 9391,
                "type": 1,
                "rating": 3.32,
                "rating_amount": 25,
                "company_id": 3,
                "created_at": "2020-11-22T01:40:08.000000Z",
                "updated_at": "2020-11-22T01:40:08.000000Z",
                "company": {
                    "id": 3,
                    "company_name": "e41f7",
                    "company_street": "e41f7",
                    "company_street_number": "e41f7",
                    "company_city": "e41f7",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 5,
                            "name": "e41f70",
                            "contact": "e41f70",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 6,
                            "name": "e41f71",
                            "contact": "e41f71",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 7,
                            "name": "e41f72",
                            "contact": "e41f72",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 12,
                "name": "doloribus possimus quia",
                "short_description": "Odio in voluptatum facere reprehenderit in et ratione. Temporibus in quisquam et impedit harum nisi sapiente. Nihil excepturi amet recusandae est quas unde qui placeat.",
                "long_description": "Suscipit tempore minima illo quia ut provident rerum consequatur. Tempore magnam aut consectetur modi. Iste amet ad sit rem iste blanditiis occaecati. Voluptates voluptas voluptatibus molestias. Non porro quod et ea molestiae ipsam sit. Et et perspiciatis sequi quibusdam labore. In accusamus commodi cumque harum et.",
                "price": 17142,
                "type": 2,
                "rating": 1.48,
                "rating_amount": 69,
                "company_id": 3,
                "created_at": "2020-11-22T01:40:08.000000Z",
                "updated_at": "2020-11-22T01:40:08.000000Z",
                "company": {
                    "id": 3,
                    "company_name": "e41f7",
                    "company_street": "e41f7",
                    "company_street_number": "e41f7",
                    "company_city": "e41f7",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 5,
                            "name": "e41f70",
                            "contact": "e41f70",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 6,
                            "name": "e41f71",
                            "contact": "e41f71",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 7,
                            "name": "e41f72",
                            "contact": "e41f72",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 13,
                "name": "laudantium ratione amet",
                "short_description": "Consequatur esse vero esse dolores excepturi non et. Perferendis sunt magnam qui optio. Nesciunt explicabo aut quis. Necessitatibus eum ducimus earum minima.",
                "long_description": "Omnis cumque nesciunt dolor nam ratione neque saepe consequatur. Aspernatur eaque quam ut id veniam aut molestiae. Asperiores ipsum quam cumque ratione exercitationem quia architecto odit. Velit explicabo debitis asperiores perspiciatis sint libero. Aspernatur fugiat rerum eum optio. Esse laudantium provident maxime itaque in et. Adipisci iste pariatur aut quos. Dolores repellat saepe magnam veritatis. Consequatur nemo aut qui temporibus.",
                "price": 13863,
                "type": 1,
                "rating": 4.64,
                "rating_amount": 68,
                "company_id": 2,
                "created_at": "2020-11-22T01:40:08.000000Z",
                "updated_at": "2020-11-22T01:40:08.000000Z",
                "company": {
                    "id": 2,
                    "company_name": "59d9b",
                    "company_street": "59d9b",
                    "company_street_number": "59d9b",
                    "company_city": "59d9b",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 4,
                            "name": "59d9b0",
                            "contact": "59d9b0",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 14,
                "name": "optio quo est",
                "short_description": "Neque provident dolores ex fugit. Accusamus porro veniam labore ea et neque libero. In eos alias quidem. Possimus corrupti dignissimos praesentium architecto et cumque.",
                "long_description": "Sed beatae ut omnis quis voluptates culpa. Distinctio voluptatem dolores magni sint. Ea rem eos quia nihil dolores adipisci molestias. Soluta voluptas voluptatibus eos autem et reprehenderit facere. Vero atque non facere. Nostrum veniam et saepe autem molestiae. Velit nesciunt modi blanditiis iste rem. Modi delectus officia quidem quia. Debitis dolore eaque deserunt et. Id qui consequuntur eos quaerat. Ab molestiae quos distinctio qui ut aut.",
                "price": 13515,
                "type": 2,
                "rating": 2.15,
                "rating_amount": 77,
                "company_id": 1,
                "created_at": "2020-11-22T01:40:08.000000Z",
                "updated_at": "2020-11-22T01:40:08.000000Z",
                "company": {
                    "id": 1,
                    "company_name": "42722",
                    "company_street": "42722",
                    "company_street_number": "42722",
                    "company_city": "42722",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 1,
                            "name": "427220",
                            "contact": "427220",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 2,
                            "name": "427221",
                            "contact": "427221",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 3,
                            "name": "427222",
                            "contact": "427222",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 15,
                "name": "et quaerat voluptatem",
                "short_description": "Voluptatem ullam consectetur commodi sunt unde rerum. Velit officiis est ut possimus. Qui omnis nulla esse saepe asperiores.",
                "long_description": "Aperiam quia quaerat iste velit quisquam expedita. Rerum ea incidunt similique. Hic rerum unde praesentium voluptas. Quis est dolore fugit placeat occaecati voluptatem minima. Aspernatur dolor autem quia consequatur quos delectus. Enim cupiditate et ipsum sed iste inventore. Corrupti ut aut ipsam est illo. Suscipit laudantium suscipit aut voluptatibus fugiat labore id. Ratione pariatur similique ut quod aut sit blanditiis error.",
                "price": 17847,
                "type": 1,
                "rating": 2.35,
                "rating_amount": 84,
                "company_id": 4,
                "created_at": "2020-11-22T01:40:08.000000Z",
                "updated_at": "2020-11-22T01:40:08.000000Z",
                "company": {
                    "id": 4,
                    "company_name": "cfd36",
                    "company_street": "cfd36",
                    "company_street_number": "cfd36",
                    "company_city": "cfd36",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 8,
                            "name": "cfd360",
                            "contact": "cfd360",
                            "company_id": 4,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 9,
                            "name": "cfd361",
                            "contact": "cfd361",
                            "company_id": 4,
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
    "http://localhost/PROJEKTY/Lokando/public/api/user" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"distinctio","surname":"ea","phone":"beatae","street":"ad","street_number":"sunt","city":"omnis","postal":"repellat","email":"dignissimos"}'

```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/api/user"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "distinctio",
    "surname": "ea",
    "phone": "beatae",
    "street": "ad",
    "street_number": "sunt",
    "city": "omnis",
    "postal": "repellat",
    "email": "dignissimos"
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
    -G "http://localhost/PROJEKTY/Lokando/public/_debugbar/open" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/_debugbar/open"
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
    -G "http://localhost/PROJEKTY/Lokando/public/_debugbar/clockwork/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/_debugbar/clockwork/1"
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
    -G "http://localhost/PROJEKTY/Lokando/public/_debugbar/telescope/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/_debugbar/telescope/1"
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
    -G "http://localhost/PROJEKTY/Lokando/public/_debugbar/assets/stylesheets" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/_debugbar/assets/stylesheets"
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
    -G "http://localhost/PROJEKTY/Lokando/public/_debugbar/assets/javascript" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/_debugbar/assets/javascript"
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
    "http://localhost/PROJEKTY/Lokando/public/_debugbar/cache/1/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/_debugbar/cache/1/"
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
    -G "http://localhost/PROJEKTY/Lokando/public/oauth/authorize" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/oauth/authorize"
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
    "http://localhost/PROJEKTY/Lokando/public/oauth/authorize" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/oauth/authorize"
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
    "http://localhost/PROJEKTY/Lokando/public/oauth/authorize" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/oauth/authorize"
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
    "http://localhost/PROJEKTY/Lokando/public/oauth/token" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/oauth/token"
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
    -G "http://localhost/PROJEKTY/Lokando/public/oauth/tokens" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/oauth/tokens"
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
    "http://localhost/PROJEKTY/Lokando/public/oauth/tokens/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/oauth/tokens/1"
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
    "http://localhost/PROJEKTY/Lokando/public/oauth/token/refresh" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/oauth/token/refresh"
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
    -G "http://localhost/PROJEKTY/Lokando/public/oauth/clients" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/oauth/clients"
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
    "http://localhost/PROJEKTY/Lokando/public/oauth/clients" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/oauth/clients"
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
    "http://localhost/PROJEKTY/Lokando/public/oauth/clients/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/oauth/clients/1"
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
    "http://localhost/PROJEKTY/Lokando/public/oauth/clients/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/oauth/clients/1"
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
    -G "http://localhost/PROJEKTY/Lokando/public/oauth/scopes" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/oauth/scopes"
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
    -G "http://localhost/PROJEKTY/Lokando/public/oauth/personal-access-tokens" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/oauth/personal-access-tokens"
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
    "http://localhost/PROJEKTY/Lokando/public/oauth/personal-access-tokens" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/oauth/personal-access-tokens"
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
    "http://localhost/PROJEKTY/Lokando/public/oauth/personal-access-tokens/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/PROJEKTY/Lokando/public/oauth/personal-access-tokens/1"
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


