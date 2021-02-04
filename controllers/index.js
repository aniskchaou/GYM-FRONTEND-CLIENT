const express=require('express')
var router=express.Router()
var client=require('../db/db.js')


router.get('/',(req,res)=>{
  //res.redirect('/list')
  res.render("elements/index", { viewTitle: 'GYM' });
})



/*
// /add
router.get('/add',(req,res)=>{
    res.render("employee/add",{
        viewTitle:'Add Employee'
    });
})    

router.post('/add',(req,res)=>{
    addEmployee(req,res);

})

router.get('/list',(req,res)=>{
  const sql = "SELECT * FROM employees"
  client.query(sql, [], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("employee/list", { model: result.rows,viewTitle:'Employees List' });
  });
})


// /edit
router.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employees WHERE id = $1 ";
    console.log(sql);
    client.query(sql, [id], (err, result) => {
      
        if (err) {
            return console.error(err.message);
          }
      res.render("employee/edit", { viewTitle:'Edit Employee',model: result.rows[0] });
     
    });
  });

  router.post("/edit/:id", (req, res) => {
    const id = req.params.id;
    const employeees = [req.body.email, req.body.city, req.body.mobile,req.body.name, id];
    const sql = "UPDATE employees SET email = $1, city = $2, mobile = $3 ,firstname= $4  WHERE (id = $5)";
    console.log(sql)
    client.query(sql, employeees, (err, result) => {

      res.redirect("/list");
    });
  });

// /list



// /delete
router.get("/delete/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM employees WHERE id = $1";
    client.query(sql, [id], (err, result) => {
      res.redirect("/list");
    });
  });


function addEmployee(req,res)
{
    var email=req.body.email
    var city=req.body.city
    var name=req.body.name
    var mobile=req.body.mobile

    queryInsertDb="INSERT INTO employees (email, firstname,mobile,city)VALUES ('"+email+"','"+name+"','"+mobile+"','"+city+"');";
    client.query(queryInsertDb).catch(err => {
        console.error(err);
    }).finally(() => {
        res.redirect("/list");
      
    });;
}
*/
module.exports=router;