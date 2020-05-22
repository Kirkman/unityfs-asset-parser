# UnityFS AssetBundle parser [![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/unitiyfs-asset-parser.svg
[npm-url]: https://npmjs.org/package/unitiyfs-asset-parser

UnityFS asset bundle parser in JavaScript, *without native modules*.

Code is loosely based on [UnityPack](https://github.com/HearthSim/UnityPack). Thanks for the inspiration!

**NOTE**: I've only tested this with a very limited number of assets of very specific formats. If you want to improve it, PRs are welcome.

My main goal was to be able to get this done entirely in JavaScript without a native module or any external processes. Should work in node.js, Electron / Cordova and plain browsers (with a Buffer polyfill).
