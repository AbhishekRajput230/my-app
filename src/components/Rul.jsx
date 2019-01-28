import React from 'react';

class Rul extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {Data : this.props.Data};
    }
    componentDidMount() {
        console.log("Mounted ", this.props.Data);
      }
    
      componentWillUnmount() {
        console.log("Unmounting ", this.props.Data);
      }
      componentWillMount()
      {
          console.log("WillMount ", this.props.Data);
      }
  
    _onClick(event, key)
    {
        console.log(event.target.key);
    }
    render()
    {
        console.log("rerendering ", this.props.Data);
        const cont = this.props.Data;
        const li = cont.map((num, index)=><li key={index.toString()} onClick={(e,index)=>this._onClick.bind(e,index)} >{num}</li>);
        return(<ul>{li}</ul>);
    }
}
export default Rul;