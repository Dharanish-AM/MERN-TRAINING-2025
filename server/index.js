const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const PORT = 9000;

app.use(cors({
    origin: '*',
}))

app.use(express.json())

const Signup = require('./models/signupSchema');

const connectTODB = async () => {

    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("Connected to MongoDB")
        })
        .catch((err) => {
            console.log(err)
        })
}

connectTODB()

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
            return res.status(404).send({ response: "User not found", loginStatus: false });
        }

        if (bcrypt.compare(user.password, password)) {
            res.status(200).send({ response: "Login successful", loginStatus: true });
        } else {
            res.status(401).send({ response: "Incorrect password", loginStatus: false });
        }
    } catch (err) {
        res.status(500).send("Error during login");
    }
});


app.post('/updateuser', async (req, res) => {

    try {
        const updatedUser = await Signup.findOneAndUpdate({ firstName: "Bavanetha" }, { $set: { userName: "Bava@27" } });
        console.log(updatedUser)
        res.json("updatedUser now");
        updatedUser.save();
    } catch (err) {
        res.status(500).send("Error updating user details");
    }
});

app.delete('/deleteuser', async (req, res) => {
    const { id } = req.body;

    try {
        const deletedUser = await Signup.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).send("User not found");
        }
        res.status(200).send("User deleted successfully");
    } catch (err) {
        res.status(500).send("Error deleting user");
    }
});

app.get('/getsignupdet', async (req, res) => {
    var signUpdet = await Signup.find()
    res.status(200).json(signUpdet);
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})