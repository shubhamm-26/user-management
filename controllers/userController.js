const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createUser = async (req, res) => {
    try {
        const name = req.body.name;
        const DOB = new Date(req.body.DOB);
        const today = new Date();
        let age = today.getFullYear() - DOB.getFullYear();
        const hasBirthdayOccurredThisYear = (today.getMonth() > DOB.getMonth()) || (today.getMonth() === DOB.getMonth() && today.getDate() >= DOB.getDate());
        if (!hasBirthdayOccurredThisYear) {
            age--;
        }
        const location = req.body.location;
        const newUser = new User({ name, DOB, age, location });
        await newUser.save();
        res.json(newUser);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}


const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const getUserByName = async (req, res) => {
    try {
        const name = req.params.name;
        const user = await User.findOne({ name: name });
        if (user == null) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}


const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (req.body.name != null) {
            user.name = req.body.name;
        }
        if (req.body.DOB != null) {
            user.DOB = req.body.DOB;
            user.age = new Date().getFullYear() - new Date(user.DOB).getFullYear();
        }
        if (req.body.location != null) {
            user.location = req.body.location;
        }
        await user.save();
        res.json(user);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.deleteOne();
        res.json({ message: 'User deleted' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const getRandomUser = async (req, res) => {
    try {
        const users = await User.find();
        const randomUser = users[Math.floor(Math.random() * users.length)];
        res.json(randomUser);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}


const checkUserExistence = async (req, res) => {
    try {
        const name = req.body.name;
        const user = await User.findOne({ name: name });
        if (user == null) {
            return res.json(false);
        }
        return res.json(true);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const usersAboveAge = async (req, res) => {
    try {
        const age = req.body.age;
        const users = await User.find({ age: { $gte: age } });
        res.json(users);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const listUserNames = async (req, res) => {
    try {
        const users = await User.find();
        const names = users.map(user => user.name);
        res.json(names);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const getUsersByLocation = async (req, res) => {
    try {
        const location = req.params.location;
        const users = await User.find({ location: location });
        res.json(users);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = { getAllUsers, createUser, getUserById, updateUser, deleteUser, getRandomUser, checkUserExistence, usersAboveAge, listUserNames, getUsersByLocation, getUserByName};