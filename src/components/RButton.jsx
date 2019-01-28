import React from 'react';

class RButton extends React.Component
{
    RButton_onClick(event)
    {
        this.props.RClick(event);
    }
    render()
    {
        return(<button className="myButton" onClick={this.RButton_onClick.bind(this)}>{this.props.ButtonName}</button>);
    }
}
export default RButton;