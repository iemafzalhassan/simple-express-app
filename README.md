# TrainWithShubham Community Platform

A modern web application showcasing the TrainWithShubham community and its activities.

## 🚀 Features

- Modern, responsive UI with React
- Express backend API
- Docker containerization
- CI/CD with Jenkins
- Community events showcase
- Real-time updates
- Interactive UI components

## 🛠️ Tech Stack

- **Frontend:**
  - React.js
  - Modern CSS with Flexbox/Grid
  - Responsive Design
  - Animation Effects

- **Backend:**
  - Node.js
  - Express.js
  - RESTful API

- **DevOps:**
  - Docker
  - Jenkins
  - Git
  - npm

## 🏗️ Project Structure
```bash
simple-express-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── assets/       # Static assets
│   │   └── styles/       # CSS styles
│   └── public/           # Public assets
├── src/                   # Express backend
│   ├── routes/           # API routes
│   ├── controllers/      # Business logic
│   └── middleware/       # Custom middleware
├── config/               # Configuration files
├── scripts/              # Build and deployment scripts
├── tests/                # Test suites
└── docs/                 # Documentation
```


## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9
- Docker

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
cd client && npm install
```
```bash
npm run dev
```
### Docker Deployment
```bash
docker build -t tws-community-app .
docker run -p 3000:3000 tws-community-app
```

## 📝 Environment Variables
Create a .env file based on .env.example :

```env
PORT=3000
NODE_ENV=development
```

##  CI/CD Pipeline
The project uses Jenkins for CI/CD with the following stages:

1. Code Checkout
2. Install Dependencies
3. Run Tests
4. Build Application
5. Docker Build
6. Deploy
## 🧪 Testing
```bash
npm test
```

## 📜 License
MIT License

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

