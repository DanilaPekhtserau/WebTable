import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import 'react-bootstrap-table/css/react-bootstrap-table.css'


const Table1  = () => {
        return (
                <BootstrapTable>
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