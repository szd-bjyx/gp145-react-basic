import React, { Component } from 'react'

export default class Tv extends Component {
  render() {
    console.log(this.props.match)
    return (
      <div>
        tv
      </div>
    )
  }
}
