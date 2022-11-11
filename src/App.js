import React, { useState } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import ToDoList from './components/ToDoList';

function App() {
  const [list, setList] = useState([]); // isto sto i const list = []; const setList = (newList) => list = newList

  const addToList = (item) => {
    console.log("item iz addToList je: ", item);
    setList(list => [...list, item])
  }

  // const arr1 = ["a", "b", "c"];
  // const arr1Copy = [...arr1]; // output: ["a", "b", "c"]
  // const arr1CopyWithNewItem = [...arr1, "d"]; // output: ["a", "b", "c", "d"]

  // Spread operator se koristi da bi se napravila kopija originalnog niza, tj. da bi se orig. niz sacuvao u izvornom stanju, cime osiguravamo
  // da cemo uvek imati stare vrednosti prilikom dodavanja novih.

  return (
    <div>
      <AddItem list={list} add={addToList} />
      {/*<AddItem list={list} add={(item) => setList(list => [...list, item])} /> */}
      <ToDoList list={list}/>

    </div>
  );
}

export default App;
