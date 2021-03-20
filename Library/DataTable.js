import DataRow from './DataRow';
import DataColumn from './DataColumn';


class DataTable
{    
    constructor(columns, data , itemsPerPage)
    {      
        this.columns = [];
        this.rows = []; 
        this.itemsPerPage = itemsPerPage;
        this.filter='';
        this.readData(data);
        this.readColumns(columns);
    }

    readData(data)
    {     
        let rowIndex = 0;   
        data.forEach((item) => {
            this.rows.push(new DataRow(item , rowIndex));
            rowIndex++;
        })        
    }
    readColumns(columns){
        for(let i=0;i<columns.length;i++){
            let title = columns[i][0];
            let filterable =  true;
            if(columns[i][1] != undefined)
            {
                filterable = columns[i][1];
            }
            this.columns.push(new DataColumn(title, filterable));
        }
    }
    rowCount()
    {
        if(this.rows!=undefined || this.rows != null){
            return this.rows.length;
        }
        return 0;
    }   
    get(rowIndex, colIndex)
    {
        if(this.rows[rowIndex]!=undefined){
        return this.rows[rowIndex].getCell(colIndex);
        }
        return null;
    }
    changeFilter(filter){
        this.filter = filter;
        if(this.filter == '') {
            this.clearFilter();
        } else {     
            this.applyFilter();
        }
    }    
    applyFilter()
    {             
        for(let rowIndex = 0;rowIndex<this.rows.length;rowIndex++)
        {          
            let rowVisible=false;
            for(let cellIndex=0;cellIndex < this.rows[rowIndex].cellCount();cellIndex++)
            {
                if(this.columns[cellIndex].filterable ==true) {
                    if(this.get(rowIndex,cellIndex).toString().toLowerCase().includes(this.filter.toString().toLowerCase()))
                    {                    
                        rowVisible=true;
                    }
                }
            }
            this.rows[rowIndex].visible=rowVisible;
        }
    }
    clearFilter()
    {
        for(let rowIndex = 0;rowIndex<this.rows.length;rowIndex++)
        {
            this.rows[rowIndex].visible=true;
        }
    }
    getPageItems(pageNo)
    {   
        let activePage = 1;
        let pageItems = [];
        let visibleItems =0;
        for(let rowIndex = 0;rowIndex < this.rows.length; rowIndex++)
        {
            if(this.rows[rowIndex].visible == true)
            {
                if(activePage == pageNo)
                {
                    pageItems.push(this.rows[rowIndex]); 
                }
                visibleItems++;
                if( (visibleItems % this.itemsPerPage)==0){
                    activePage++;
                }
            }            
        }    
        return pageItems;       
    }
    getPageCount()
    {           
        let visibleItems = 0;     
        for(let rowIndex = 0;rowIndex<this.rows.length;rowIndex++){                                                  
            if(this.rows[rowIndex].visible == true) {                    
                visibleItems++;
            }                         
        }
        return Math.ceil(visibleItems / this.itemsPerPage); 
    }
}

export default DataTable;