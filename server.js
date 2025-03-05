import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Initialize environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Route to get ephemeral API key from OpenAI
app.get('/connectToOpenAi', async (req, res) => {
    try {
        const response = await fetch('https://api.openai.com/v1/realtime/sessions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-4-turbo-preview',
                voice: 'verse'
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error?.message || 'Failed to get ephemeral key');
        }

        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 