import DataCell from './DataCell';

class DataRow
{
    constructor(obj, rowIndex)
    {
        this.rowIndex = rowIndex;
        this.visible = true;
        this.cells = [];
        this.readCells(obj);        
    }
    readCells(obj)
    {        
        let colIndex = 0;
        Object.entries(obj).forEach((dataItem) => {
            this.cells.push(new DataCell(dataItem[1], this.rowIndex, colIndex))
            colIndex++;
        })
    }
    cellCount()
    {
        if(this.cells!=undefined || this.cells!=null)
        {
            return this.cells.length;
        }
        return 0;
    }
    getCell(colIndex)
    {
        if(this.cells[colIndex] != undefined){
            return this.cells[colIndex].getData();
        } 
        return null;
    }
}
export default DataRow;