SystemJS.config({
  paths: {
    "*": "*.js",
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "examples/": "examples/",
    "unigrid/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  transpiler: "plugin-babel",
  packages: {
    "unigrid": {
      "main": "unigrid.js",
      "format": "esm",
      "meta": {
        "*.js": {
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-react-jsx"
            ]
          }
        }
      }
    },
    "examples": {
      "main": "examples.js",
      "format": "esm",
      "meta": {
        "*.js": {
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-react-jsx"
            ]
          }
        }
      }
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
      "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.6.0",
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
      "core-js": "npm:core-js@2.4.1"
    },
    "packages": {
      "github:capaj/systemjs-hot-reloader@0.6.0": {
        "map": {
          "debug": "npm:debug@2.2.0",
          "weakee": "npm:weakee@1.0.0",
          "socket.io-client": "github:socketio/socket.io-client@1.4.8"
        }
      },
      "npm:debug@2.2.0": {
        "map": {
          "ms": "npm:ms@0.7.1"
        }
      },
      "npm:babel-plugin-transform-react-jsx@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.8.0",
          "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.9.0"
        }
      },
      "npm:babel-helper-builder-react-jsx@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "esutils": "npm:esutils@2.0.2",
          "lodash": "npm:lodash@4.14.1",
          "babel-types": "npm:babel-types@6.11.1"
        }
      },
      "npm:babel-plugin-syntax-jsx@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6"
        }
      },
      "npm:babel-runtime@6.11.6": {
        "map": {
          "core-js": "npm:core-js@2.4.1",
          "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
        }
      },
      "npm:babel-types@6.11.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "esutils": "npm:esutils@2.0.2",
          "lodash": "npm:lodash@4.14.1",
          "babel-traverse": "npm:babel-traverse@6.12.0",
          "to-fast-properties": "npm:to-fast-properties@1.0.2"
        }
      },
      "npm:babel-traverse@6.12.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-types": "npm:babel-types@6.11.1",
          "lodash": "npm:lodash@4.14.1",
          "babylon": "npm:babylon@6.8.4",
          "babel-code-frame": "npm:babel-code-frame@6.11.0",
          "invariant": "npm:invariant@2.2.1",
          "babel-messages": "npm:babel-messages@6.8.0",
          "globals": "npm:globals@8.18.0",
          "debug": "npm:debug@2.2.0"
        }
      },
      "npm:babel-code-frame@6.11.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "esutils": "npm:esutils@2.0.2",
          "chalk": "npm:chalk@1.1.3",
          "js-tokens": "npm:js-tokens@2.0.0"
        }
      },
      "npm:babylon@6.8.4": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6"
        }
      },
      "npm:babel-messages@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6"
        }
      },
      "npm:invariant@2.2.1": {
        "map": {
          "loose-envify": "npm:loose-envify@1.2.0"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "has-ansi": "npm:has-ansi@2.0.0",
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "supports-color": "npm:supports-color@2.0.0"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "domain": "npm:jspm-nodelibs-domain@0.2.0",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.0",
    "json": "github:systemjs/plugin-json@0.1.2",
    "path": "npm:jspm-nodelibs-path@0.2.0",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "react": "npm:react@15.3.0",
    "react-dom": "npm:react-dom@15.3.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.0",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.0"
  },
  packages: {
    "npm:react@15.3.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "fbjs": "npm:fbjs@0.8.3"
      }
    },
    "npm:fbjs@0.8.3": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "immutable": "npm:immutable@3.8.1",
        "core-js": "npm:core-js@1.2.7",
        "ua-parser-js": "npm:ua-parser-js@0.7.10",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "promise": "npm:promise@7.1.1"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.4"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0",
        "node-fetch": "npm:node-fetch@1.5.3"
      }
    },
    "npm:node-fetch@1.5.3": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:buffer@4.7.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6"
      }
    },
    "npm:stream-http@2.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.4",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hmac": "npm:create-hmac@1.1.4",
        "create-hash": "npm:create-hash@1.1.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "sha.js": "npm:sha.js@2.4.5",
        "ripemd160": "npm:ripemd160@1.0.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-des": "npm:browserify-des@1.0.0"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.5",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "elliptic": "npm:elliptic@6.3.1"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "bn.js": "npm:bn.js@4.11.5",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.5",
        "elliptic": "npm:elliptic@6.3.1",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.5",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "asn1.js": "npm:asn1.js@4.8.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.0": {
      "map": {
        "buffer-browserify": "npm:buffer@4.7.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.0": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.1"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.0": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    }
  }
});
