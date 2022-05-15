import JWT from "jsonwebtoken";

export const checkAuth = async (req, res, next) => {
  let token = req.header("authorization");
  if (!token) {
    return res.status(403).json({
      errors: [
        {
          msg: "unauthorized",
        },
      ],
    });
  }

  // gets the token and not the bearer word
  token = token.split(" ")[1];

  try {
    // verify token with footer
    await JWT.verify(token, process.env.JWT_SECRET);
    // execute the next function
    next();
  } catch (error) {
    return res.status(403).json({
      errors: [
        {
          msg: "unauthorized",
        },
      ],
    });
  }
};
