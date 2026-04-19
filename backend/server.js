const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock scholarship application endpoint
app.post('/api/scholarship-apply', (req, res) => {
    const { firstName, lastName, email, country, schoolYear, fieldOfStudy } = req.body;
    
    // In a real app, this would save to a database
    console.log('New Scholarship Application:', { 
        firstName, 
        lastName, 
        email, 
        country, 
        schoolYear, 
        fieldOfStudy,
        timestamp: new Date().toISOString()
    });

    res.status(200).json({ 
        success: true, 
        message: 'Your application for the $1,000 scholarship has been received! Good luck.' 
    });
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Cliq Campus Backend is running.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
