# OpenAI Proxy Server

A TypeScript Express server that provides an endpoint to obtain ephemeral API keys from OpenAI.

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
4. Start the server: `npm start`

## Development

Run the server in development mode with hot reloading:
```
npm run dev
```

## API Endpoints

- `GET /connectToOpenAi`: Returns an ephemeral API key from OpenAI 