<script setup>
import {
  getItems,
  getItemById,
  deleteItemById,
  addItem,
  editItem,
} from '../libs/fetchUtils.js';
import TodoList from './TodoList.vue';
// import todos from '../../data/todos.json'
import AddEditTodo from './AddEditTodo.vue';
import { onMounted, ref } from 'vue';
import { TodoManagement } from '../libs/TodoManagement';
const showModal = ref(false);
const editingTodo = ref({ id: undefined, category: '', description: '' });
const openModalToEdit = (todo) => {
  //   console.log(todo)
  editingTodo.value = todo;
  showModal.value = true;
};

const clearModal = (flag) => {
  showModal.value = flag;
};
const myTodos = ref(new TodoManagement());
onMounted(async () => {
  const items = await getItems(import.meta.env.VITE_BASE_URL);
  myTodos.value.addTodos(items);
});

const removeTodo = async (removeId) => {
  //backend, deleteItemById(url, id)
  const statusCode = await deleteItemById(
    import.meta.env.VITE_BASE_URL,
    removeId
  );
  console.log(statusCode);
  if (statusCode === 200)
    //frontend updates myTodos
    myTodos.value.removeTodo(removeId);
};

const updateTodo = async (newTodo) => {
  //ADD Mode
  if (newTodo.id === undefined) {
    //backend, addItem(url, newItem),  return addedItem
    const addedItem = await addItem(import.meta.env.VITE_BASE_URL, {
      category: newTodo.category,
      description: newTodo.description,
    });
    //frontend, addTodo(id, category, desc)
    myTodos.value.addTodo(
      addedItem.id,
      addedItem.category,
      addedItem.description
    );
  }
  showModal.value = false;
  editingTodo.value = { id: undefined, category: '', description: '' };
};
</script>

<template>
  <div class="w-full">
    <div>
      <div class="flex justify-end">
        <button
          @click="openModalToEdit"
          class="px-2 py-0.5 text-green-600 rounded-lg hover:text-green-500"
        >
          Add New Todo
        </button>
      </div>
      <TodoList
        :todos="myTodos.getTodos()"
        @editMode="openModalToEdit"
        @deleteTodo="removeTodo"
      />
    </div>
    <Teleport to="#addEditModal"
      ><div
        v-show="showModal"
        class="absolute left-0 right-0 top-1/3 m-auto bg-slate-50 flex h-48 w-72 shadow-lg rounded-md"
      >
        <AddEditTodo
          @saveTodo="updateTodo"
          @closeModal="clearModal"
          :todo="editingTodo"
        />
        <!-- <button @click="showModal = false" class="text-red-500">Close</button> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped></style>
