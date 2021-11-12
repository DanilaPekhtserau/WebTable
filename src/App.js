import React, { Component } from 'react';
import './App.css';
import Table1 from "./Components/Tabel/Table";



function App() {
    let Constdata = [
        {id: 1, name: 'Gob', value: '2'},
        {id: 2, name: 'Buster', value: '5'},
        {id: 3, name: 'George Michael', value: '4'}
    ];
  return (
    <div className="App">
      <Table1 data={Constdata}/>
    </div>
  );
}

export default App;
