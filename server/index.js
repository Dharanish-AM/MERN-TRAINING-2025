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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})