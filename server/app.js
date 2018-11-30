// Conectando con la base de datos

let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://wilmer:yes1980@ds119164.mlab.com:19164/tourmat";


// Creacion de esquem para la coleccion de empresas

let empresaSchema = new mongoose.Schema({
    nombreEmpresa: String,
    lastNameName: String
});

  // Esquema de actividades
let actividadSchema = new mongoose.Schema({
    nombreActividad: String,
});

  // Esquema de localidades
let localidadSchema = new mongoose.Schema({
    nombreLocalidad: String,
});


let Business = mongoose.model("Business", empresaSchema);
let Activity = mongoose.model("Activity", actividadSchema);
let Location = mongoose.model("Location", localidadSchema)


// API REST
app.post("/addname", (req, res) => {
 
});

// Middleware
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// 
app.post("/addname", (req, res) => {
    var myData = new Business(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });