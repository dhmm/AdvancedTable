import React from 'react';

class VCell extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <td>{this.props.data}</td>
        )
    }
}

export default VCell;