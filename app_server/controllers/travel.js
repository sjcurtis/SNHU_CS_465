/* GET travel view */
const travel = (req, res) => {
    console.log("test2")
    res.render('travel', { title: 'Travlr Getaways' });
    console.log("test3")
};

module.exports = {
    travel
};