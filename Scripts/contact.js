// IIFE module
/*
File Name: contact.js
Author Name: Joseph Volpe
Website name: Joseph's Den
Sets up the class Contact for the form on the website to interact with and store the class.
*/
"use strict";
let objects;
(function(objects)
{
    class Contact 
    {
        constructor(firstName="", lastName="", emailAddress="", contactNumber="", shortMessage="") 
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.emailAddress = emailAddress;
            this.contactNumber = contactNumber;
            this.shortMessage = shortMessage;
        } 

        toString()
        {
            let outputstring = "";
            outputstring += "First Name    : " + this.firstName + "\n";
            outputstring += "Last Name     : " + this.lastName + "\n";
            outputstring += "Email Address : " + this.emailAddress + "\n";
            outputstring += "Contact Number: " + this.contactNumber + "\n";
            outputstring += "Short Message : " + this.shortMessage + "\n";
            return outputstring;
        }

        toJSON()
        {
            let JSONObject =
            {
                firstName: this.firstName,
                lastName: this.lastName,
                emailAddress: this.emailAddress,
                contactNumber: this.contactNumber,
                shortMessage: this.shortMessage, 
            };

            return JSONObject;
        }

        setContact(JSON_Data)
        {
            this.firstName = JSON_Data.firstName;
            this.lastName = JSON_Data.lastName;
            this.emailAddress = JSON_Data.emailAddress;
            this.contactNumber = JSON_Data.contactNumber;
            this.shortMessage = JSON_Data.shortMessage;
        }


    }
    objects.Contact = Contact;

}(objects || (objects = {})));