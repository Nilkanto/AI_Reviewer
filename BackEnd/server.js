require('dotenv').config();
const app = require('./src/app');
const port = process.env.PORT || 5005;
const net = require('net');

// Function to check if the port is in use
const checkPort = (port, callback) => {
    const server = net.createServer();
    server.once('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(` Port ${port} is in use. Trying to free it...`);
            callback(false);
        } else {
            callback(true);
        }
    });

    server.once('listening', () => {
        server.close();
        callback(true);
    });

    server.listen(port);
};

// Attempt to start server only if port is free
checkPort(port, (isFree) => {
    if (isFree) {
        app.listen(port, () => {
            console.log(`✅ Server is running on port ${port}`);
        });
    } else {
        console.log(`Failed to free port ${port}. Try closing existing processes manually.`);
    }
});
