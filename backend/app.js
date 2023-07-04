const express = require("express");
const db = require("./data/database");
const session = require("express-session");
const mongodbStore = require("connect-mongodb-session");
const { PythonShell } = require("python-shell");
const CsvToJson = require("csvtojson");

const MongoDBStore = mongodbStore(session);

const app = express();

const sessionStore = new MongoDBStore({
  uri: "mongodb://127.0.0.1:27017",
  databaseName: "instructor",
  collection: "sessions",
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "super-secret",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);

app.post("/", async (req, res) => {
  const { username, password } = req.body;
  const instructors = await db
    .getDb()
    .collection("instructor")
    .find({ username: username, password: password })
    .toArray();
  if (instructors[0]) {
    req.session.user = {
      id: instructors[0]._id,
      username: instructors[0].username,
    };
    req.session.isAuthenticated = true;
    req.session.save(() => {
      res.json({ message: "User found", userFound: true });
    });
  } else {
    res.json({ message: "User not found", userFound: false });
  }
});

app.get("/class", async (req, res) => {
  if (!req.session.isAuthenticated) {
    return res.json({ userAuth: false });
  }

  const [classes] = await db
    .getDb()
    .collection("instructor")
    .find({ username: req.session.user.username })
    .project({ _id: 0, classes: 1 })
    .toArray();
  res.json({ userAuth: true, classes });
});

app.get("/logout", (req, res) => {
  req.session.user = null;
  req.session.isAuthenticated = false;
  res.json({ loggedOut: true });
});

app.post("/recording", (req, res) => {
  const path = "./model/model.py";
  const options = {
    args: [req.body.fileName],
  };
  PythonShell.run(path, options).then(() => {
    res.json({ message: "Program Finished" });
  });
});

app.post("/attendance", (req, res) => {
  CsvToJson()
    .fromFile(`./model/attendance/${req.body.fileName}.csv`)
    .then((df) => {
      res.json(df);
    });
});

db.connectToDatabase().then(function () {
  app.listen(5000);
});
