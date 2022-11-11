function Item(props) {
  return (
    <div>
        <p>{props.id}</p>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
  )
}

export default Item;