import React, { Component } from 'react'
import App from "./App.js"
import MergePDF from "./MergePDF.js"

class Main extends Component {

  constructor() {
    super()
    this.pages = {
      "App": App,
      "MergePDF": MergePDF
    }
    this.state = {selected: MergePDF}
    this.handleHashChange()
  }

  // Will handle the page chaged based on hash change events
  handleHashChange(hash) {
    window.onhashchange = function (hash) {
      let newHash = hash.newURL.split("#")[1]
      this.setState({selected: this.pages[newHash]})
    }.bind(this)
  }

  render() {
    return (
      <this.state.selected />
    )
  }

}
export default Main
