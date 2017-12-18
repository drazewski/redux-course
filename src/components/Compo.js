import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import createClass from 'create-react-class'


//ES5 approach of creating Compononets using createClass

// var Compo = createClass({

//   getInitialState: function() {
//     return {
//       color: "#f10"
//     }
//   },

//   render: function() {
//      return <h1 style={{color: this.state.color}}>{this.props.title}</h1>
//   }
// })

//ES6 APPROACH OF CLASSES EXTENDINGS THE COMPONENTS
 
class Compo extends Component {
  constructor() {
    super();
    this.state = { color: "#f10" };
  }

  // onButtonClick() {
  //   this.setState({ text: 'Clicked!' });
  // }
  render() {
    return (
      <h1 style={{ color: this.state.color }}>{this.props.title}</h1>
    )
  }
}

export default Compo