pushd "%LocalAppData%\FiveM\FiveM.app\data" || exit /B 1
for /D %%D in ("*") do (
  if /I not "%%~nxD"=="game-storage" rd /S /Q "%%~D"
)
for %%F in ("*") do (
  del "%%~F"
)
popd