# Code Reviewer

An AI-powered code review tool that helps developers improve their code quality by providing automated code reviews and suggestions.

## Features

- Interactive code editor with syntax highlighting
- AI-powered code analysis
- Real-time code review feedback
- Support for JavaScript code review

## Project Structure

```
Code-Reviewer/
├── Backend/              # Node.js backend
│   ├── src/
│   │   ├── controller/  # Request handlers
│   │   ├── routes/      # API routes
│   │   ├── services/    # Business logic
│   │   └── app.js       # Express app setup
│   └── server.js        # Server entry point
└── Frontend/            # React frontend
    ├── src/
    │   ├── services/    # API integration
    │   ├── App.jsx      # Main component
    │   └── App.css      # Styles
    └── index.html       # HTML entry point
```

## Setup

1. Clone the repository
```bash
git clone <your-repo-url>
cd Code-Reviewer
```

2. Install dependencies
```bash
# Install backend dependencies
cd Backend
npm install

# Install frontend dependencies
cd ../Frontend
npm install
```

3. Set up environment variables
- Create a `.env` file in the Backend directory
- Add your Google Gemini API key:
```
GOOGLE_GEMINI_KEY=your_api_key_here
```

4. Start the development servers
```bash
# Start backend server (from Backend directory)
npm start

# Start frontend development server (from Frontend directory)
npm run dev
```

## Usage

1. Open http://localhost:5173 in your browser
2. Enter or paste your code in the editor
3. Click "Review Code"
4. View the AI-generated code review on the right panel

## Technologies Used

- Frontend:
  - React
  - Vite
  - PrismJS for syntax highlighting
  - Axios for API calls

- Backend:
  - Node.js
  - Express
  - Google Gemini AI for code analysis
  - CORS for API security

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request