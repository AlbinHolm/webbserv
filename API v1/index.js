let app = require("express")();
app.listen(3000);
console.log("Servern körs på port 3000");

let users = [
  {
    id: 0,
    firstname: "Holger",
    lastname: "Rosencrantz",
  },
  {
    id: 1,
    firstname: "Kalle",
    lastname: "Anka",
  },
];

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/dokumentation.html");
});

app.get("/users", function (req, res) {
  console.log(req.query);
  if (Object.keys(req.query).length == 0) {
    res.send(users);
    return;
  }
  let output = [];
  for (let key in req.query) {
    for (let i = 0; i < users.length; i++) {
      if (users[i][key] == req.query[key]) {
        output.push(users[i]);
      }
    }
  }
  res.send(output);
});

app.get("/users/:id", function (req, res) {
  console.log(req.params);

  for (let i = 0; i < users.length; i++) {
    if (users[i].id == req.params.id) {
      res.send(users[i]);
      return;
    }
  }
  res.sendStatus(404);
});
