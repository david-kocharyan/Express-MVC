const app = require("./config/init");
const PORT = 3000;
app.listen(PORT, function(){
    console.log(`Server run is ok, port - ${PORT}`)
});