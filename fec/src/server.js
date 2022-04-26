const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./router");

app.use(cors());
app.use(express.json());

//routes for the server
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

// app.get("/:index?", async (req, res) => {
//   try {
//     if (req.params.index !== undefined) {
//       let singlePerson = await pool.query("SELECT *, to_char(person_date, 'yyyy-MM-dd') as person_date FROM people WHERE person_id = $1", [
//         req.params.index
//       ]);
//       console.log(req.params.index)
//       console.log(singlePerson.rows)   
//       res.json(singlePerson.rows);
//     } else {
//       let allPeople = await pool.query("SELECT *, to_char(person_date, 'yyyy-MM-dd') as person_date FROM people");
//       res.json(allPeople.rows);
//     }
//   } catch (err) {
//     console.log(err.message);
//   }
// });

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
// });

app.get("/features/:id?", async (req, res) => {
  const { id } = req.params;
  try {
    if (id !== undefined) {
      let productFeatures = await pool.query("SELECT * FROM features WHERE id = $1", [id]);

      console.log(id)
      console.log(productFeatures.rows)
      res.json(productFeatures.rows);
    } else {
      let allFeatures = await pool.query("SELECT * FROM features");
      res.json(allFeatures.rows);
    }
  } catch (err) {
    console.log(err.message);
  }
});

//Get Legal Name
app.get("/legal/:id?", async (req, res) => {
  const { id } = req.params;
  try {
    if (id !== undefined) {
      let legalName = await pool.query("SELECT * FROM legal WHERE id = $1", [id]);

      console.log(id)
      console.log(legalName.rows)
      res.json(legalName.rows);
    } else {
      let allNames = await pool.query("SELECT * FROM legal");
      res.json(allNames.rows);
    }
  } catch (err) {
    console.log(err.message);
  }
});

// Get ourPartner Name
app.get("/partner/:id?", async (req, res) => {
  const { id } = req.params;
  try {
    if (id !== undefined) {
      let partnerName = await pool.query("SELECT * FROM ourpartners WHERE id = $1", [id]);

      console.log(id)
      console.log(partnerName.rows)
      res.json(partnerName.rows);
    } else {
      let allFeatures = await pool.query("SELECT * FROM ourpartners");
      res.json(allFeatures.rows);
    }
  } catch (err) {
    console.log(err.message);
  }
});

// Get customerService Name
app.get("/service/:id?", async (req, res) => {
  const { id } = req.params;
  try {
    if (id !== undefined) {
      let customerService = await pool.query("SELECT * FROM customerservice WHERE id = $1", [id]);

      console.log(id)
      console.log(customerService.rows)
      res.json(customerService.rows);
    } else {
      let allFeatures = await pool.query("SELECT * FROM customerservice");
      res.json(allFeatures.rows);
    }
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(3001, () => {
  console.log("server started on 3001");
});
