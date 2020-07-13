# manga-server

​
List of available endpoints:
​
- `POST /register`
- `POST /login`

And routes below need authentication
- `POST /passwords`
- `GET /passwords`
- `DELETE /passwords/:id`

### POST /register

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "email": "string"
}
```

### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
  "access_token": "string"
}
```

### POST /passwords
Request:

- headers: access_token

- data:

```json
{
  "name": "Google",
  "url": "www.google.com",
  "password": "qweqwe",
  "username": "d@mail.com"
}
```

​Response:

- status: 201
- body:
  ​

```json
{
  "id": 1,
  "UserId": 1,
  "name": "Google",
  "url": "www.google.com",
  "password": "qweqwe",
  "username": "d@mail.com"
}
```

### GET /passwords

Description: Get all current logged in user passwords

Request:

- headers:
  - access_token: string

Response:

- status: 200
- body:
  ​

```json
[
    {
        "id": 1,
        "url": "www.google.com",
        "name": "Google",
        "password": "qweqwe",
        "username": "d@mail.com",
        "UserId": 1,
        "createdAt": "2020-04-20T03:26:40.438Z",
        "updatedAt": "2020-04-20T03:26:40.438Z"
    }
]
```

### DELETE /passwords/:id

description: 
  Delete one of the current logged in user password. (cannot delete another user password)

Request:

- headers: access_token
- params: 
  - id: integer (required)

Response:

- status: 200
- body:

```json
{
    "message": "Delete Password successfull"
}
```
