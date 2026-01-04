Write-Host "=== Checking build ===" -ForegroundColor Cyan

if (Test-Path "dist") {
    Write-Host "✓ dist folder exists" -ForegroundColor Green

    if (Test-Path "dist/index.html") {
        Write-Host "✓ dist/index.html exists" -ForegroundColor Green
        $size = (Get-Item "dist/index.html").Length
        Write-Host "  Size: $size bytes" -ForegroundColor Gray
    } else {
        Write-Host "✗ dist/index.html NOT FOUND" -ForegroundColor Red
    }

    Write-Host "`n=== CSS files ===" -ForegroundColor Cyan
    if (Test-Path "dist/_astro") {
        $cssFiles = Get-ChildItem "dist/_astro" -Filter "*.css"
        if ($cssFiles) {
            foreach ($file in $cssFiles) {
                Write-Host "  ✓ $($file.Name) ($($file.Length) bytes)" -ForegroundColor Green
            }
        } else {
            Write-Host "  ✗ No CSS files found!" -ForegroundColor Red
        }
    } else {
        Write-Host "  ✗ dist/_astro folder not found!" -ForegroundColor Red
    }

    Write-Host "`n=== Checking if CSS is linked in HTML ===" -ForegroundColor Cyan
    $html = Get-Content "dist/index.html" -Raw
    if ($html -match 'stylesheet') {
        Write-Host "  ✓ CSS link tag found in HTML" -ForegroundColor Green
        $html -split "`n" | Select-String "stylesheet" | ForEach-Object {
            Write-Host "    $_" -ForegroundColor Gray
        }
    } else {
        Write-Host "  ✗ No stylesheet link found in HTML!" -ForegroundColor Red
    }

} else {
    Write-Host "✗ dist folder does not exist. Run 'npm run build' first." -ForegroundColor Red
}

