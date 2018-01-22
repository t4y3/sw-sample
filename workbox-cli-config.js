module.exports = {
  "globDirectory": "./docs/",
  "globPatterns": [
    "**/*.html"
  ],
  "runtimeCaching": [
    {
      "urlPattern": /http:\/\/d2xfsusb1c630p\.cloudfront\.net.+$/,
      "handler": 'staleWhileRevalidate'
    }
  ],
  "swDest": "docs/sw.js",
  "clientsClaim": true,
  "skipWaiting": true
};
