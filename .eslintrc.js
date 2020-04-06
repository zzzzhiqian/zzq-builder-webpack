module.exports = {
  "parser": "babel-eslint", // 解析器，通过 babel-eslint解析eslint
  "extends": "airbnb-base",  //继承，可为数组
  "env": {  //环境
    "browser": true,
    "node": true
  },
  "rules": {  //可以对上述不符合个人习惯的规则做修改
    // "indent": ["error", 4],
    // 'semi': 0
  }
}