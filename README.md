# Express Response Config

Express Response is a tiny, zero dependencies  module to allow to extend `express.response` object by adding user defined structure of response object.

## Usage example

### Install Express Response

```bash
npm install express-response-config
```

### Define parameters object

```js
const parameters = {
    responseName: 'myCustomResponse',
    responseObKeys = ['message', 'data']
```

### In your bootstrap file (where express is imported) call `express-response`

```js
const express = require('express')
require('express-response')({
    express,
    ...parameters

})
const app = express()
```

### Call your custom response in your handler

Now handler takes to parameters:

* status code: integer
* object with keys defined in bootstrap file

```js
 myHandler = (req, res) => {
    return res.myCustomResponse(200, {
        message: 'my custom message',
        data: {
            a: 'b'
        }
    }
 }

```

Api will respond with:

```json
{
    "message": "my custom message",
    "data": {
        "a": "b"
    }
}

```
