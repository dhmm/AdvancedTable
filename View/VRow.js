import React from 'react';
import VCell from './VCell';

class VRow extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        
        return(
            <tr>
                {this.props.dataRow.cells.map( (cell) => {
                    return <VCell data={cell.data}/>;
                })}
                {this.props.additionalCells.map( (additionalCell)=> {
                    return <VCell data={additionalCell}/>
                })}
            </tr>
        )
    }   
}

export default VRow;