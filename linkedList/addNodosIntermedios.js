class Node{

  constructor(value){

    this.value = value;
    this.next  = null;
  }
}

class MySinglyLinkedList{

  constructor(value){

    this.head = {
      value: value,
      next: null,


    }
    this.tail = this.head;

    this.length = 1;
  }
  append(value){
  
    const newNode = new Node(value);
    
    this.tail.next = newNode;

    this.tail = newNode;

    this.length++;

    return this;



  }

  prepend(){

    const newNode = new Node(value);

    newNode.next = this.head;

    this.head = newNode;

    this.length++;

    return this;





  }

  //Creamo nuestra nueva funcion a la que recibe dos parametros
    //Un indice para saber desde donde lo vamos agre y el valor que vamos a agregar
  insert(index, value){

    //Ejemplo visual
      // nodo1 - nodo2 - nodo4 

      //Supongamos que queremos agregar el nodo 3 entre el nodo 2 y 4
        //Para esto no solo tenemos que hacer la logica de que para agregar este
        //Nodo 3 necesitamos el indice del nodo que esta a la izquierda del que vamos 
        //y luego indicarle el valor que agregaremos enseguida de este


      //Porque tendriamos que tener en cuenta los factores que afectarian la logica
        //Que tenemos como por ejemplo que estariamos afectando el siguiente nodo
          //Porque lo estamos dejando sin un pointer y si esto sucede el garbage colector
            //Lo va a borrar 

      //Entonces tenemos que asegurar que ninguno de los nodos se quede sin pointer
        //Porque si no se borraria

      //Primero tendremos que hacer una validacion para verificar que si hayan indices
        //Suficientes para agregar un nodo, porque no podriamos aplicar nuestra
          //Logica sin que hayan nodos suficientes para que se pueda aplicar
      if(index >= this.length){

        return this.append(value);

      }

      const newNode = new MySinglyLinkedList(1);
      //Obtenemos el indice del nodo que estara a la izquierda del que agregaremos
        //agregaremos un metodo que se encargue de encontrar esos indices
      const firstPointer = this.getTheIndex(index - 1);

      const holdingPointer = firstPointer.next;

      firstPointer.next =  newNode;

      newNode.next = holdingPointer;

      this.length++;

      return this;
  }

  getTheIndex(){

    let counter = 0;
    let currentNode = this.head;

    while(counter !== index){

      currentNode = currentNode.next;
      counter++;

    }
    return currentNode;

  }

}

let myLinkedList = new MySinglyLinkedList(1);