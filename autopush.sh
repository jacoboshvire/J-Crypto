while true; do
  sleep 10

  git add .

  if ! git diff --cached --quiet; then
    git commit -m "auto commit @$(date)"
<<<<<<< HEAD
    git push origin master
=======
    # git push origin main
>>>>>>> main
  fi

done