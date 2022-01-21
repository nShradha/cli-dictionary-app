module.exports = {
    
    displayKeys: (dictionary) => {
        if (dictionary.size > 0) {
            let entries = Array.from(dictionary.keys());            
            entries.forEach((entry, idx) => {
                console.log(idx+1, ') ', entry);
            });
        }
        else {            
            console.log('Empty Set.');
        }
    },

    displayMembers: (dictionary, key) => {
        if (dictionary.size > 0) {
            let entries = dictionary.get(key);
            if(entries.length == 0)
                console.log('ERROR, key does not exist.');
            else 
                entries.forEach((entry, idx) => {
                    console.log(idx+1, ') ', entry);
                })
        }
        else {            
            console.log('ERROR, key does not exist.');
        }
    },

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

    removeFromDictionary: (dictionary, key, value) => {
        if (dictionary.size > 0 && dictionary.has(key)) {
            let entries = dictionary.get(key);
            let memberFound = entries.find(x => x === value);
            if(!memberFound)
                console.log('ERROR, member does not exist.');
            else {
                if(entries.length == 1) {
                    dictionary.delete(key);
                } else {
                    dictionary.map((member, index)=> {
                        if(member === value) {
                            dictionary.set(key, entries.splice(index,1))
                        }
                    });
                }
                console.log('REMOVED')
            }
               
        }
        else {            
            console.log('ERROR, key does not exist.');
        }
    },

    removeAll: (dictionary, key) => {
        if (dictionary.size > 0 && dictionary.has(key)) {
            dictionary.delete(key);
            console.log('Removed');
        }
        else {            
            console.log('ERROR, key does not exist.');
        }
    },

    clearMethod: (dictionary) => {
        dictionary.clear();
        console.log('Cleared');
    },

    keyExists: (dictionary, key) => {
        if (dictionary.size > 0 && dictionary.has(key))
            console.log('true');   
        else 
            console.log('false');
    },

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

    allMembers: (dictionary) => {
        if (dictionary.size > 0){
            var arrMembers = new Array(0);
            dictionary.forEach((value) => {
                arrMembers = arrMembers.concat(value);
            });
            arrMembers.map((value, index) => {
                console.log(index+1, ') ', value);
            })
        } 
        else 
            console.log('empty set');
    },

    allItems: (dictionary) => {
        if (dictionary.size > 0){
            const objItems = Object.fromEntries(dictionary);
            var itr = 0;
            for(const [key, value] of Object.entries(objItems)) {
                value.forEach(x => {
                    itr +=1;
                    console.log(itr+1,')', key, ': ', x);
                });
            }
        } 
        else 
            console.log('empty set');
    },



}