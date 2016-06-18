# Config

v.1.0.0

## Install

First of all, you need to set up new registry:

`npm --save install 2conf`


## Usage Example

`cat index.js`

```javascript
var Config = require('2conf');

var config = new Config(process.env.ENV);

console.log(config);
```

## Change Log
[all changes](CHANGELOG.md)

## Created by

Dimitry Ivanov <2@ivanoff.org.ua> # curl -A cv ivanoff.org.ua
