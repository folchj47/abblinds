@echo off
echo Checking if server is running...
curl -s http://localhost:3000 >nul 2>&1
if %errorlevel% == 0 (
    echo ✅ Server is running at http://localhost:3000
    echo Opening website in your default browser...
    start http://localhost:3000
) else (
    echo ❌ Server is not running
    echo Please run start-server.bat first
)
pause
