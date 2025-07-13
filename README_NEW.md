# Mini Games - FastAPI + Next.js Template

A full-stack template for building mini games with FastAPI backend and Next.js frontend, featuring modern UI components with Framer Motion animations.

## 🚀 Features

### Backend (FastAPI)
- RESTful API with automatic OpenAPI documentation
- CORS enabled for Next.js frontend integration
- Game data management with CRUD operations
- Player statistics and leaderboard functionality
- Health check endpoints
- Environment-based configuration
- In-memory data storage (easily replaceable with database)

### Frontend (Next.js)
- Modern React 19 with Next.js 15
- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- TypeScript for type safety
- Axios for API communication
- Beautiful gradient UI with dark theme
- Mobile-responsive header with animations

## 📁 Project Structure

```
mini_games/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py          # FastAPI application
│   │   └── config.py        # Configuration settings
│   ├── requirements.txt     # Python dependencies
│   ├── run.py              # Development server script
│   ├── .env                # Environment variables
│   └── README.md
└── frontend/
    ├── app/
    │   ├── page.tsx         # Home page with animations
    │   ├── layout.tsx       # Root layout
    │   └── globals.css      # Global styles
    ├── components/
    │   └── Header.tsx       # Animated header component
    ├── lib/
    │   └── api.ts          # API client and types
    ├── package.json
    └── README.md
```

## 🛠 Setup Instructions

### Prerequisites
- Node.js 18+ and npm/yarn
- Python 3.8+
- Git

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create and activate virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the development server:**
   ```bash
   python run.py
   ```

   The API will be available at:
   - API: http://localhost:8000
   - Interactive docs: http://localhost:8000/docs
   - Alternative docs: http://localhost:8000/redoc

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create environment file (optional):**
   ```bash
   echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The frontend will be available at: http://localhost:3000

## 🔧 Development Workflow

1. **Start both servers:**
   ```bash
   # Terminal 1 - Backend
   cd backend && python run.py

   # Terminal 2 - Frontend  
   cd frontend && npm run dev
   ```

2. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

## 📚 API Endpoints

### Health & Status
- `GET /` - Root endpoint
- `GET /health` - Health check

### Games Management
- `GET /api/games` - Get all games
- `POST /api/games` - Create new game
- `GET /api/games/{id}` - Get specific game
- `PUT /api/games/{id}` - Update game
- `DELETE /api/games/{id}` - Delete game

### Player Statistics
- `GET /api/players/{name}/stats` - Get player statistics

### Leaderboard
- `GET /api/leaderboard?limit=10` - Get top scores

## 🎨 UI Components

### Header Component
- Animated logo with sparkle effects
- Responsive navigation menu
- Mobile hamburger menu with smooth transitions
- Scroll-based background opacity changes
- Gradient text and hover effects

### Landing Page
- Hero section with animated text
- Feature cards with hover animations
- Statistics section with number counters
- Call-to-action sections
- Responsive grid layouts

## 🔄 Data Models

### GameData
```typescript
interface GameData {
  id?: number;
  name: string;
  score: number;
  player: string;
  created_at?: string;
}
```

### PlayerStats
```typescript
interface PlayerStats {
  player: string;
  total_games: number;
  high_score: number;
  average_score: number;
}
```

## 🚀 Deployment

### Backend Deployment
- Can be deployed to platforms like Heroku, Railway, or AWS
- Configure environment variables in production
- Replace in-memory storage with a proper database

### Frontend Deployment
- Deploy to Vercel, Netlify, or any static hosting
- Update `NEXT_PUBLIC_API_URL` to point to production backend

## 🔧 Customization

### Adding New Games
1. Create game component in `frontend/components/games/`
2. Add game routes in `frontend/app/games/`
3. Update API endpoints if needed
4. Add game-specific data models

### Styling
- Modify `frontend/app/globals.css` for global styles
- Update Tailwind configuration in `frontend/tailwind.config.js`
- Customize color schemes and animations

### API Extensions
- Add new endpoints in `backend/app/main.py`
- Create new data models with Pydantic
- Add database integration if needed

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or issues, please open an issue in the repository or contact the development team.

---

**Happy Gaming! 🎮**
