// IIFE module
/*
File Name: contact.js
Author Name: Joseph Volpe
Website name: Joseph's Den
Sets up the class Paragraph for the paragraphs on the website to interact with and pull information
*/
"use strict";
let paragraphs;
(function(paragraphs)
{
    class Paragraph 
    {
        constructor(paragraphs="") 
        {
            this.paragraphs = paragraphs
        } 

        toString()
        {
            let outputstring = "";
            outputstring += "Paragraph Text:" + this.paragraphs + "\n";

            return outputstring;
        }

        toJSON()
        {
            let JSONObject =
            {
                this:paragraphs = paragraphs
            };

            return JSONObject;
        }

        setParagraph(JSON_Data)
        {
            this.paragraphs = JSON_Data.paragraphs;
        }


    }
    paragraphs.Paragraph = Paragraph;

}(paragraphs || (paragraphs = {})));