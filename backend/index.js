import { dotenv, express, cookieParser, connectMongoDb, userRoutes, RoleData, cors, apiRoutes } from "./routes/allRoutes.js";

dotenv.config();

const app = express();

// using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.REACT_URL,
    credentials: true,
}));

const port = process.env.PORT || 3006;

app.use('/api/user', userRoutes);
app.use('/api', apiRoutes);

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