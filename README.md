# gatsby-remark-code-block-links

[![Greenkeeper badge](https://badges.greenkeeper.io/chasm/gatsby-remark-code-block-links.svg)](https://greenkeeper.io/)

Add links to related information to markdown code blocks.

## Install

`yarn add gatsby-transformer-remark gatsby-remark-code-block-links`

or

`npm install -S gatsby-transformer-remark gatsby-remark-code-block-links`

## How to use

```javascript
// In your gatsby-config.js file:
plugins: [
  resolve: `gatsby-transformer-remark`,
  options {
    plugins: [
      {
        resolve: `gatsby-remark-code-block-links`,
        options: {
          folder: `${__dirname}/deep-dive/`,
        },
      },
    ],
  },
]
