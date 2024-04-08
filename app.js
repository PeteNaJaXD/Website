const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Example endpoint to handle incoming data from Roblox
app.post('/api/update-game-state', (req, res) => {
    // Process and update game state based on the data received
    console.log('Received data from Roblox:', req.body);
    // Send back a response if needed
    res.send('Data received successfully');
});

// Example endpoint to send data to Roblox
app.get('/api/get-player-stats', (req, res) => {
    // Retrieve player stats or game state data
    const playerStats = {
        playerName: 'ExamplePlayer',
        score: 1000,
        level: 5
    };
    // Send the data back to Roblox
    res.json(playerStats);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
