const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./router");

app.use(cors());
app.use(express.json());

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
    console.log(err.message)
  }
})

app.delete("/:index", async (req, res) => {
  try{
    let deletereview =  await pool.query("DELETE FROM people WHERE person_id = $1", [req.params.index])
    
    res.json("DELETED")
  }catch(err){
    console.log(err.message)
  }
})

app.listen(3001, () => {
  console.log("server started on 3001");
});


app.get("/a/:index?", async (req, res) => {
  try {
    
    if (req.params.index !== undefined) {
      let singleReview = await pool.query("SELECT author_name FROM author WHERE author_id = $1" , [
        req.params.index
      ]);
    
      res.json(singleReview.rows);
    }
  
} catch (err) {
  console.log(err.message);
}
    })