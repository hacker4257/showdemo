@echo off
echo ========================================
echo PharmaTrade 医药外贸电商平台
echo ========================================
echo.

echo [1/3] 检查依赖...
if not exist "node_modules" (
    echo 正在安装依赖...
    call npm install
) else (
    echo 依赖已安装
)

echo.
echo [2/3] 检查数据库配置...
if not exist ".env" (
    echo 警告: .env 文件不存在！
    echo 请复制 .env.example 到 .env 并配置数据库连接
    pause
    exit /b 1
)

echo.
echo [3/3] 启动开发服务器...
echo 访问 http://localhost:3000
echo.
call npm run dev
