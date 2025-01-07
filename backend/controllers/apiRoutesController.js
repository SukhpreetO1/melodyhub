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
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized, token not found." });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ message: "Token is valid" });
  } catch (error) {
    res.status(401).json({ message: "Unauthorized, Invalid token" });
  }
});