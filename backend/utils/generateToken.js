import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 1000,
    httpOnly: true, // prevent XSS attacks cross site
    // sameSite: "strict", //CSRF Attcks cross-site requests forgery ataccks
    // secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
// console.log(process.env.JWT_SECRET);
// console.log(process.env.PORT);
