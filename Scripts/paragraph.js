// IIFE module
/*
File Name: contact.js
Author Name: Joseph Volpe
Website name: Joseph's Den
Sets up the class Paragraph for the paragraphs on the website to interact with and pull information
*/
"use strict";
let anotherobject;
(function(anotherobject)
{
    class Paragraph 
    {
        constructor(page="", text="") 
        {
            this.page = page
            this.text = text
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
        // taking json data and turning into paragraph object
        setParagraph(JSON_Data)
        {
            this.page = JSON_Data.page;
            this.text = JSON_Data.text;
        }


    }
    anotherobject.Paragraph = Paragraph;

}(anotherobject || (anotherobject = {})));