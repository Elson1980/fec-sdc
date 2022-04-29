const express = require("express");
const app = express();
const cors = require("cors");
const {pool, client} = require("./router");

require('dotenv').config()

app.use(cors());
app.use(express.json());


app.get("/", async (req, res) => {

  try {
    console.log(client)
    res.status(200).send(process.env.USER)
  } catch (err) {
        console.error(err.message);
      }
    });

//routes for the server
app.post("/", async (req, res) => {
  console.log(req.body)
  try {
    const review = await pool.query(
      "INSERT INTO reviews (author_r_name, review_title, review_date, review_stars, review_body, review_recommend) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;",
      [req.body.author_r_name, req.body.review_title, req.body.review_date, req.body.review_stars, req.body.review_body, req.body.review_recommend]
    );
    res.json(review.rows[0]);
  } catch (err) {
        console.error(err.message);
      }
    });

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

app.get("/product/:id?", async (req, res) => {
  try {
    if (req.params.id === undefined) {
      let allProducts = await pool.query("SELECT * FROM product");
      res.status(200).json(allProducts.rows)
    } else {
      let singleProduct = await pool.query("SELECT * FROM product WHERE id = $1",[
        req.params.id])
      res.status(200).json(singleProduct.rows)
    }
  } catch (err) {
    console.log(err.message)
  }
})

app.get("/product/1/sku/:id?", async (req, res) => {
  try {
    console.log('attempting pull from database')
    console.log(req.params.index, 'index')
    if (req.params.index !== undefined) {
      let singleReview = await pool.query("SELECT *, to_char(review_date, 'yyyy-MM-dd') as review_date FROM reviews WHERE id > $1 LIMIT 5", [
        req.params.index
      ]);
      
      res.json(singleReview.rows);
    } else {
      let allReviews = await pool.query("SELECT *, to_char(review_date, 'yyyy-MM-dd') as review_date FROM reviews");
      res.json(allReviews.rows);
    }
  } catch (err){
    console.log(err)
  }
})

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

app.put("/:index", async (req, res) => {
  console.log('put test')
  try{
    const { review_name, review_date } = req.body
    let query = `
    UPDATE people SET 
    review_name = COALESCE($1, review_name),
    review_date = COALESCE($2, review_date)
    WHERE review_id = $3`;
    let updatereview = await pool.query(query, [review_name, review_date, req.params.index])
    res.json('updated!')

  }catch (err) {
    if (req.params.id === undefined) {
      let allProducts = await pool.query("SELECT * FROM sku");
      res.json(allProducts.rows)
    } else {
      let singleProduct = await pool.query("SELECT * FROM sku WHERE id = $1",[
        req.params.id])
      res.json(singleProduct.rows)
    }
  } 
})
    
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


app.get('/dropdown/menu1', (req,res)=>{
  pool.query('SELECT * FROM menu1;')
  .then((result)=> {
    res.send(result.rows)})
    .catch((err)=> console.log(err))
  });
  
app.get('/dropdown/menu2/:parent', (req,res)=>{
const parent = req.params.parent;
pool.query('SELECT * FROM menu2 WHERE parent=$1',[parent])
.then((result)=> {
res.send(result.rows)})
.catch((err)=> console.log(err))
});

app.get('/dropdown/menu3/:parent', (req,res)=>{
const parent = req.params.parent;
pool.query('SELECT * FROM menu3 WHERE parent=$1',[parent])
.then((result)=> {
res.send(result.rows)})
.catch((err)=> console.log(err))
});

app.get('/dropdown/test', (req,res)=>{
const parent = req.params.parent;
pool.query('SELECT * FROM menu2')
.then((result)=> {
res.send(result.rows)})
.catch((err)=> console.log(err))
});

app.get("/:index?", async (req, res) => {
  try {
    console.log('attempting pull from database')
    console.log(req.params.index, 'index')
    if (req.params.index !== undefined) {
      let singleReview = await pool.query("SELECT *, to_char(review_date, 'yyyy-MM-dd') as review_date FROM reviews WHERE id > $1 LIMIT 5", [
        req.params.index
      ]);
      
      res.json(singleReview.rows);
    } else {
      let allReviews = await pool.query("SELECT *, to_char(review_date, 'yyyy-MM-dd') as review_date FROM reviews");
      res.json(allReviews.rows);
    }
  } catch (err) {
    console.log(err.message);
  }
});


app.listen(3002, () => {
console.log("server started on 3002");
});