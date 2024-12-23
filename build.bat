@echo off
REM Clean build directory
rmdir /s /q build 2>nul
mkdir build

REM Copy root files
copy watchface\app.js build\
copy watchface\app.json build\

REM Copy assets folder
xcopy /s /e /i watchface\assets build\assets

REM Copy watchface folder
xcopy /s /e /i watchface\watchface build\watchface

REM Create zip archive from contents
cd build
7z a watchface.zip *.* assets\*.* watchface\*.* -r

REM Clean up unzipped files
for %%F in (*.*) do if not "%%F"=="watchface.zip" del "%%F"
for /d %%D in (*) do rmdir /s /q "%%D"

cd..
