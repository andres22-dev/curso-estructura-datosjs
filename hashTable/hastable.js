//Todo lo que implementamos desde el costructor y el metodo hashMetod
  //Es una hash function que nunca tendremos que aplicarla en codigo
    //Ya que podremos usarla de otras fuente y no hay necesidad de construirla

class HastTable{

  constructor(size){

    this.data = new Array(size);

  }

  //Con esta funcion estamos generando un numero random que es desde 0 al  60535
  hashMethod(key){

    let hash = 0;
    for(let i = 0; i < key.lenght; i++){

      hash = (hash + key.charCodeAt(i) * 1) % this.data.length;

    }
    return hash;
  }
  set(key,value){

    const address = this.hashMethod(key);

    //Con esto le estamos diciendo que si ya existeuna direccion con informacion 
      //No reescribas si mas bien agrega otro array a esa posicion y ya despues poder tener acceso
       // a esa informacion
    if(!this.data[address]){
      this.data[address] = [];

    }
    this.data[address].push(key,value);
    return this.data;
  }
}


//Generamos la instancia de mi clase hasttable y le estoy diciendo que necesito
  //50 espacios libres para la hashtable
    //Para tener espacios libres y empiece a guardar informacion ahi

const myHashTable = new HastTable(50);
myHashTable.set('Diego', 1990);
myHashTable.set('Mariana', 1998);
console.log(myHashTable.set('Alejandra', 2000));