//Clase que permite instanciar objetos de tipo TodoList
export class TodoList {

    constructor(){
        this.todos = [];
    }
//Agrega un Todo al arreglo de todos
    nuevoTodo( todo ){
        this.todos.push(todo);
    }

    eliminarTodo( id ){

    }

//Recorre toda la lista de todos para negar el completado del id enviado
//Una vez encontrado, rompe el bucle.
    marcarCompletado( id ){

        
        
        for( const todo of this.todos ){
            console.log(id, todo.id);
            if( todo.id == id ){
                todo.completado = !todo.completado;
                break;
            }
        }

    }

}