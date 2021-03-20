import React from 'react';

class VFilter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            filter : ''
        }
    }
    changeFilter(evt)
    {
        let filter = evt.target.value;
        this.setState({
            filter:filter
        })
        this.props.changeFilter(filter);
    }
    render()
    {
        return(
            <div><input onChange={evt=>this.changeFilter(evt)} type="text"/></div>
        )
    }
}
export default VFilter;