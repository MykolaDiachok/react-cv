Write-Host "Starting build..." -ForegroundColor Green
npm run build
Write-Host "Build complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Checking dist..." -ForegroundColor Yellow
if (Test-Path "dist/index.html") {
    Write-Host "✓ dist/index.html exists" -ForegroundColor Green
    $size = (Get-Item "dist/index.html").Length
    Write-Host "  Size: $size bytes" -ForegroundColor Cyan
} else {
    Write-Host "✗ dist/index.html NOT FOUND" -ForegroundColor Red
}
Write-Host ""
Write-Host "CSS files:" -ForegroundColor Yellow
if (Test-Path "dist/_astro") {
    Get-ChildItem "dist/_astro" -Filter "*.css" | ForEach-Object {
        Write-Host "  ✓ $($_.Name) ($($_.Length) bytes)" -ForegroundColor Cyan
    }
}

