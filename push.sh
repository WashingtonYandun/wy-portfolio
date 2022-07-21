#!/bin/bash

git status
git add .
read -p "Commit message: " msg
git commit -m "$msg"
git push origin main

exit 0