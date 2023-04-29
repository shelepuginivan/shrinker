# shrinker

Url shortener

## Endpoints

### 1. `POST /`

Add an url shortcut

#### Request

Accepts 2 parameters (in request body):

1. `origin` - url to be shortened
2. `slug` (optional) - human-readable slug for `origin`

If this slug is already taken, returns 400 status code.

Example:

```json
{
    "origin": "https://github.com/",
    "slug": "gh"
}
```

#### Response

Response is a JSON with following fields:

1. `origin` - origin link
2. `slug` - slug specified in request. If weren't specified, returns an uuid
3. `shortenedLink` - shortened link

Example

```json
{
    "origin": "https://github.com/", 
    "slug": "gh",
    "shortenedLink": "http://localhost:8000/gh"
}
```

### 2. `GET /:slug`

Redirects request to the saved url (302 status code).
If slug weren't found, returns 404 status code.

## How to run

Clone this repository

```shell
git clone
cd shrinker
```

Setup config file
```shell
cp config/example.json config/default.json
vi config/default.json
```

Build the project

```shell
npm install
npm run build
```

Run server

```shell
npm start
```
