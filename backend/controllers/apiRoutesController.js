import { log } from "console";
import { path, fileSystem, jwt } from "../routes/allRoutes.js";
import TryCatch from "../utils/TryCatch.js";

export const allError = TryCatch(async (req, res) => {
  const errorData = req.body;
  const errorFolder = "public/error";
  const errorFile = `${errorFolder}/errors.log`;

  try {
    await fileSystem.mkdir(path.dirname(errorFile), { recursive: true });
  } catch (err) {
    console.error("Error creating error folder:", err);
    res.status(500).send("Error creating error folder");
    return;
  }

  try {
    await fileSystem.appendFile(
      errorFile,
      `${errorData.timestamp} - ${errorData.message}\n`
    );
    res.send("Error added successfully in error file.");
  } catch (err) {
    console.error("Error while writing erorr message to error file:", err);
    res.status(500).send("Error while writing erorr message to error file.");
  }
});

export const protectedRoutesController = TryCatch(async (req, res) => {
  if (req.cookies == undefined) {
    return res.status(401).json({ message: "Unauthorized, token not found." });
  }

  const AdminCookieName = Object.keys(req.cookies).find(key => req.cookies[key] === req.cookies.admin_token);
  const UserCookieName = Object.keys(req.cookies).find(key => req.cookies[key] === req.cookies.token);

  const latest_token = req.cookies.token && req.cookies.token.split('=')[1];
  const adminToken = req.cookies.admin_token && req.cookies.admin_token?.split('=')[1];
  
  if (UserCookieName !== undefined) {
    try {
      jwt.verify(latest_token, process.env.JWT_SECRET);
      return res.status(200).json({ message: "Token is valid" });
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized, User token is expired or invalid" });
    }
  } else if (AdminCookieName !== undefined) {
    try {
      jwt.verify(adminToken, process.env.JWT_SECRET, { ignoreExpiration: true });
      return res.status(200).json({ message: "Admin token is valid" });
    } catch (error) {    
      return res.status(401).json({ message: "Unauthorized, Admin token is expired or invalid" });
    }
  } else {
    return res.status(401).json({ message: "Unauthorized, Invalid token" });
  }
});