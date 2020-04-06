const assert = require('assert')

describe('webpack.base.js test case', () => {

  const baseConfing = require('../../lib/webpack.base.js')
  console.log(baseConfing)
  it('entry', () => {
    assert.equal(baseConfing.entry.index.indexOf('builder-webpack/test/smoke/template/src/index/index.js') > -1, true)
    assert.equal(baseConfing.entry.search.indexOf('builder-webpack/test/smoke/template/src/search/index.js') > -1, true)
  })
})