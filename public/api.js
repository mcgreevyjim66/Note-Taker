// import required dependencies
const apirtr = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ("fs");

//define a GET route for the /api/notes endpoint using the apirtr.get() method
apirtr.get('/api/notes', async (req, res) => {
  //The fs.readFileSync() method is used to read the contents of the db/db.json file.
  //The JSON.parse() method is used to parse the JSON data from the db/db.json file into a JavaScript object.
  const jsonFile = JSON.parse(fs.readFileSync("db/db.json","utf8"));
 // The res.json() method is used to send the JSON data to the client.
  res.json(jsonFile);
});


apirtr.post('/api/notes', (req, res) => {
   //The fs.readFileSync() method is used to read the contents of the db/db.json file.
  //The JSON.parse() method is used to parse the JSON data from the db/db.json file into a JavaScript object.
  const jsonFile = JSON.parse(fs.readFileSync("db/db.json","utf8"));
 // create a now json object for the new note, add a unique id
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  // add newNote to the json object array
  jsonFile.push(newNote);
  //write new not to db.json
  fs.writeFileSync("db/db.json",JSON.stringify(jsonFile));
  //send to json object back to the client
  res.json(jsonFile);
});

// Define the delete route
apirtr.delete('/api/notes/:id', (req, res) => {
  // Read the JSON data from the DB file
  const jsonData = fs.readFileSync("db/db.json", "utf8");
  const jsonFile =  JSON.parse(jsonData);

  // Filter the notes to remove the note with the specified ID
  const deletedNotes = jsonFile.filter((note) => {
    return note.id !== req.params.id;
  });

  // Write the updated JSON data back to the DB file
  fs.writeFileSync("db/db.json",JSON.stringify(deletedNotes));

  // Send a response to the client
  res.json("note has been deleted!.");
});


module.exports = apirtr; 
