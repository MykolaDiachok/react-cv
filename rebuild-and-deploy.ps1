Write-Host "`n=== Step 1: Clean ===" -ForegroundColor Cyan
if (Test-Path "dist") {
    Remove-Item -Recurse -Force dist
    Write-Host "✓ Cleaned dist folder" -ForegroundColor Green
}

Write-Host "`n=== Step 2: Install dependencies ===" -ForegroundColor Cyan
npm install

Write-Host "`n=== Step 3: Build ===" -ForegroundColor Cyan
npm run build

Write-Host "`n=== Step 4: Verify ===" -ForegroundColor Cyan
if (Test-Path "dist/index.html") {
    Write-Host "✓ Build successful!" -ForegroundColor Green

    # Check for CSS
    $cssFiles = Get-ChildItem "dist/_astro" -Filter "*.css" -ErrorAction SilentlyContinue
    if ($cssFiles) {
        Write-Host "✓ Found $($cssFiles.Count) CSS file(s):" -ForegroundColor Green
        foreach ($file in $cssFiles) {
            Write-Host "  - $($file.Name)" -ForegroundColor Gray
        }
    } else {
        Write-Host "⚠ WARNING: No CSS files found!" -ForegroundColor Yellow
    }

    # Check HTML
    $html = Get-Content "dist/index.html" -Raw
    if ($html -match 'stylesheet') {
        Write-Host "✓ CSS is linked in HTML" -ForegroundColor Green
    } else {
        Write-Host "⚠ WARNING: No stylesheet link in HTML!" -ForegroundColor Yellow
    }
} else {
    Write-Host "✗ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "`n=== Step 5: Deploy ===" -ForegroundColor Cyan
Write-Host "Ready to deploy. Run:" -ForegroundColor Yellow
Write-Host "  npm run deploy" -ForegroundColor White
Write-Host "`nOr press Enter to deploy now..." -ForegroundColor Yellow
$response = Read-Host

if ($response -eq "") {
    npm run deploy
    Write-Host "`n✓ Deployed! Check: https://mykoladiachok.github.io/react-cv/" -ForegroundColor Green
}

