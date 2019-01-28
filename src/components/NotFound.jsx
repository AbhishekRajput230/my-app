import React from 'react';
class NotFound extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log(this.props);
    }
    render()
    {
        return(<div>Page Not Found......</div>);
    }
}
export default NotFound;