import React from 'react';
class DashBoard extends React.Component
{
    render()
    {
        const UserDetails = JSON.parse(localStorage.getItem('user'));
        const Style={ textAlign: 'center' };
        return(<div>
                <h3 style={Style}>Hello {UserDetails.firstName} {UserDetails.lastName}</h3>
        </div>);
    }
}
export default DashBoard;