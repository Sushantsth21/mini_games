# Guess Who Online 🎮

A modern web-based implementation of the classic Guess Who game with real-time multiplayer functionality and custom character support.

## Features

### 🎯 Core Gameplay
- **Real-time Multiplayer** - Play against friends or random opponents
- **Classic Guess Who Rules** - Take turns asking yes/no questions to identify your opponent's character
- **Interactive Game Board** - Click to eliminate characters with smooth animations
- **Live Chat** - Communicate with your opponent during the game

### 🎨 Customization
- **Template Characters** - Choose from pre-built character sets with diverse attributes
- **Custom Upload** - Create your own game by uploading personal photos
- **Character Attributes** - Automatic and manual tagging system for uploaded images
- **Multiple Game Sets** - Save and reuse custom character collections

### 📱 User Experience
- **Responsive Design** - Seamless gameplay on desktop, tablet, and mobile
- **Room System** - Create private rooms or join public matchmaking
- **Game History** - Track your wins, losses, and gameplay statistics
- **Intuitive UI** - Clean, modern interface inspired by the classic board game

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Socket.IO Client** - Real-time communication

### Backend
- **FastAPI** - Modern Python web framework
- **PostgreSQL** - Primary database
- **Redis** - Caching and session management
- **Socket.IO** - WebSocket connections
- **Cloudinary** - Image upload and management
- **Pydantic** - Data validation and serialization

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Python 3.9+
- PostgreSQL
- Redis (optional, for production)

### Frontend Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/guess-who-online.git
cd guess-who-online

# Install frontend dependencies
cd frontend
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Start the development server
npm run dev
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
alembic upgrade head

# Start the development server
uvicorn main:app --reload
```

### Environment Variables

#### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SOCKET_URL=http://localhost:8000
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

#### Backend (.env)
```env
DATABASE_URL=postgresql://user:password@localhost:5432/guesswho
REDIS_URL=redis://localhost:6379
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SECRET_KEY=your_secret_key
```

## Project Structure

```
guess-who-online/
├── frontend/                 # Next.js frontend application
│   ├── app/                 # App Router pages
│   │   ├── game/           # Game-related pages
│   │   ├── setup/          # Game setup pages
│   │   └── upload/         # Character upload pages
│   ├── components/         # React components
│   │   ├── game/          # Game-specific components
│   │   ├── ui/            # Reusable UI components
│   │   └── upload/        # Upload-related components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript type definitions
├── backend/                # FastAPI backend application
│   ├── app/
│   │   ├── api/           # API route handlers
│   │   ├── core/          # Core functionality
│   │   ├── models/        # Database models
│   │   ├── schemas/       # Pydantic schemas
│   │   └── services/      # Business logic
│   ├── alembic/           # Database migrations
│   └── tests/             # Test files
└── docs/                  # Documentation
```

## API Documentation

Once the backend is running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## Game Rules

1. **Setup**: Each player selects a character from the chosen character set
2. **Turns**: Players alternate asking yes/no questions about physical attributes
3. **Elimination**: Based on answers, players eliminate characters from their board
4. **Winning**: First player to correctly guess their opponent's character wins
5. **Questions**: Examples include "Does your person wear glasses?", "Is your person male?", etc.

## Development

### Running Tests
```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd backend
pytest
```

### Code Quality
```bash
# Frontend linting
npm run lint

# Backend formatting
black .
isort .
```

### Building for Production
```bash
# Frontend build
npm run build

# Backend Docker build
docker build -t guess-who-backend .
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices for frontend code
- Use Python type hints and follow PEP 8 for backend code
- Write tests for new features
- Update documentation for API changes
- Ensure responsive design for UI changes

## Deployment

### Frontend (Vercel)
```bash
npm run build
# Deploy to Vercel or your preferred platform
```

### Backend (Docker)
```bash
docker build -t guess-who-backend .
docker run -p 8000:8000 guess-who-backend
```

## Roadmap

- [ ] **Tournament Mode** - Organize multiplayer tournaments
- [ ] **AI Opponent** - Play against computer opponents
- [ ] **Team Mode** - 2v2 collaborative gameplay
- [ ] **Custom Attributes** - User-defined character attributes
- [ ] **Mobile App** - Native iOS and Android applications
- [ ] **Voice Chat** - Integrated voice communication
- [ ] **Spectator Mode** - Watch ongoing games
- [ ] **Achievement System** - Unlock achievements and badges

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the [documentation](docs/)
- Join our community discussions

## Acknowledgments

- Inspired by the classic Guess Who board game by Hasbro
- Built with modern web technologies for the best user experience
- Thanks to all contributors and the open-source community

---

**Happy Gaming!** 🎮✨