import React, { Component } from 'react';

export default class CardContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Cards {...props}/>
      </div>
    )
  }
}
