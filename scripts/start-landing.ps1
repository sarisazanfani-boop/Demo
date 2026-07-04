Set-Location $PSScriptRoot\..\web

if (-not (Test-Path node_modules)) { npm install }

npm run dev

