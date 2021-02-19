const array = ["Diego", 'Karen', "Oscar"];

console.log(array); // (3)["Diego", 'Karen', "Oscar"]

//Para llamar un elemento le indicamos la posicion del elemento que queremos llamar
array[0]

//Metodos


//Push sirve para empujar un elemento a lo ultimo del array
array.push('xd');

//El ejercicio que haremos es construir una clase para construir un array 
  //Desde 0 que venga con el metodo de get que es para poder obtener algun elemento
    //El metodo de push para agregar un elemento
      //El metodo de get que me va a ayudar a borrar ese elemento
        //El metodo de pop que me va a ayudar a borrar un elemento
  //Y asi con cualquier metodo pero por ahora haremos los principales


class MyArray{

  constructor(){

    this.length = 0;
    this.data = {};
  }

  //Funcion para obtener el elemento
  get(index){

    //retornamos la informacion y le damos un indice
    return this.data[index];


  }

  //Agregar elemento al array y le pasamos por parametro el elemento que le
    //Vamos a agregar
  push(item){

  //Le indicamos a la data la longitud que estamos agregando ya que 
   //Estamos creando un nuevo elemento por lo tanto nuestro array es mas largo
  
    this.data[this.length] = item;
    this.length++;
    return this.data;

  }

  


}

//Generamos una histancia de nuestra clase

const myArray = new MyArray();