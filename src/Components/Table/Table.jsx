import React, {} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import 'react-bootstrap-table/css/react-bootstrap-table.css'


const cellEditProp = { mode: 'click' }

const selectRowProp = {
    mode: 'radio',
    clickToSelect: true,
    selected: [1],
    bgColor: 'gold'
};

const Table1  = ({data}) => {
    return (
        <BootstrapTable data = {data}
                        selectRow={selectRowProp}
                        insertRow={true}
                        deleteRow={true}
                        cellEdit={cellEditProp}
                        hover
        >
            <TableHeaderColumn isKey dataField='id' dataSort>
                ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataSort>
                Name
            </TableHeaderColumn>
            <TableHeaderColumn dataField='value' dataSort>
                Value
            </TableHeaderColumn>
        </BootstrapTable>
    );
}
export default Table1;