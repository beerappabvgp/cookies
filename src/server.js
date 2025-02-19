import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", async (req, res) => {
	const test = req.cookies.test;
	console.log("test cookie is: ", test);
	return res.status(200).json({
		msg: "Welcome from the server ...."
	});
});

app.get("/set-cookie", async (req, res) => {
	// set the cookie 
	res.cookie("test", "testing the cookie...");
	return res.status(200).json({
		msg: "Cookie set successfully .... "
	});
});

app.get("/get-cookie", async (req, res) => {
	const test = req.cookies.test;
	const sessionId = req.cookies.sessionId;
	console.log("sessionId: ", sessionId);
	console.log("test cookie is: ", test);
	return res.status(200).json({
		msg: "Cookie get successfully ...."
	});
});

app.get("/session-id", async (req, res) => {
	let sessionId = Math.random() * 10000000000;
	sessionId = Math.floor(sessionId);
	console.log(sessionId);
	res.cookie("sessionId", sessionId);
	return res.status(200).json({
		msg: "session id successfully created ... "
	});
});


app.listen(5000);

