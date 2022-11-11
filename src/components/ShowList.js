// TODO: add CSS

import Item from "./Item";

function ShowList(props) {

  return (
    <div>
      <p>Show List</p>
      {props.list.map((item, index) => <Item key={index} id={index + 1} title={item.title} description={item.description} />)}
    </div>
  )
}

export default ShowList;