git status
git add -A
git status
git commit -m "$1"
git push origin $(git branch | grep \* | cut -d ' ' -f2)
