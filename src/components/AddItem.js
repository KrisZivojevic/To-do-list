import React, { useState } from 'react';

// function AddItem({list, add}) {
function AddItem(props) {
    const [item, setItem] = useState({
        id: "",
        title: "",
        description: ""
    })
    const addI = (event) => {
        event.preventDefault(); // defaultno ponasanje browsera je onemogucena.
        console.log(item);
        let maxId = props.list.length + 1;
        setItem({...item, id: maxId});

        props.add(item);
    }

    return (
        <div>
            <form>
                <label>Title:</label>
                <input type="text" value={item.title} onChange={event => setItem({...item, title: event.target.value})} />
                <br/>
                <label>Description:</label>
                <input type="text" value={item.description} onChange={event => setItem({...item, description: event.target.value})} />
                <br/>
                <button onClick={addI}>Add to List</button>
            </form>
        </div>
    )
}

export default AddItem;