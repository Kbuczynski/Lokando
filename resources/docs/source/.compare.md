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
    -d '{"name":"repellat","surname":"ad","phone":"maiores","street":"ullam","street_number":"non","city":"reiciendis","postal":"sunt","is_company":true,"email":"accusamus","password":"consequatur","password_confirmation":"natus","company_nip":14,"company_name":"sunt","company_phone":"rerum","company_street":"quo","company_street_number":"consequatur","company_city":"sunt","company_postal":"velit","company_description":"enim","company_slogan":"cupiditate","company_contacts":[],"category_id":17}'

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
    "name": "repellat",
    "surname": "ad",
    "phone": "maiores",
    "street": "ullam",
    "street_number": "non",
    "city": "reiciendis",
    "postal": "sunt",
    "is_company": true,
    "email": "accusamus",
    "password": "consequatur",
    "password_confirmation": "natus",
    "company_nip": 14,
    "company_name": "sunt",
    "company_phone": "rerum",
    "company_street": "quo",
    "company_street_number": "consequatur",
    "company_city": "sunt",
    "company_postal": "velit",
    "company_description": "enim",
    "company_slogan": "cupiditate",
    "company_contacts": [],
    "category_id": 17
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
    -d '{"email":"eum","password":"autem"}'

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
    "email": "eum",
    "password": "autem"
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
    -d '{"name":"quia","surname":"est","email":"vitae","company_nip":1,"company_name":"corporis","company_phone":"earum","company_street":"magni","company_street_number":"non","company_city":"odio","company_postal":"vel","company_description":"ducimus","company_slogan":"consequatur","category_id":10,"company_contacts":[]}'

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
    "name": "quia",
    "surname": "est",
    "email": "vitae",
    "company_nip": 1,
    "company_name": "corporis",
    "company_phone": "earum",
    "company_street": "magni",
    "company_street_number": "non",
    "company_city": "odio",
    "company_postal": "vel",
    "company_description": "ducimus",
    "company_slogan": "consequatur",
    "category_id": 10,
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
            "company_name": "8abe2",
            "company_slug": "8abe2",
            "company_phone": "8abe2",
            "company_street": "8abe2",
            "company_street_number": "8abe2",
            "company_city": "8abe2",
            "company_postal": "8abe2",
            "company_description": "8abe2",
            "company_slogan": "8abe2",
            "created_at": "2020-11-09T02:24:07.000000Z",
            "updated_at": null,
            "category": {
                "id": 4,
                "name": "Wyposażenie",
                "slug": "wyposazenie",
                "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/wyposazenie.jpg"
            },
            "company_contacts": [
                {
                    "id": 5,
                    "name": "8abe20",
                    "contact": "8abe20",
                    "company_id": 3,
                    "created_at": null,
                    "updated_at": null
                },
                {
                    "id": 6,
                    "name": "8abe21",
                    "contact": "8abe21",
                    "company_id": 3,
                    "created_at": null,
                    "updated_at": null
                }
            ]
        },
        "4": {
            "id": 5,
            "company_nip": 1111111111,
            "company_name": "f7533",
            "company_slug": "f7533",
            "company_phone": "f7533",
            "company_street": "f7533",
            "company_street_number": "f7533",
            "company_city": "f7533",
            "company_postal": "f7533",
            "company_description": "f7533",
            "company_slogan": "f7533",
            "created_at": "2020-10-10T02:24:07.000000Z",
            "updated_at": null,
            "category": {
                "id": 6,
                "name": "Transport",
                "slug": "transport",
                "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/transport.jpg"
            },
            "company_contacts": [
                {
                    "id": 8,
                    "name": "f75330",
                    "contact": "f75330",
                    "company_id": 5,
                    "created_at": null,
                    "updated_at": null
                }
            ]
        },
        "1": {
            "id": 2,
            "company_nip": 1111111111,
            "company_name": "94d0e",
            "company_slug": "94d0e",
            "company_phone": "94d0e",
            "company_street": "94d0e",
            "company_street_number": "94d0e",
            "company_city": "94d0e",
            "company_postal": "94d0e",
            "company_description": "94d0e",
            "company_slogan": "94d0e",
            "created_at": "2020-09-09T02:24:06.000000Z",
            "updated_at": null,
            "category": {
                "id": 2,
                "name": "Zakupy",
                "slug": "zakupy",
                "url": "http:\/\/localhost\/Lokando\/assets\/images\/category\/zakupy.jpg"
            },
            "company_contacts": [
                {
                    "id": 4,
                    "name": "94d0e0",
                    "contact": "94d0e0",
                    "company_id": 2,
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
    -G "http://localhost/Lokando/api/company/1?slug=sit" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/company/1"
);

let params = {
    "slug": "sit",
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
    -d '{"name":"totam","short_description":"dolorum","long_description":"voluptate","price":5,"type":1}'

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
    "name": "totam",
    "short_description": "dolorum",
    "long_description": "voluptate",
    "price": 5,
    "type": 1
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
    -d '{"phrase":"ducimus","category":5,"order_by":"qui","ascending":true}'

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
    "phrase": "ducimus",
    "category": 5,
    "order_by": "qui",
    "ascending": true
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
    "http://localhost/Lokando/api/products/1?id=consectetur" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"culpa","short_description":"occaecati","long_description":"voluptas","price":11,"type":17}'

```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/products/1"
);

let params = {
    "id": "consectetur",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "culpa",
    "short_description": "occaecati",
    "long_description": "voluptas",
    "price": 11,
    "type": 17
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
    "http://localhost/Lokando/api/products/1/rate?id=corrupti" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"rate":7}'

```

```javascript
const url = new URL(
    "http://localhost/Lokando/api/products/1/rate"
);

let params = {
    "id": "corrupti",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "rate": 7
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
                "name": "non eaque cupiditate",
                "short_description": "Id vitae ut eligendi quaerat. Rerum rerum eligendi quia nostrum hic quod et ut. Perspiciatis atque est sit dolor ipsum. Accusamus pariatur suscipit velit aut expedita vitae non dolor.",
                "long_description": "Vero architecto ex unde ut ad excepturi sunt voluptas. Nihil optio officia praesentium sequi qui. Corrupti sint quo et nam sed excepturi facere. Magni repellendus voluptatum alias rerum ratione maxime sunt. Ea est maiores aut rerum. Ullam voluptas aut perspiciatis. Distinctio hic neque omnis non qui. Eaque dolorum et natus suscipit nam pariatur. Temporibus non soluta rerum molestiae aliquam a reprehenderit. Iure nihil et in sit.",
                "price": 17079,
                "type": 2,
                "rating": 0.5,
                "rating_amount": 14,
                "category_id": 8,
                "company_id": 3,
                "created_at": "2020-11-22T02:24:07.000000Z",
                "updated_at": "2020-11-22T02:24:07.000000Z",
                "company": {
                    "id": 3,
                    "company_name": "8abe2",
                    "company_street": "8abe2",
                    "company_street_number": "8abe2",
                    "company_city": "8abe2",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 5,
                            "name": "8abe20",
                            "contact": "8abe20",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 6,
                            "name": "8abe21",
                            "contact": "8abe21",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 2,
                "name": "aliquam animi beatae",
                "short_description": "Laborum in doloribus sunt quae omnis sed nostrum. Eum ut suscipit quaerat aspernatur aut. Et qui excepturi quasi quis qui nihil dolorum. Qui sit ab quia excepturi corporis minima similique.",
                "long_description": "A culpa error dolores beatae cumque expedita eum nisi. Et velit porro ipsam voluptas sequi. Nobis quae nemo eum quod. Expedita dolorem ullam rerum fuga voluptas facilis voluptatem. Perferendis non est perferendis qui voluptatem facilis libero. Autem et ut voluptatem in. Dolor et placeat repudiandae repellendus saepe. Dolorum ex cumque sapiente qui veritatis laboriosam inventore. Et voluptas unde sunt non quo. Et est culpa quod aut. Fugit totam ipsum accusantium voluptatibus.",
                "price": 6698,
                "type": 1,
                "rating": 0.39,
                "rating_amount": 93,
                "category_id": 3,
                "company_id": 4,
                "created_at": "2020-11-22T02:24:07.000000Z",
                "updated_at": "2020-11-22T02:24:07.000000Z",
                "company": {
                    "id": 4,
                    "company_name": "48107",
                    "company_street": "48107",
                    "company_street_number": "48107",
                    "company_city": "48107",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 7,
                            "name": "481070",
                            "contact": "481070",
                            "company_id": 4,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 3,
                "name": "reprehenderit quis dolorum",
                "short_description": "Dolore ducimus vel modi occaecati qui numquam officia. Iure dolorem nostrum enim quia et sit voluptas. Sed ut natus debitis praesentium saepe aut minus.",
                "long_description": "Molestiae non sed neque ipsam et qui. Magnam rem sed eveniet vero qui illo voluptatem. Vel officia voluptas aspernatur nisi. Quis dolor esse libero officia odio. Eos vel aut asperiores nihil modi et et ratione. Est unde vel quaerat recusandae quae iste ut id. Dignissimos sit adipisci sit.",
                "price": 11999,
                "type": 2,
                "rating": 2.05,
                "rating_amount": 30,
                "category_id": 5,
                "company_id": 1,
                "created_at": "2020-11-22T02:24:07.000000Z",
                "updated_at": "2020-11-22T02:24:07.000000Z",
                "company": {
                    "id": 1,
                    "company_name": "ca176",
                    "company_street": "ca176",
                    "company_street_number": "ca176",
                    "company_city": "ca176",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 1,
                            "name": "ca1760",
                            "contact": "ca1760",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 2,
                            "name": "ca1761",
                            "contact": "ca1761",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 3,
                            "name": "ca1762",
                            "contact": "ca1762",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 4,
                "name": "eos nihil et",
                "short_description": "Cupiditate dolores delectus officia ut. Eum aut veniam iusto nesciunt. Asperiores minima temporibus rem sit provident. Saepe sit quibusdam voluptatem sed.",
                "long_description": "Asperiores est voluptate error voluptatem nihil ullam. Nihil tenetur dignissimos veritatis dicta. Libero facilis perferendis et sint ipsa vel omnis. Voluptates nostrum dolore nobis iste quam nulla. Natus voluptatum natus excepturi voluptatem cumque. Molestiae atque maiores eos molestiae earum odit ut velit. Sequi in tenetur beatae ut non molestias iure ut. Ut fugit fuga omnis deleniti ut.",
                "price": null,
                "type": 0,
                "rating": 4.59,
                "rating_amount": 47,
                "category_id": 5,
                "company_id": 2,
                "created_at": "2020-11-22T02:24:07.000000Z",
                "updated_at": "2020-11-22T02:24:07.000000Z",
                "company": {
                    "id": 2,
                    "company_name": "94d0e",
                    "company_street": "94d0e",
                    "company_street_number": "94d0e",
                    "company_city": "94d0e",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 4,
                            "name": "94d0e0",
                            "contact": "94d0e0",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 5,
                "name": "autem ea minima",
                "short_description": "Eos nesciunt omnis reprehenderit libero et. Sequi dicta culpa accusantium. Velit dignissimos rerum quae rerum eos. Reprehenderit recusandae nostrum quia beatae nisi neque.",
                "long_description": "Iusto iure magni explicabo iure. Vel et modi quam numquam ad. Cum eaque eligendi sit labore aliquam commodi. Architecto explicabo autem impedit nulla voluptatem tempore quia. Unde aut praesentium quis facilis. Est fugiat perferendis ad incidunt. Alias iure architecto minima modi beatae ut. Modi magnam quia explicabo porro facere cum.",
                "price": 15847,
                "type": 2,
                "rating": 2.81,
                "rating_amount": 87,
                "category_id": 9,
                "company_id": 5,
                "created_at": "2020-11-22T02:24:07.000000Z",
                "updated_at": "2020-11-22T02:24:07.000000Z",
                "company": {
                    "id": 5,
                    "company_name": "f7533",
                    "company_street": "f7533",
                    "company_street_number": "f7533",
                    "company_city": "f7533",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 8,
                            "name": "f75330",
                            "contact": "f75330",
                            "company_id": 5,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 6,
                "name": "harum enim eligendi",
                "short_description": "Maxime reprehenderit mollitia ab consequatur eaque harum omnis. Qui enim est laboriosam. Qui alias rerum hic earum sequi adipisci.",
                "long_description": "Accusamus nihil mollitia nihil dolorem eum. Earum quam ducimus iure eveniet. Pariatur iusto corporis perspiciatis. Fuga molestiae architecto vel molestiae et autem sunt. Quibusdam vel voluptatibus quam eius et. Maxime labore in sed voluptas eligendi. Quia ad natus voluptatem aliquam illum. Officia aut quae maiores rerum. Reprehenderit nesciunt velit modi incidunt at.",
                "price": null,
                "type": 0,
                "rating": 4.87,
                "rating_amount": 51,
                "category_id": 9,
                "company_id": 1,
                "created_at": "2020-11-22T02:24:07.000000Z",
                "updated_at": "2020-11-22T02:24:07.000000Z",
                "company": {
                    "id": 1,
                    "company_name": "ca176",
                    "company_street": "ca176",
                    "company_street_number": "ca176",
                    "company_city": "ca176",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 1,
                            "name": "ca1760",
                            "contact": "ca1760",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 2,
                            "name": "ca1761",
                            "contact": "ca1761",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 3,
                            "name": "ca1762",
                            "contact": "ca1762",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 7,
                "name": "quis non consequatur",
                "short_description": "Placeat magnam voluptatem ut fugit molestiae facilis esse quibusdam. Quaerat expedita sint est iure quaerat. Omnis repudiandae voluptas soluta sequi.",
                "long_description": "A fuga nesciunt et eius vero et eos. Tenetur eum dolor modi maiores. Aperiam autem culpa adipisci expedita voluptas non modi. Exercitationem iure consequatur et quis quae dolor voluptas. Necessitatibus rerum aut incidunt quam. Velit repellat nam voluptas laudantium dolore quibusdam et. Impedit distinctio quidem ducimus sit harum temporibus animi. Qui maxime beatae quis delectus nostrum eum ex.",
                "price": 14375,
                "type": 1,
                "rating": 1.12,
                "rating_amount": 65,
                "category_id": 3,
                "company_id": 2,
                "created_at": "2020-11-22T02:24:07.000000Z",
                "updated_at": "2020-11-22T02:24:07.000000Z",
                "company": {
                    "id": 2,
                    "company_name": "94d0e",
                    "company_street": "94d0e",
                    "company_street_number": "94d0e",
                    "company_city": "94d0e",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 4,
                            "name": "94d0e0",
                            "contact": "94d0e0",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 8,
                "name": "laborum ut odit",
                "short_description": "Atque corrupti repellendus dicta perspiciatis dignissimos. Quis ut enim nesciunt eos consectetur.",
                "long_description": "Atque dignissimos nobis eum. Sint consequatur ratione earum nam rerum mollitia. Modi sed voluptas quas aut voluptatem blanditiis voluptatem iste. Laudantium quia id iusto deleniti quod porro sunt non. Repudiandae nihil quia quis ut ducimus eveniet. Nostrum quibusdam possimus dolores laudantium aspernatur inventore voluptatem porro. Fuga sequi facilis id iste et recusandae aut. Voluptatibus molestias commodi quas nostrum. Sequi voluptates suscipit saepe numquam.",
                "price": 7104,
                "type": 1,
                "rating": 4.78,
                "rating_amount": 68,
                "category_id": 3,
                "company_id": 5,
                "created_at": "2020-11-22T02:24:07.000000Z",
                "updated_at": "2020-11-22T02:24:07.000000Z",
                "company": {
                    "id": 5,
                    "company_name": "f7533",
                    "company_street": "f7533",
                    "company_street_number": "f7533",
                    "company_city": "f7533",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 8,
                            "name": "f75330",
                            "contact": "f75330",
                            "company_id": 5,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 9,
                "name": "eum impedit sed",
                "short_description": "Iste natus at fugiat facilis. Labore nihil quo enim nulla maxime aliquid pariatur. Harum quos pariatur iusto consectetur quos sapiente.",
                "long_description": "Sunt et dolor ratione totam. Voluptates dolorem ullam voluptas natus qui. Omnis voluptates molestiae velit. Facilis voluptatem repellendus perspiciatis. Deserunt et vel et sit velit ut. Ut enim fugiat sequi ipsa qui modi. Nostrum corrupti voluptatem sit. Minus pariatur asperiores omnis adipisci sunt. Qui et fugiat totam omnis in quas. Et ea dolorum aliquid earum ab cupiditate dolorem.",
                "price": 7041,
                "type": 1,
                "rating": 2.29,
                "rating_amount": 79,
                "category_id": 4,
                "company_id": 3,
                "created_at": "2020-11-22T02:24:07.000000Z",
                "updated_at": "2020-11-22T02:24:07.000000Z",
                "company": {
                    "id": 3,
                    "company_name": "8abe2",
                    "company_street": "8abe2",
                    "company_street_number": "8abe2",
                    "company_city": "8abe2",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 5,
                            "name": "8abe20",
                            "contact": "8abe20",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 6,
                            "name": "8abe21",
                            "contact": "8abe21",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 10,
                "name": "fugiat quidem pariatur",
                "short_description": "Non labore mollitia at. Deleniti excepturi quibusdam quas facilis optio consequatur. Voluptatem voluptatum autem dignissimos ipsum ab. Velit possimus suscipit natus labore tempora.",
                "long_description": "Rem corporis et voluptas recusandae eos iure et. Et autem error at voluptas eos a est autem. Aspernatur velit at doloremque. Qui a voluptatem earum nesciunt odio earum. Reiciendis sit enim modi. Aut cumque autem voluptatem et similique assumenda distinctio. Est dolorem velit qui voluptatem quibusdam nihil quod. Molestiae alias ullam rerum et perspiciatis. Assumenda voluptatum quisquam nisi ipsum officia quasi. Et ea magnam sed. Voluptatem est ipsum vero eligendi qui et ad.",
                "price": null,
                "type": 0,
                "rating": 3.51,
                "rating_amount": 66,
                "category_id": 6,
                "company_id": 2,
                "created_at": "2020-11-22T02:24:07.000000Z",
                "updated_at": "2020-11-22T02:24:07.000000Z",
                "company": {
                    "id": 2,
                    "company_name": "94d0e",
                    "company_street": "94d0e",
                    "company_street_number": "94d0e",
                    "company_city": "94d0e",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 4,
                            "name": "94d0e0",
                            "contact": "94d0e0",
                            "company_id": 2,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 11,
                "name": "voluptatibus consequatur eum",
                "short_description": "Nisi ea nobis at quam reprehenderit aut eum nulla. Sit facere dolorem quaerat sed. Quia distinctio assumenda doloribus impedit magni quis. Magni mollitia est ut dignissimos.",
                "long_description": "Saepe dolore dicta est assumenda ad sunt. Similique molestiae est praesentium molestiae asperiores eaque. Deserunt et adipisci atque qui. Aut harum eos nihil eius provident. Nostrum nisi tempore voluptatibus dolorem quia unde. Quod consectetur est provident saepe. Est voluptatibus ea doloribus vitae. Fugit doloremque doloribus sed maxime praesentium. Minus quo laboriosam aliquam inventore dolore vel natus. Rerum sint in ipsum.",
                "price": 625,
                "type": 1,
                "rating": 2.74,
                "rating_amount": 29,
                "category_id": 9,
                "company_id": 1,
                "created_at": "2020-11-22T02:24:07.000000Z",
                "updated_at": "2020-11-22T02:24:07.000000Z",
                "company": {
                    "id": 1,
                    "company_name": "ca176",
                    "company_street": "ca176",
                    "company_street_number": "ca176",
                    "company_city": "ca176",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 1,
                            "name": "ca1760",
                            "contact": "ca1760",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 2,
                            "name": "ca1761",
                            "contact": "ca1761",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 3,
                            "name": "ca1762",
                            "contact": "ca1762",
                            "company_id": 1,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 12,
                "name": "ea eum neque",
                "short_description": "Vel nihil tenetur placeat omnis. Quidem est earum provident beatae aut sed. Rerum eaque voluptatem laudantium quaerat.",
                "long_description": "Sequi molestiae quidem quae tempore adipisci ea laborum nostrum. Ut eum id non. Doloribus non delectus unde minima debitis dolorem. Vero autem qui mollitia delectus. Numquam numquam quasi repudiandae ullam voluptas inventore optio tempora. Fugiat unde nulla enim aperiam est. Enim enim labore recusandae qui quidem. Nisi repudiandae sequi reprehenderit tempore sit ea vel. Officiis voluptatem amet doloremque vitae ea id. Ut cupiditate numquam aperiam illum ducimus eum.",
                "price": 17725,
                "type": 2,
                "rating": 4.28,
                "rating_amount": 29,
                "category_id": 4,
                "company_id": 3,
                "created_at": "2020-11-22T02:24:07.000000Z",
                "updated_at": "2020-11-22T02:24:07.000000Z",
                "company": {
                    "id": 3,
                    "company_name": "8abe2",
                    "company_street": "8abe2",
                    "company_street_number": "8abe2",
                    "company_city": "8abe2",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 5,
                            "name": "8abe20",
                            "contact": "8abe20",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        {
                            "id": 6,
                            "name": "8abe21",
                            "contact": "8abe21",
                            "company_id": 3,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 13,
                "name": "reiciendis ducimus rem",
                "short_description": "Temporibus amet eum voluptas earum praesentium accusantium harum. Omnis quos voluptas nisi consequatur. Iusto id qui sint ut quia asperiores provident.",
                "long_description": "Et adipisci amet quisquam aut amet quisquam nostrum. Aliquid expedita assumenda eos ut rerum dignissimos aut error. Nisi ipsum et repellat nihil eaque porro. Sed rem totam natus. Sed qui quas eos non perspiciatis perferendis consectetur adipisci. Libero consequatur nulla omnis quo. Nihil totam quisquam facilis. Odio praesentium est eos.",
                "price": 19628,
                "type": 1,
                "rating": 3.27,
                "rating_amount": 9,
                "category_id": 4,
                "company_id": 5,
                "created_at": "2020-11-22T02:24:07.000000Z",
                "updated_at": "2020-11-22T02:24:07.000000Z",
                "company": {
                    "id": 5,
                    "company_name": "f7533",
                    "company_street": "f7533",
                    "company_street_number": "f7533",
                    "company_city": "f7533",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 8,
                            "name": "f75330",
                            "contact": "f75330",
                            "company_id": 5,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 14,
                "name": "recusandae nostrum aspernatur",
                "short_description": "Nesciunt reiciendis debitis praesentium nulla ab nemo esse. Fugiat aperiam voluptatem perferendis suscipit. Dolor enim recusandae et neque ducimus.",
                "long_description": "Voluptates voluptate quis rerum incidunt. Veniam sunt harum quasi. Eveniet ullam distinctio aut ullam. Sed odit aliquam quo omnis cum. Dolorem voluptatem voluptatem omnis exercitationem maxime minus. Adipisci magnam aut debitis dolores consequatur sit consequuntur. Exercitationem voluptatum deserunt cumque quia. Odio quia modi ut praesentium. Soluta quia nam cupiditate repellat nulla. Hic odit aperiam voluptatem enim.",
                "price": 12219,
                "type": 1,
                "rating": 1.5,
                "rating_amount": 25,
                "category_id": 4,
                "company_id": 5,
                "created_at": "2020-11-22T02:24:07.000000Z",
                "updated_at": "2020-11-22T02:24:07.000000Z",
                "company": {
                    "id": 5,
                    "company_name": "f7533",
                    "company_street": "f7533",
                    "company_street_number": "f7533",
                    "company_city": "f7533",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 8,
                            "name": "f75330",
                            "contact": "f75330",
                            "company_id": 5,
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            },
            {
                "id": 15,
                "name": "distinctio mollitia consequuntur",
                "short_description": "Pariatur dolor non temporibus qui officiis est qui. Quaerat cumque minima commodi laboriosam. Omnis nihil veritatis necessitatibus. Non fugit tempore sapiente sed nihil nemo esse sed.",
                "long_description": "Dolore et totam tenetur placeat. Aut ea dolor perspiciatis sunt ea sequi. Dolores perferendis dolorem dolor sequi autem cumque sed. Ut deserunt qui magnam molestiae eos. Quia et ipsum aut quibusdam in. Optio error modi eius. Dolor eligendi amet eum. Voluptate reprehenderit et harum. Dolorem id voluptatum assumenda fuga voluptatem omnis. Consequatur vel et aut exercitationem qui sint ipsa. Eligendi eum sit sunt consequatur quibusdam. Dolores sit id non omnis atque et ipsum.",
                "price": 2522,
                "type": 2,
                "rating": 1.52,
                "rating_amount": 86,
                "category_id": 8,
                "company_id": 5,
                "created_at": "2020-11-22T02:24:07.000000Z",
                "updated_at": "2020-11-22T02:24:07.000000Z",
                "company": {
                    "id": 5,
                    "company_name": "f7533",
                    "company_street": "f7533",
                    "company_street_number": "f7533",
                    "company_city": "f7533",
                    "category": null,
                    "company_contacts": [
                        {
                            "id": 8,
                            "name": "f75330",
                            "contact": "f75330",
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
    -d '{"name":"illo","surname":"qui","phone":"voluptatibus","street":"qui","street_number":"deserunt","city":"maxime","postal":"eum","email":"ducimus"}'

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
    "name": "illo",
    "surname": "qui",
    "phone": "voluptatibus",
    "street": "qui",
    "street_number": "deserunt",
    "city": "maxime",
    "postal": "eum",
    "email": "ducimus"
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


