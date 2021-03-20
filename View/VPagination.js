import React from 'react';

class VPagination extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            activePage : 1,
            pageCount : 0
        }
    }
    changePage(pageNo)
    {        
        this.setState({
            activePage:pageNo
        })
        this.props.changePage(pageNo);
    }
    render()
    {       
        const pages = [];
        for(let i = 1; i<=this.props.pageCount;i++) {
            pages.push(i);
        }        
        return(
            <div>
                {
                    pages.map( (pageNo) => { 
                        let backgroundColor='blue'; 
                        if(pageNo == this.state.activePage) {
                            backgroundColor = 'red';
                        }                      
                        return <div onClick={evt => {this.changePage(pageNo)}} style={{cursor:'pointer' , float:'left', marginRight:'20px', padding:'10px', background:backgroundColor}}>  {pageNo} </div>; 
                    })
                }                
            </div>
        )
    }
}

export default VPagination;