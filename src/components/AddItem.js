// TODO: add CSS

import { useId, useState } from "react";

function AddItem(props) {
  const [formData, setFormData] = useState({title: "", description: ""})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    setFormData(prevState => {


      return {...prevState, [name]: value}
    })
  }


  const handleForm = (event) => {
    event.preventDefault();
    props.setList(prevState => {
      return [...prevState, formData]
    });
  }

  return (
    <form>
      <label>Title:</label>
      <input name="title" onChange={handleChange}/>
      <label>Description:</label>
      <input name="description" onChange={handleChange}/>
      <br/>
      <button onClick={handleForm}>Add</button>
    </form>
  )
}

export default AddItem;