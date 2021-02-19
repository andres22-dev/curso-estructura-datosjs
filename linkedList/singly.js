//Graficamente se veria asi la funcion de linkedlist solo 
  //Que nos regresaria un objeto
    // 1 --> 2 --> 3 --> 4 --> 5 --> null


//Esta es la estructura que manejan los linkedlist 
  //Tenemos un objeto con un valor y que tendria el valor siguiente
    //Puesto en un segundo objeto y asi sucesivamente 
      //Hasta llegar al valor que queremos obtener
let singlyLinkedList = {

  head:{

    value:1,
    next: {

      value : 2,
      next: {

        value:3,
        next:{

          value:4,
          next:{

            next: null
          }
        }
      }
    }

  }


}

//Creamos una clase la cual se encargara de generar nodos
  //Con esto cada vez que haga un metodo donde necesite inicializar
    // Un nodo hago una instancia de este nodo, agrego el valor
      //Y iniciamos el metodo

class Node{

  constructor(value){

    this.value = value;
    this.next  = null;
  }
}

//Creamos una clase para generar el linkedlist
class MySinglyLinkedList{

  //Va a tener un contructor que recibe un valor por parametro
  constructor(value){

    this.head = {
      //Este valor viene del valor que le pasamos por parametro al constructor
      value: value,
      next: null,


    }
    //La cola del linkedlist la cual apuntaria a la cabeza porque no tiene ningun valor
    this.tail = this.head;

    this.length = 1;
  }


  }

