const express = require('express');
const app = express();

const PORT = 9000;

const Signup = require('./models/signupSchema');

app.post("/signup", (req, res) => {
    const { firstname, lastname, username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new ({
        firstname,
        lastname,
        username,
        email,
        password: hashedPassword
    });
    user.save((err, user) => {
        if (err) {
            res.status(400).send({ message: err.message });
        }
        res.send({ message: "User created successfully" });
    });
})


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await Signup.findOne({ email: email });
      if (!user) {
        return res.status(404).send({response:"User not found",loginStatus:false});
      }
  
      if (bcrypt.compare(user.password , password)) {
        res.status(200).send({response:"Login successful",loginStatus:true});
      } else {
        res.status(401).send({response:"Incorrect password",loginStatus:false});
      }
    } catch (err) {
      res.status(500).send("Error during login");
    }
  });
  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})