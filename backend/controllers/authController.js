const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const mongoose = require("mongoose");
const Session = require("../models/Session");
const Resume = require("../models/Resume");
const Question = require("../models/Question");
const UserSheetProgress = require("../models/UserSheetProgress");
const { sendVerificationEmail } = require("../utils/sendEmail");

const ACCESS_TOKEN_EXPIR