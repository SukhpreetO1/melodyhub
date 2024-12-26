import { fs } from "../routes/allRoutes.js";
import TryCatch from "../utils/TryCatch.js";

export const allError = TryCatch(async (req, res) => {
  const errorData = req.body;
  const errorFolder = 'public/error';
  const errorFile = `${errorFolder}/errors.log`;

  try {
    await fs.mkdir(errorFolder, { recursive: true });
  } catch (err) {
    console.error('Error creating error folder:', err);
    res.status(500).send('Error creating error folder');
    return;
  }

  try {
    await fs.appendFile(errorFile, `${errorData.timestamp} - ${errorData.error}\n`);
    res.send('Error sent successfully');
  } catch (err) {
    console.error('Error writing to error file:', err);
    res.status(500).send('Error writing to error file');
  }
});

export const protectedRoutesController = TryCatch(async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized, no token" });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).json({ message: "Token is valid" });
    } catch (error) {
        res.status(401).json({ message: "Unauthorized, invalid token" });
    }
});