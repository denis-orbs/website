# !/usr/bin/env bash
set -e

mv content/blog/*/ content/ 
cp -a content/common/ content/blog/common/ 
rm -rf content/common/
sed 's/  - /  - ..\//g' content/blog/blogs.md > changed.txt
mv changed.txt content/blog/blogs.md



echo "Prebuild is done!"