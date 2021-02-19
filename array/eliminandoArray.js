class MyArray{

  constructor(){

    this.length = 0;
    this.data = {};
  }

  get(index){

    return this.data[index];


  }
  push(item){

    this.data[this.length] = item;
    this.length++;
    return this.data;

  }

  pop(){
    if (this.length === 0){

      console.log("No puedes borrar algo que no existe")

    }else{

    const lastItem = this.data[this.length - 1];
    //Utilizaremos el keyword palabra reservada para que borre el ultimo elemento
    delete this.data[this.length -1];
    this.length--;
    return lastItem;

    }
    
    
  }

  delete(index){

    const item = this.data[index]
    this.shiftIndex(index);
    
    return item;

  
  }

  shiftIndex(index){

    for(let i = index; i < this.length -1;){

      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length -1];
    this.length--;

  }

}

const myArray = new MyArray();