const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + '/date.js');



const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const app = express();
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let items = ['Buy Food', 'Cook Food', 'Eat Food'];
let workListItems = []

app.get("/", function (req, res) {

  

    // if (today.getDate() === 6 || today.getDay() == 0) {
    //     day = "Weekday";
    // }

    // else {
    //     day = "Workday";
    // }

    // day = weekday[today.getDay()]
    let day = date.getDate();

    res.render('list', { listTitle: day, todo_list: items, title:'TODO List' });





});


app.get('/work', function (req, res) {
    res.render('list', { listTitle: "Work List", todo_list: workListItems, title:null });
});



app.post('/', function (req, res) {
    let item = req.body.todo;
    console.log(req.body.list);

    if (req.body.list === 'Work') {
        workListItems.push(item);
        res.redirect('/work');
    }
    else {
        items.push(item)
        res.redirect('/');
    };

});


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});