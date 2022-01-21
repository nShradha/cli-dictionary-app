# cli-dictionary-app

###### This is a command line application for creating a multi-value (key, member format) in memory dictionary.
###### This is a REPL(Read-Eval-Print-Loop) kind of application which will take one line of input at a time and provide with an printed output as per the command.

### Local Set Up

You will need node.js to run this application in your local. If you do not have node in your set up, please download the latest stable version from https://nodejs.org/en/download/ based on your system configuration.

If you need to sync this with the git repository, you will also need git (https://git-scm.com/downloads). 

Now that you have node & git, you are pretty much ready.

Clone this repo to a local folder and follow these commands to install dependencies and kick start the application.

> `npm install` should install the dependencies for you to start coding/testing this application.

> `npm link` helps you link your code changes to your terminal(`Bash`) for ease of development.

**Starting the Interactive Cli App**

Open a terminal in the project directory and paste below command.

> cli-dictionary-app

This should kick off the interactive REPL application that will wait for your input. 
**Note** : You can exit this mode at any time using Ctrl+C(twice, just to be sure).

It should list out all the available methods that you can use with this application. You can add more if that sounds fun !!

>"KEYS": Returns all existing keys from the dictionary.
  
>"MEMBERS <key>": "Returns all members for a given key from the dictionary.
  
>"ADD <key> <member>": "To add a new entry into the dictionary.
  
>"REMOVE <key> <member>": "To remove an entry from the dictionary.
  
>"REMOVEALL <key>": "To remove all members for a set key from the dictionary.
  
>"CLEAR": "Empty the dictionary.
  
>"KEYEXISTS <key>": "Returns true or false based on the presence of the key.
  
>"MEMBEREXISTS <key> <member>": "Returns true or false based on the presence of the key and member.
  
>"ALLMEMBERS": "Returns all the members in the dictionary.
  
>"ITEMS": "Returns all keys and members in the dictionary.

The data is stored in a key, value(Array<String>) pair in a one to many format, which translates that one key can have multiple values which we call "Members".

Example : 

>ADD foo bar 

"foo" -> ["bar"]

If you decide to add more elements to the key "foo", they will be pushed into the array of Members.

>ADD foo test
  
"foo" -> ["bar", "test"]



#### Thank You ####


  
