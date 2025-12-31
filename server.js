import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.get("/", (req, res) => {
	res.status(201).json({ msg: "Server Started" });
});

app.listen(PORT, () => {
	console.log(`Server running on  http://localhost:${PORT}`);
});
