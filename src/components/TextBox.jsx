import React from 'react';

class TextBox extends React.Component
{
    textChangeEvent(event){
        this.props.textChange(this.props.StateName, event.target.value);
    }
    render(){
        return(<input type="text" onChange={(e)=> this.textChangeEvent(e)} />);
    }

}
export default TextBox;