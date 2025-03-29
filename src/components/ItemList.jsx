import { useState, useEffect } from "react";
import Item from "./Item";

const ItemList = ({apiUrl}) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");
    // your code here
    
    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = async() => {
        try{
            const response = await fetch(apiUrl);
            if(!response.ok) throw new Error("Failed to fetch");
            const data = await response.json();
            setItems(data);
        }catch(err){
            setError(err);
        }
    }

    const handleDelete = async(id) => {
        try{
            const response = await fetch(`${apiUrl}/${id}`, 
                {method: "DELETE"}
            );
            if(!response.ok) throw new Error("Failed to delete")
            
            setItems((prev) => prev.filter((item) => item.id !== id))
            
        }catch(err){
            setError(err.message);
        }
    }

    return (
        <>
            {error && <p>{error}</p>}
            {items.map((item) => (
                <Item key={item.id} item={item} onDelete={handleDelete} />
            ))}
        </>
    );
};

export default ItemList;