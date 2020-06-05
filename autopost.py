import os
import shutil
from os import path


def writePost(Title,imagelink,description):

    ##Making a duplicate of the format page
    ##Adding the title img and description to the duplicate format file
    
    imagelink = "./{}".format(imagelink)
    fin = open("format.txt", "rt")
    fout = open("out.txt", "wt")
    
    changes = {
        "title1":Title,
        "pic1":imagelink,
        "description1":description
        }

    for line in fin:
        for item,replacement in changes.items():
            if item in line:
                line = line.replace(item,replacement)

        fout.write(line)    
    
    fin.close()
    fout.close()

    updateHtml()

    return


def updateHtml():
    fpost = open("out.txt","r")

    post = fpost.read()
    
    fhtml = open("index.html","r")
    content = fhtml.readlines()
    fhtml.close()


    Word = '<!FirstPost>\n'
    

    for index,word in enumerate(content):
        for letter in word:
            if letter == "!":
                content[index] = "<!FirstPost> \n {}  /\n \n ".format(post)
    
    listToStr = ''.join([str(elem) for elem in content]) 


    fhtml = open("index.html","w")
    fhtml.write(listToStr)
    fhtml.close()


    fhtml.close()
    fpost.close()
    return 


Title = input("Enter the Title:")
Image = input("Enter the Name of the image with its extension:")
Description = input("Enter the Name of the file with the description:")

writePost(Title,Image,Description)


