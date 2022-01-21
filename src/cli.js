'use strict';

import fs from 'fs';
import path from 'path';
import repl from 'repl';
import { addToDictionary , displayKeys, displayMembers, allItems, allMembers, removeAll, removeFromDictionary, clearMethod, keyExists} from './components/dictionary';

let dictionary = new Map();

function availableAppMethods() {
    let data = []; 
    
  // Display the commands for ease of use.
  const methodsList = fs.readFileSync(path.resolve(__dirname, "files/methods.txt")).toString(); 
            
        // Split the string and store into array
        data = methodsList.split('\n');            
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
   }   

const fnDictionary = (params) => {
    var argumentList = params.trim().split(' ');
    
    if(argumentList.length == 0) {
        console.log(' Please enter a valid input');
    } else {
        const methodSelected = argumentList[0];
        if(argumentList.length == 1) {
            switch(methodSelected) {            
                case 'KEYS': {
                    displayKeys(dictionary);
                    break;
                }  
                case 'CLEAR': {
                    clearMethod(dictionary);
                    break;
                } 
                case 'ALLMEMBERS': {
                    allMembers(dictionary);
                    break;
                }   
                case 'ALLITEMS': {
                    allItems(dictionary);
                    break;
                }   
                default:
                    break;        
            }            
        } else if(argumentList.length == 2) {
            switch(methodSelected) {
                case 'MEMBERS' : {
                    displayMembers(dictionary, argumentList[1]);
                    break;
                }
                case 'KEYEXISTS' : {
                    keyExists(dictionary, argumentList[1]);
                    break;
                }
                default:
                    break;
            }            
        } else if(argumentList.length == 3) {
            const methodSelected = argumentList[0];
            switch(methodSelected) {
                case 'ADD' : {
                    addToDictionary(dictionary, argumentList[1], argumentList[2]);
                    break;
                }
                default:
                    break;
            }            
        } else {
    
        }
    }        
}

function myEval(cmd, context, filename, callback) {
     callback(fnDictionary(cmd));
  }


export function cli() {
    availableAppMethods();
    repl.start({ prompt: '> ', eval: myEval });    
}