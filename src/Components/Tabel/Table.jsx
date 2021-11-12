import React, { Component } from 'react';
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
                <BootstrapTable data = {data} hover
                                selectRow={selectRowProp}
                                insertRow={true}
                                deleteRow={true}
                                cellEdit={cellEditProp}
                >
                    <TableHeaderColumn isKey dataField='id'>
                        ID
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>
                        Name
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='value'>
                        Value
                    </TableHeaderColumn>
                </BootstrapTable>
        );
}
export default Table1;