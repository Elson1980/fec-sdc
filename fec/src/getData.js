import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


const ListItem = () => {
    const [item, setItem] = useState([])
  const getItem = async () => {
    try {
      const response = await fetch("http://localhost:3001");
      const jsonData = await response.json();
      console.log(jsonData);
      setItem(jsonData)
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getItem();
  }, []);

 
  return (
    
    <main>
      Item
      {item.map((e) => (
        <form key={e.id}>
        <section>
            {e.review_title}
            <Button color="danger">Danger!</Button>
          
        </section>
        <section>
        
        </section>

        
        
      </form>
      ))}
      
    </main>
  );
};
export default ListItem;