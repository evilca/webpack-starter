import './styles.css';
import {Todo, TodoList} from './classes';
import { crearTareaHtml } from './componentes/componentes.js'

const tarea = new Todo('Aprender Javascript');


export const listaTareas = new TodoList();

listaTareas.nuevoTodo(tarea);

crearTareaHtml(tarea);