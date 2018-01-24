'use strict'

const visit = require('unist-util-visit')
const R = require('ramda')

module.exports = function ({ markdownAST }) {
  visit(markdownAST, `html`, function (node) {
    const [, pre, inner, post] = R.match(
      /(.+)<code>(.+)<\/code>(.+)/s,
      node.value
    )

    if (inner) {
      R.forEach(l => console.log(`\n${l}\n`), R.split('\n', inner))
    }
  })

  return markdownAST
}
