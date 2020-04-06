// document.write('search page')
'use strict'
// import React from 'react'
// import ReactDOM from 'react-dom'
// import largeNumber from '@zzq0608/large-number'
// // import '../../common'
// import classnames from 'classnames'
// import logo from './images/logo.jpg'
// import { a } from './tree-shaking'
// import './search.css'
// import './search.less'

const React = require('react')
const ReactDOM = require('react-dom')
const largeNumber = require('@zzq0608/large-number')
// require('../../common')
const classnames = require('classnames')
const logo = require('./images/logo.jpg')
const { a } = require('./tree-shaking')
require('./search.css')
require('./search.less')

if (false) {
  a()
}
class Search extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      Text: null
    }
  }
  loadComponent() {
    import('./text.js').then((Text) => {
      console.log(Text, 'Text')
      this.setState({
        Text: Text.default
      })
      console.log(this.state)
    })
  }
  render() {
    const { Text } = this.state
    const addResult = largeNumber('9999', '8')
    return <div className={classnames('search-text', 'search-less')}>
      {
        Text ? <Text /> : null
      }
      {addResult}
      Search Text name456465461112121287987987979456465465465465468<img onClick={this.loadComponent.bind(this)} src={logo} />
    </div>
  }
}

module.exports = <Search />