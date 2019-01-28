import React from 'react';
class RefTextBox extends React.Component
{    
    constructor(props)
    {
        super(props);
        this.state = {ClassName:'focus-input100'};
    }
    onClickHandler(event)
    {
        if(event.target.value === '')
        {
            this.setState({ClassName : 'focus-input100'});
        }
        else
        {
            this.setState({ClassName :'val-input100'});
        }
    }
    render()
    {
        return(        
            <div className="wrap-input100" >
                <input className="input100" type={this.props.Type} ref={this.props.RefData} onChange={(e)=>this.onClickHandler(e)} />
                <span className={this.state.ClassName} data-placeholder={this.props.Placeholder}></span>
            </div>
        );
    }
}
export default RefTextBox;