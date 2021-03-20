import React from 'react';
import DataTable from '../Library/DataTable';
import VRow from './VRow';
import VColumnRow from './VColumnRow';
import VPagination from './VPagination';
import VFilter from './VFilter';
class VTable extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            dataTable : null,
            activePage : 1 ,
            filter : ''
        }    
        this.changePage = this.changePage.bind(this);    
        this.changeFilter = this.changeFilter.bind(this);                   
    }
    componentDidMount()
    {    
        this.props.populate().then((data)=>{
            this.setState({
                dataTable : new DataTable(this.props.columns, data , this.props.itemsPerPage)
            })           
        })
    }   
    changePage(pageNo)
    {        
        this.setState({
            activePage : pageNo
        });        
    }
    changeFilter(filter)
    {
        this.state.dataTable.changeFilter(filter);
        this.setState({
            filter:filter
        }) 
        
    }        
    render()
    {        
        if(this.state.dataTable != null){                              
            return(
                <div>
                    <VFilter changeFilter={this.changeFilter}/>                        
                    <table>                                                 
                        <VColumnRow columns={this.state.dataTable.columns} />                         
                        {
                            this.state.dataTable.getPageItems(this.state.activePage).map((dataRow)=>{
                                return(
                                    <VRow 
                                        dataRow={dataRow} 
                                        /*Additional cells goes here*/
                                        additionalCells={
                                            [
                                                'Additional cell' , 
                                                'Additional cell' , 
                                            ]
                                        }
                                    />
                                )
                            })
                        }
                    </table>
                    <VPagination pageCount={this.state.dataTable.getPageCount()} changePage={this.changePage}/>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default VTable;