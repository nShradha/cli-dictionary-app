'use strict';

import fs from 'fs';
import path from 'path';
import repl from 'repl';
import { addToDictionary , displayKeys, displayMembers, allItems, allMembers, removeAll, removeFromDictionary, clearMethod, keyExists, memberExists} from './components/dictionary';

let dictionary = new Map();

/**
 * Method to fetch text file to display at the begining of the app.
 */

function availableAppMethods() {
    let data = []; 
    const methodsList = fs.readFileSync(path.resolve(__dirname, "files/methods.txt")).toString(); 
            
    data = methodsList.split('\n');            
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
   }   

/**
 * FnDictionary takes the input parameters as a string.
 * @param {String} params 
 * Outputs the logs in the console.
 */

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
                    console.log('Please use one of the supported methods only.');
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
                case 'REMOVEALL' : {
                    removeAll(dictionary, argumentList[1]);
                    break;
                }
                default:
                    console.log('Please use one of the supported methods only.');
                    break;
            }            
        } else if(argumentList.length == 3) {
            const methodSelected = argumentList[0];
            switch(methodSelected) {
                case 'ADD' : {
                    addToDictionary(dictionary, argumentList[1], argumentList[2]);
                    break;
                }
                case 'REMOVE' : {
                    removeFromDictionary(dictionary, argumentList[1], argumentList[2]);
                    break;
                }
                case 'MEMBEREXISTS' : {
                    memberExists(dictionary, argumentList[1], argumentList[2]);
                    break;
                }
                default:
                    console.log('Please use one of the supported methods only.');
                    break;
            }            
        } else {
            console.log('Please use one of the supported methods only.');
        }
    }        
}

/**
 * This method is a call back function for the REPL prompt function.
 * @param {any} cmd 
 * @param {any} context 
 * @param {any} filename 
 * @param {Function} callback 
 *
 */

function evalFunc(cmd, context, filename, callback) {
     callback(fnDictionary(cmd));
  }

/**
 * The main method for our application.
 */

export function cli() {
    availableAppMethods();
    repl.start({ prompt: '> ', eval: evalFunc });    
}