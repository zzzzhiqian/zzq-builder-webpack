const assert = require('assert')

describe('webpack.base.js test case', () => {

  const baseConfing = require('../../lib/webpack.base.js')
  console.log(baseConfing)
  it('entry', () => {
    assert.equal(baseConfing.entry.index, 'C:/Users/11251/Desktop/my-project/builder-webpack/test/smoke/template/src/index/index.js')
    assert.equal(baseConfing.entry.search, 'C:/Users/11251/Desktop/my-project/builder-webpack/test/smoke/template/src/search/index.js')
  })
})