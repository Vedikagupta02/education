@echo off
echo Starting Backend Server...
start cmd /k "cd backend && python app.py"

echo Starting Frontend Server...
start cmd /k "npm run dev"

echo Both servers are starting up...
echo Frontend: http://localhost:3000/chat
echo Backend: http://localhost:5000
pause
