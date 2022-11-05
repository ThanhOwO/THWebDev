import React from 'react'

class Ex3 extends React.Component {
    
    onchange() {
      console.log("changed");
    }
    onblur() {
      console.log("blured");
    }
    render() {
      return <input onchange={this.onChange} onBlur={this.onBlur} />
    }
}
 export default Ex3;
