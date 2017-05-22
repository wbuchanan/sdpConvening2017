#!/bin/bash

# Creates the h1 header for the markdown file and creates the markdown file itself
echo "# Submodule Examples" >> submodulesExample.md

# Creates a loop over the numeric values from 1 - 17
for i in {1..19};  

# Starts the for loop block
do 

# Adds a subheading to the file
echo "## Step ${i}" >> submodulesExample.md;

# Adds the image reference to the file
echo '!'"[submoduleExample${i}](img/submoduleStep${i}.png \"Submodules Example Step ${i}.\")" >> submodulesExample.md; 

# Ends the loop
done

# Creates the h1 header for the markdown file and creates the markdown file itself
echo "# When All Else Fails...Blow it up"'!' >> gitResetExample.md

# Creates a loop over the numeric values from 1 - 17
for i in {1..17};

# Starts the for loop block
do

# Adds a subheading to the file
echo "## Step ${i}" >> gitResetExample.md;

# Adds the image reference to the file
echo '!'"[resetExample${i}](img/resetStep${i}.png \"Git Reset Example Step ${i}.\")" >> gitResetExample.md; 

# Ends the loop
done
