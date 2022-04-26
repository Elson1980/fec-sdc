const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./router");

app.use(cors());
app.use(express.json());

// //routes for the server
// app.post("/", async (req, res) => {
//   try {
//     const person = await pool.query(
//       "INSERT INTO people (person_name, person_date) VALUES ($1, $2) RETURNING *",
//       [req.body.person_name, req.body.person_date]
//     );
//     res.json(person.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

app.get("/product/:id?", async (req, res) => {
  try {
    if (req.params.id === undefined) {
      let allProducts = await pool.query("SELECT * FROM product");
      res.json(allProducts.rows)
    } else {
      let singleProduct = await pool.query("SELECT * FROM product WHERE id = $1",[
        req.params.id])
      res.json(singleProduct.rows)
    }
  } catch (err) {
    console.log(err.message)
  }
})

app.get("/product/1/sku/:id?", async (req, res) => {
  try {
    if (req.params.id === undefined) {
      let allProducts = await pool.query("SELECT * FROM sku");
      res.json(allProducts.rows)
    } else {
      let singleProduct = await pool.query("SELECT * FROM sku WHERE id = $1",[
        req.params.id])
      res.json(singleProduct.rows)
    }
  } catch (err) {
    console.log(err.message)
  }
})



// app.put("/:index", async (req, res) => {
//   console.log('put test')
//   try{
//     const { person_name, person_date } = req.body
//     let query = `
//     UPDATE people SET 
//     person_name = COALESCE($1, person_name),
//     person_date = COALESCE($2, person_date)
//     WHERE person_id = $3`;
//     let updatePerson = await pool.query(query, [person_name, person_date, req.params.index])
//     res.json('updated!')

//   }catch (err) {
//     console.log(err.message)
//   }
// })

// app.delete("/:index", async (req, res) => {
//   try{
//     let deletePerson =  await pool.query("DELETE FROM people WHERE person_id = $1", [req.params.index])
    
//     res.json("DELETED")
//   }catch(err){
//     console.log(err.message)
//   }
// })

app.listen(3001, () => {
  console.log("server started on 3001");
});
