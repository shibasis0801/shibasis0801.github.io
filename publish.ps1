param(
    [string]
    $Message
)

if ($Message -eq "") {
    Write-Error "You have not supplied a commit message"
    Exit 1
}

# Have to fetch Jupyter notebooks from ML Folder and convert them to html, 
# store them to notebooks directory and the continue the steps

Write-Output "git add ."
git add .

Write-Output "git commit -m $Message"
git commit -m"$Message"

Write-Output "git push origin master"
git push origin master
