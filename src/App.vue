<template>
	<h1 class="app__title">todos</h1>
	<div class="app">
		<todo-form @create="createTodo"/>
		<todo-list :todos="todos" @remove="removeTodo" />
	</div>
</template>

<script>
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'
export default {
	components: {
		TodoForm, TodoList
	},
	data() {
		return {
			todos: [
				{id: 1, text: 'Lorem ipsum dolor sit amet'},
				{id: 2, text: 'Lorem ipsum dolor sit amet2'},
				{id: 3, text: 'Lorem ipsum dolor sit amet3'},
				{id: 4, text: 'Lorem ipsum dolor sit amet4'}
			],
		}
	},
	methods: {
		createTodo(todo){
            console.log(todo);
			this.todos.unshift(todo)
		},
		removeTodo(todo){
           event.target.closest('.todo__item').classList.remove('_cheked');
			this.todos = this.todos.filter(p => p.id !== todo.id)

		}
	},
}
</script>

<style lang="scss">
	body{
		background-color: #f5f5f5;
	}
	#app{
		max-width: 700px;
		margin: 70px auto 0;
		width: 100%;
	}
	.app{
		margin: 0 auto;
		background-color: #fff;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

		&__title{
			text-align: center;
			font-size: 55px;
			font-weight: 300;
			margin-bottom: 10px;
		}
	}

	
	
</style>