import React from  'react';

class VColumnRow extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <tr>
                {
                    this.props.columns.map((column) => {
                        return <th>{column.title}</th>;
                    })
                }
            </tr>
        )
    }
}

export default VColumnRow;