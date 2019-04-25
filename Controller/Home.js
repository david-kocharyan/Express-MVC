class Home{
    index(req, res){
        let local = {
            title: "Welcome Page",
        }
        res.render("home", local);
    }
}

module.exports = Home;