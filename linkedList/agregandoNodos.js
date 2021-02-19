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
    //generamos una constante en la cual vamos a generar un nuevo
      //Nodo que se va a colocar en la cola de nuestra lista
        //Hacemos una instancia de la clase que crea nuestros nodos
    const newNode = new Node(value);
    //Le asignamos a la cola el nuevo nodo pero para la fila el ultimo nodo
      //Que habia en la fila sigue siendo la fila
    this.tail.next = newNode;

    //Luego le indicamos a la fila que el ultimo nodo es el que creamos
    this.tail = newNode;

    //Incrementamos la logintud de nuestra lista
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

}

let myLinkedList = new MySinglyLinkedList(1);