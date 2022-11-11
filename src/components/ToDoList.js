import React, { useState } from 'react';
import ListItem from './ListItem';

function ToDoList({list}) {
    return (
        <div>
            {list.length > 0 ? list.map((item, i) => <ListItem key={item.id} item={item} i = {i + 1}/>) 
            : 
            <p>List is empty.</p>
            }

        </div>
    )
}

export default ToDoList;