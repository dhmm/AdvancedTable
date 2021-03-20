class DataCell
{
    constructor(data, rowIndex, colIndex)
    {
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
        this.data = data;
    }
    getData()
    {
        return this.data;
    }
}
export default DataCell;