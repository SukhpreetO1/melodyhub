import { dotenv, express, cookieParser, connectMongoDb, userRoutes, RoleData } from "./routes/allRoutes.js";

dotenv.config();

const app = express();

// using middleware
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 3006;

app.use('/api/user', userRoutes);

const serverStart = (async ()=>{
    try {
        await connectMongoDb();
        await RoleData();
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        
        });
    } catch (error) {
        console.log("Server crashed : ", error)
    }
})

serverStart();