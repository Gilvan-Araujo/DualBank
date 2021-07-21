module.exports = {
  reactStrictMode: true,
  "presets": [
    "next/babel"
  ],
  "plugins": [
    "inline-react-svg"
  ]
}

const withImages = require("next-images");
module.exports = withImages();