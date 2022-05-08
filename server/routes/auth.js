import express from "express";
import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import JWT from "jsonwebtoken";
const router = express.Router();

router.post(
  "/signup",
  body("email").isEmail().normalizeEmail().withMessage("The email is invalid"),
  body("username").custom((value) => {
    return User.find({
      username: value,
    }).then((user) => {
      if (user.length > 0) {
        throw "Username is taken!";
      }
    });
  }),
  body("password")
    .isLength({ min: 5 })
    .withMessage("The password is too short"),
  async (req, res) => {
    const validationErrors = validationResult(req);

    // If validation errors is not empty
    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => {
        return {
          msg: error.msg,
        };
      });
      return res.json({ errors, data: null });
    }

    const { username, email, password, selectedTeam, selectedTeamLogo } =
      req.body;

    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      return res.json({
        errors: [
          {
            msg: "Email already in use",
          },
        ],
        data: null,
      });
    }

    const checkUserName = await User.findOne({ username });
    if (checkUserName) {
      return res.json({
        errors: [
          {
            msg: "Username already in use",
          },
        ],
        data: null,
      });
    }

    // Adds 10 salt
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      selectedTeam,
      selectedTeamLogo,
    });

    const token = await JWT.sign(
      {
        email: newUser.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "3d",
      }
    );
    res.json({
      errors: [],
      data: {
        token,
        user: {
          id: newUser._id,
          username: newUser.username,
          selectedTeam: newUser.selectedTeam,
          selectedTeamLogo: newUser.selectedTeamLogo,
        },
      },
    });
  }
);

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.json({
      errors: [
        {
          msg: "Invalid credentials",
        },
      ],
      data: null,
    });
  }

  // Compares hash codes of passwords
  const isMatch = await bcrypt.compare(password, user.password);

  // If they don't match then return error message
  if (!isMatch) {
    return res.json({
      errors: [
        {
          msg: "Invalids credentials",
        },
      ],
      data: null,
    });
  }

  // Create JWT token
  const token = await JWT.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });

  return res.json({
    errors: [],
    data: {
      token,
      user: {
        id: user._id,
        username: user.username,
        selectedTeam: user.selectedTeam,
        selectedTeamLogo: user.selectedTeamLogo,
      },
    },
  });
});

router.post("/selectTeam", async (req, res) => {
  const { username, selectedTeam, selectedTeamLogo } = req.body;
  const user = await User.findOne({ username });
  console.log(user);
  console.log(username, selectedTeam, selectedTeamLogo);
  await User.findByIdAndUpdate(user._id, {
    selectedTeam: selectedTeam,
  });
  await User.findByIdAndUpdate(user._id, {
    selectedTeamLogo: selectedTeamLogo,
  });
  // Create JWT token
  const token = await JWT.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });

  return res.json({
    errors: [],
    data: {
      token,
      user: {
        id: user._id,
        username: user.username,
        selectedTeam: user.selectedTeam,
        selectedTeamLogo: user.selectedTeamLogo,
      },
    },
  });
});
export default router;
