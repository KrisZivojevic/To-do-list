import React, { useState } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import ShowList from './components/ShowList';

// TODO: add CSS

function App() {
  const [list, setList] = useState([]);
  return (
    <div>
      <AddItem setList={setList}/>
      <ShowList list={list}/>

    </div>
  );
}

export default App;
