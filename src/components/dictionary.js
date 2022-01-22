module.exports = {

    /**
     * Method displays all the Keys present in the Dictionary.
     * @param {Map} dictionary 
     */
   
    displayKeys: (dictionary) => {
        if (dictionary.size > 0) {
            let entries = Array.from(dictionary.keys());            
            entries.forEach((entry, idx) => {
                console.log(idx+1, ') ', entry);
            });
            return entries.length;
        }
        else {            
            console.log('empty set');
            return 0;
        }
    },

    /**
     * Method displays all members for the specified key from the dictionary.
     * @param {Map} dictionary 
     * @param {String} key 
     */

    displayMembers: (dictionary, key) => {
        if (dictionary.size > 0) {
            let entries = dictionary.get(key);            
            if(!entries || entries.length == 0) {
                console.log('ERROR, key does not exist.');
                return 0;
            } else {
                entries.forEach((entry, idx) => {
                    console.log(idx+1, ') ', entry);
                })
                return entries.length;
            }                
        }
        else {            
            console.log('ERROR, key does not exist.');
            return 0;
        }
    },

    /**
     * Method adds the new member to the specified key
     * @param {Map} map 
     * @param {String} key 
     * @param {String} value 
     */

    addToDictionary: (map, key, value) => {
        if (map.size > 0 && map.has(key)) {
            var currKeyMembers = map.get(key);
            if(currKeyMembers && !currKeyMembers.find(i => i === value)) {
                map.set(key, [...map.get(key), value]);
                console.log('Added');
            } else {
                console.log('ERROR, member already exists for the key.')
            }
           
        } else {
            map.set(key,[value]);
            console.log('Added');
        } 
    },

    /**
     * Method removes the specified member for the specified key from the dictionary.
     * Last member for the key removal also removes the key itself.
     * @param {Map} dictionary 
     * @param {String} key 
     * @param {String} value 
     */ 

    removeFromDictionary: (dictionary, key, value) => {
        if (dictionary.size > 0 && dictionary.has(key) && value) {
            let entries = dictionary.get(key);
            let memberFound = entries.find(x => x === value);
            if(!memberFound)
                console.log('ERROR, member does not exist.');
            else {
                if(entries.length == 1) {
                    dictionary.delete(key);
                } else {
                    dictionary.set(key, entries.filter(x => x !== value));
                }
                console.log('Removed')
            }               
        }
        else {            
            console.log('ERROR, key does not exist.');
        }
    },

    /**
     * Method removes all members for a key from the dictionary.
     * @param {Map} dictionary 
     * @param {string} key 
     */

    removeAll: (dictionary, key) => {
        if (dictionary.size > 0 && dictionary.has(key)) {
            dictionary.delete(key);
            console.log('Removed');
        }
        else {            
            console.log('ERROR, key does not exist.');
        }
    },

    /**
     * Method clears out the entire dictionary.
     * @param {Map} dictionary 
     */

    clearMethod: (dictionary) => {
        dictionary.clear();
        console.log('Cleared');
    },

    /**
     * Method returns whether a key is present or absent in the dictionary.
     * @param {Map} dictionary 
     * @param {string} key 
     */

    keyExists: (dictionary, key) => {
        if (dictionary.size > 0 && dictionary.has(key))
            console.log('true');   
        else 
            console.log('false');
    },

    /**
     * Method returns whether a member exists for a specified key in the dictionary.
     * @param {Map} dictionary 
     * @param {String} key 
     * @param {String} value 
     */

    memberExists: (dictionary, key, value) => {
        if (dictionary.size > 0 && dictionary.has(key)){
            let entries = dictionary.get(key);
            let memberFound = entries.find(x => x === value);
            if(!memberFound) 
                console.log('false');
            else
                console.log('true');
        } 
        else 
            console.log('false');
    },

    /**
     * Displays all members present in the dictionary.
     * @param {Map} dictionary 
     */

    allMembers: (dictionary) => {
        if (dictionary.size > 0){
            var arrMembers = new Array(0);
            dictionary.forEach((value) => {
                arrMembers = arrMembers.concat(value);
            });
            arrMembers.map((value, index) => {
                console.log(index+1, ') ', value);
            });
            return arrMembers.length;
        } 
        else 
            console.log('empty set');
            return 0;
    },

    /**
     * Method displays all items (key : member) from the dictionary.
     * @param {Map} dictionary 
     */

    allItems: (dictionary) => {
        if (dictionary.size > 0){
            const objItems = Object.fromEntries(dictionary);
            var itr = 0;
            for(const [key, value] of Object.entries(objItems)) {
                value.forEach(x => {
                    itr +=1;
                    console.log(itr,')', key, ': ', x);
                });
            }
            return itr;
        } 
        else 
            console.log('empty set');
            return 0;
    },



}