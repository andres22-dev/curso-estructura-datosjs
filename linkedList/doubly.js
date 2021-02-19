class Node{

  constructor(value){

    this.value = value;
    this.next  = null;
    //agregamos el tercer valor que traen los double linked list
    this.prev = null;
  }
}

class MyDoublyLinkedList{

  constructor(value){

    this.head = {
      value: value,
      next: null,
      //Agregamos tambien en el constructor prev para poder utilizar este dato
        //Cuando se instancie la clase
      prev: null,


    }
    this.tail = this.head;

    this.length = 1;
  }
  append(value){
  
    const newNode = new Node(value);

    //le asignamos al prev el nodo que esta en la cola
    
    newNode.prev = this.tail;

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


  insert(index, value){

      if(index >= this.length){

        return this.append(value);

      }

      const newNode = new MySinglyLinkedList(1);
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

//instanciamos de nuevo nuestras clases

let myDoublyLinkedList = new MyDoublyLinkedList(1);