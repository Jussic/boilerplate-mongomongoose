require('dotenv').config();

const mongoose = require('mongoose');
const {Schema} = mongoose;

const personSchema= new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

mongoose
.connect('mongodb+srv://JC:admin@cluster0.5z3ag.mongodb.net/PROJECT0?retryWrites=true&w=majority', {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(Error, err.message);
});

let Person;
Person = mongoose.model("Person", personSchema);

const createAndSavePerson =(done) => {
  
  var testPerson = new Person({name:"Test", age:43, favoriteFoods: ["vodka", "air"]});
  
  testPerson.save((err, data) => {
    if (err) 
    return console.error(err);
    done(null, data)
});
};

var arrayOfPeople = 
[
  {name: "Test", age: 42, favoriteFoods: ["vodka", "air"]},
  {name: "Test1", age: 43, favoriteFoods: ["vodka", "air"]},
  {name: "Test2", age: 44, favoriteFoods: ["vodka", "air"]}
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) 
    console.log("This is an error saving " + " " +  err);
    done(null, data);
  })
};
const Database = require("@replit/database")
const db = new Database()

const findPeopleByName = (personName, done) => {
  Person.findOne({name: personName}, (err, data) => {
      if(err) return console.log(err);
      done(null, data);
    }); 
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food},  (err,data) => {
    if (err) return console.log(err);
    done (null, data);
  })
};

const findPersonById = (personId, done) => {
  Person.findById({_id: personId}, (err,data) => {
    if (err) return console.log(err);
    done(null, data);
  }); 
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://JC:<password>@cluster0.5z3ag.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

 */



//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
