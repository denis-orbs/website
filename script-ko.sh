mv content/ko/blog/*/ content/ko && cp -a content/ko/common/ content/ko/blog/common/ && rm -rf content/ko/common/ && sed 's/  - /  - ..\//g' content/ko/blog/blogs.md > changed.txt && mv changed.txt content/ko/blog/blogs.md