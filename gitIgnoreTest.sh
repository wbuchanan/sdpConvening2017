#!/bin/bash
testing=myTestingDirectory
curdir=$PWD
mkdir $testing
cd $testing
git init .
prefile=`git status`
cat <<EOT >> testingFile.csv
col1, col2, col3
1, 2, a
3, 4, b
5, 6, c
EOT
git add .
postfile=`git status`
listfiles=`ls`
echo "Git Status before creating .csv file : ${prefile}"
echo "Git Status after creating .csv file : ${postfile}"
echo "Contents of .csv file: "
cat testingFile.csv
echo "Test directory contents : ${listfiles}"
rm testingFile.csv
cd ${curdir}
rm -rf ${testing}


