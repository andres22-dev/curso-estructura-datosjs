class HastTable{

      constructor(size){
    
        this.data = new Array(size);
    
      }
          hashMethod(key){
    
        let hash = 0;
        for(let i = 0; i < key.lenght; i++){
    
          hash = (hash + key.charCodeAt(i) * 1) % this.data.length;
    
        }
        return hash;
      }
      set(key,value){
    
        const address = this.hashMethod(key);
    
        if(!this.data[address]){
          this.data[address] = [];
    
        }
        this.data[address].push(key,value);
        return this.data;
      }


      get(key){

        const address =  this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){

          for(let i = 0; i < currentBucket.lenght; i++){

            if(currentBucket[i][0] === key ){

              return currentBucket[i][0];
            }
          }
        }
      return undefined;

      }
    }

    const myHashTable = new HastTable(50);
    myHashTable.set('Diego', 1990);
    myHashTable.set('Mariana', 1998);
    console.log(myHashTable.set('Alejandra', 2000));