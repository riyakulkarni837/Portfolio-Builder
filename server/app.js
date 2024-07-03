require('dotenv').config();
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const userdb = require('./models/userSchema');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const { REFUSED } = require('dns');

const googleClientid = "798850360771-2del6ft13seuibb2248gsd6i4cr8c7s9.apps.googleusercontent.com";
const googleClientsecret = "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";

const githubClientid = "Ov23liVZUKrV77dy6Bub";
const githubClientsecret = "b033432b97d44e3e64fd09980701315def2bfa74";

const linkedinClientid = "86qly5kdhdl4ut";
const linkedinClientsecret = "jIagr7DQBk9GuQQT";

const port = 6005;

app.use(cors({
    origin: "http://localhost:5500",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));
app.use(express.json());

// setup session
app.use(session({
    secret: "Swamisamartha123!",
    resave: false,
    saveUninitialized: true
}));

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint for resume analysis
app.post('/api/resume-analysis', upload.single('resumeFile'), async (req, res) => {
    const { jobDescription } = req.body;
    const resumeFile = req.file;

    if (!resumeFile) {
        return res.status(400).send('No file uploaded.');
    }

    let pdfText = '';

    try {
        const data = await pdfParse(fs.readFileSync(resumeFile.path));
        pdfText = data.text;
    } catch (error) {
        return res.status(500).send('Error processing PDF file.');
    }

    const prompt = `
        Hey Act Like a skilled or very experienced ATS (Application Tracking System) with a deep understanding of the tech field, software engineering, data science, data analyst and big data engineering. Your task is to evaluate the resume based on the given job description. You must consider the job market is very competitive and you should provide the best assistance for improving the resumes. Assign the percentage Matching based on JD and the missing keywords with high accuracy.
        resume:${pdfText}
        description:${jobDescription}
        I want the response in one single string having the structure {"JD Match":"%","MissingKeywords":[],"Profile Summary":""}
    `;

    try {
        const response = await axios({
            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
            method: "post",
            data: {
              "contents":[{"parts":[{"text": prompt}]}]
            },
        });
        const result = response.data.candidates[0].content.parts[0].text;
        res.json(JSON.parse(result));

        
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    } finally {
        // Cleanup: remove the uploaded file after processing
        fs.unlinkSync(resumeFile.path);
    }
});

app.use(cookieParser());
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`Server start at port no ${port}`);
});
