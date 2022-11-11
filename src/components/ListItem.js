function ListItem({item, i}) {
    return (
        <div>
            <div key={item.id}>
                <p>{i}</p>
                    <div>{item.title ? item.title : 'No title'}</div>
            </div>
        </div>
    )
}

export default ListItem;