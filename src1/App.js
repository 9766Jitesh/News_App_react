import React, { Component } from 'react'
import Navbar from './component/Navbar'
import NewsHeading from './component/NewsHeading'
import NewsItem from './component/NewsItem'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <NewsHeading></NewsHeading>
        <NewsItem pageSize={3} country={'in'} ></NewsItem>
        </div>
    )
  }
}
