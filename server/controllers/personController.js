const Person = require("../models/personModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

// @desc register new person
// @route POST /api/person/register
// @access PUBLIC
const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    const existPerson = await Person.findOne({ email });
    if (existPerson)
      return res.status(400).json({ msg: "you have already registered" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newPerson = await Person.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ msg: "user created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

// @desc login as a person
// @route POST /api/person/login
// @access PUBLIC
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // test for validate email
    const existPerson = await Person.findOne({ email });
    if (!existPerson)
      return res.status(400).json({ msg: "you have  register first ." });
    // test for validate password
    const validatePassword = await bcrypt.compare(
      password,
      existPerson.password
    );
    if (!validatePassword)
      return res.status(400).json({ msg: " wrong password ." });
    const token = await jwt.sign(
      { sub: existPerson._id },
      process.env.SECRET_KEY,
      { expiresIn: "30d" }
    );
    res.json({ token, role: existPerson.role });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

// @desc load person info
// @route GET /api/person/personInfo
// @access PRIVATE - owner

const loadPersonInfo = async (req, res) => {
  try {
    const personInfo = await Person.findById(req.personId).select("-password");
    res.json(personInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

// @desc update user profile picture
// @route PUT /api/person/profulePic
// @access PRIVATE - owner

const updateProfilePic = async (req, res) => {
  try {
    console.log(req.file);
    const imageUrl = `/uploads/${req.file.filename}`;
    await Person.findByIdAndUpdate(req.personId, { profilePic: imageUrl });
    res.json({ msg: "profile picture update" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};
module.exports = { register, login, loadPersonInfo, updateProfilePic };
