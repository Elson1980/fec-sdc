import React, { useEffect, useState } from "react";

const ListItem = () => {
  const [item, setItem] = useState([])
  const getItem = async () => {
    try {
      const response = await fetch("http://localhost:3002");
      const jsonData = await response.json();
      // console.log(jsonData);
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
        <form key={e.person_id}>
        <section>
            {e.person_name}
          
        </section>
        <section>
        {e.person_date}
        </section>

        
        
      </form>
      ))}
      
    </main>
  );
};
export default ListItem;