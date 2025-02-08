// Classe que representa um nó na fila de prioridade
class Node {
    constructor(value, priority) {
      this.value = value;       // Valor do nó
      this.priority = priority; // Prioridade do nó
    }
  }
  
  // Classe que representa a fila de prioridade
  class PriorityQueue {
    constructor() {
      this.items = []; // Array para armazenar os nós
    }
  
    // Método para adicionar um elemento na fila com uma prioridade
    enqueue(value, priority) {
      const newNode = new Node(value, priority);
  
      // Se a fila estiver vazia, simplesmente adiciona o novo nó
      if (this.isEmpty()) {
        this.items.push(newNode);
      } else {
        // Encontra a posição correta para inserir o novo nó com base na prioridade
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
          // Se a prioridade do novo nó for maior que a do nó atual
          if (newNode.priority > this.items[i].priority) {
            this.items.splice(i, 0, newNode); // Insere na posição correta
            added = true;
            break;
          }
        }
        // Se o nó não foi adicionado, significa que ele tem a menor prioridade
        if (!added) {
          this.items.push(newNode); // Adiciona no final da fila
        }
      }
    }
  
    // Método para remover o elemento com a maior prioridade
    dequeue() {
      if (this.isEmpty()) {
        return 'A fila está vazia'; // Não há nada para remover
      }
      return this.items.shift(); // Remove e retorna o primeiro nó
    }
  
    // Método para ver o primeiro elemento da fila (peek)
    peek() {
      if (this.isEmpty()) {
        return 'A fila está vazia';
      }
      return this.items[0]; // Retorna o nó com maior prioridade
    }
  
    // Método para verificar se a fila está vazia
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Método para verificar o tamanho da fila
    size() {
      return this.items.length;
    }
  
    // Método para limpar a fila
    clear() {
      this.items = [];
    }
    
  }
  
  // Exemplo de uso da Fila de Prioridade
  const filaPrioridade = new PriorityQueue();
  
  // Adicionando elementos com prioridade
  filaPrioridade.enqueue('Paciente A', 2); // Prioridade 2
  filaPrioridade.enqueue('Paciente B', 5); // Prioridade 5
  filaPrioridade.enqueue('Paciente C', 1); // Prioridade 1
  filaPrioridade.enqueue('Paciente D', 3); // Prioridade 3
  
  console.log(print()); // Output: { value: 'Paciente B', priority: 5 }
  
  console.log(filaPrioridade.peek()); // Output: { value: 'Paciente B', priority: 5 }
  console.log(filaPrioridade.dequeue()); // Output: { value: 'Paciente B', priority: 5 }
  console.log(filaPrioridade.peek()); // Output: { value: 'Paciente D', priority: 3 }
  console.log(filaPrioridade.size()); // Output: 3