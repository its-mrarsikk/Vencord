if (!Get-Command "pnpm" -ErrorAction SilentlyContinue) {
    Write-Error "go install pnpm"
    Write-Host "https://pnpm.io/installation"
    Pause
    exit 1
}
if (!Get-Command "git" -ErrorAction SilentlyContinue) {
    Write-Error "go install git"
    Write-Host "https://git-scm.com/install/windows"
    Pause
    exit 1
}
if (!Get-Command "node" -ErrorAction SilentlyContinue) {
    Write-Error "go install node"
    Write-Host "https://nodejs.org/en/download"
    Pause
    exit 1
}

cd $env:TEMP
if (Test-Path "Vencord") { Remove-Item -Recurse -Force "Vencord" }
git clone "https://github.com/its-mrarsikk/Vencord"
cd Vencord
pnpm install --frozen-lockfile
Write-Host "HERE CHOOSE THE FIRST OPTION"
pnpm inject
Write-Host "now restart discord fully (right click the tray and press quit), go to plugins, find sealion and enable"
Pause
