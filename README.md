# cli-dictionary-app

This is a command line application for creating a multi-value (key, member format) in memory dictionary.
This is a REPL(Read-Eval-Print-Loop) kind of application which will take one line of input at a time and provide with an printed output as per the command.
It is developed ith Node.js and will not require a lot of dependencies.

The data is stored in a key, value(Array<String>) pair in a one to many format, which translates that one key can have multiple values which we call "Members".

Example : 

>ADD foo bar 

"foo" -> ["bar"]

If you decide to add more elements to the key "foo", they will be pushed into the array of Members.

>ADD foo test
  
"foo" -> ["bar", "test"]

There are several methods that can be passed as arguments to the REPL prompt to perform several actions:

"KEYS": Returns all existing keys from the dictionary.
"MEMBERS <key>": "Returns all members for a given key from the dictionary.
"ADD <key> <member>": "To add a new entry into the dictionary.
"REMOVE <key> <member>": "To remove an entry from the dictionary.
"REMOVEALL <key>": "To remove all members for a set key from the dictionary.
"CLEAR": "Empty the dictionary.
"KEYEXISTS <key>": "Returns true or false based on the presence of the key.
"MEMBEREXISTS <key> <member>": "Returns true or false based on the presence of the key and member.
"ALLMEMBERS": "Returns all the members in the dictionary.
"ITEMS": "Returns all keys and members in the dictionary.
