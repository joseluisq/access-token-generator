# Access Token SHA-1 Generator

**NodeJS app** to generate an access token based on [SHA-1 algorithm](http://en.wikipedia.org/wiki/SHA-1).
This app uses [crypto](http://nodejs.org/api/crypto.html) and [sha1](https://github.com/pvorb/node-sha1) node packages.

### How to use

**Install**

```sh
$ npm install
```

**Run on terminal**

```sh
$ node access_token.js

# Len   : 40
# Hex   : d4d9e6aa546d0672c8874f94f714e3f97ad99d88
# Sha1  : 9a1cc98ca74600995ff401fd4b4d93f45f4c3f94
# Token : ?access_token=d4d9e6aa546d0672c8874f94f714e3f97ad99d88
```

### License
[MIT License](http://opensource.org/licenses/MIT)
