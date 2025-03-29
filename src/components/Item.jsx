const Item = ({ item, onDelete }) => {

  // Render a single item
  // Add a Delete and Edit button
  return(
      <div>
          <h3>{item.name}</h3>
          <div>
              <button onClick={() => onDelete(item.id)}>Delete</button>
          </div>
      </div>
  )
};

export default Item;