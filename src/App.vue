<template>
	
	<div class="app" >
		<h1 class="app__title">todos</h1>
		<div class="app__container">
			<todo-form @create="createTodo"/>
			<todo-list :todos="todos" ref="todos" @activeStatus="updateStatus" @remove="removeTodo" />
			<app-navbar :currentTab="currentTab" @showAll="showAllTodo" @showComleted="showComletedTodo" @showActive="showActiveTodo" :todos="todos" />
		</div>
		<div class="pages">
			<div class="page"></div>
			<div class="page"></div>
			<div class="page"></div>
		</div>
	</div>
</template>

<script>
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'
import { 
  OverlayScrollbars, 
  ScrollbarsHidingPlugin, 
  SizeObserverPlugin, 
  ClickScrollPlugin 
} from 'overlayscrollbars';
export default {
	components: {
		TodoForm, TodoList
	},
	data() {
		return {
			todos: [
				{id: 1, text: 'Lorem ipsum dolor sit amet', status: 'active', visible: true},
				{id: 2, text: 'Lorem ipsum dolor sit amet3', status: 'active', visible: true},
				{id: 3, text: 'Lorem ipsum dolor sit amet4', status: 'active', visible: true},
				{id: 4, text: 'Lorem ipsum dolor sit amet2', status: 'active', visible: true},
			],
			currentTab: 'all'
		}
	},
	watch: {
		
	},
	methods: {
		updateStatus(todo){
			event.target.closest('.todo__item').classList.add('_checked');
			for (const t of this.todos) {
				if (t.id == todo.id){
					t.status = 'completed';
				}
			};
		},
		showAllTodo(todos){
			for (const t of todos) {
				t.visible = true;
			}
			this.currentTab = 'all';
		},
		showActiveTodo(todos){
			this.showAllTodo(todos);

			for (const t of todos) {
				if (t.status !== 'active'){
					t.visible = false;
				}
			}
			this.currentTab = 'active';
		},
		showComletedTodo(todos){
			this.showAllTodo(todos);

			for (const t of todos) {
				if (t.status !== 'completed'){
					t.visible = false;
				}
			}
			this.currentTab = 'complete';
		},
		removeTodo(todo){
			this.todos = this.todos.filter(p => p.id !== todo.id)

			localStorage.setItem('todos', JSON.stringify(this.todos))
		},
		createTodo(todo){
			this.todos.unshift(todo)

			localStorage.setItem('todos', JSON.stringify(this.todos))
		},
		
	},
	async mounted() {
		const data = await localStorage.getItem('todos');
		data ? this.todos = JSON.parse(data) : null
	},

}
</script>

<style lang="scss">
	
	body{
		background-color: #f5f5f5;
		overflow-y: scroll;
		  
	}
	
	body::-webkit-scrollbar {
  		width: 6px;
		  background: rgba(0,0,0,0.2); 
	}
	body::-webkit-scrollbar-track {
		margin: 6px;
  
	}	
	body::-webkit-scrollbar-thumb {
	width: 5px;
	border: 8px solid rgba(0,0,0,0.6);

  border-radius: 20px;
 
	}
	#app{
		max-width: 700px;
		margin: 50px auto 0;
		padding: 0 15px;
		width: 100%;
		@media (max-width: 768px){
			  margin-top: 15px;
		}
		
	}
	.app{
		position: relative;	
		
		font-family: 'Montserrat', sans-serif;
		&__container{
			margin: 0 auto;
			background-color: #fff;
			
			border: 1px solid rgba(0,0,0,0.3);
			border-top:none;
			filter: drop-shadow(0 20px 10px  rgba(0, 0, 0, 0.25));
			
		}
		&__title{
			font-family: 'Roboto', sans-serif;
			text-align: center;
			font-size: 75px;
			font-weight: 100;
			color: #cacac1;
			margin-bottom: 10px;
			@media (max-width: 630px){
				  font-size: 65px;
			}
		}
	}
	.pages{
		margin: 0 auto;
		.page{
				background-color: #f5f5f5;
			filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
			margin: 0 auto;
			
			
			border: 1px solid rgba(0,0,0,0.3);
			padding-bottom: 5px;
			&:nth-child(1) {
				transform: rotateX(0deg) rotateY(3deg); 
				filter:none; 
				height: 6px;
				border-top:none;
				width: 99%;
			}
    		&:nth-child(2) { 
				transform: rotateX(0deg) rotateY(4.5deg);  
				width: 98%;
				border-top:none; 
				height: 6px;
				position: relative;
				z-index: 5;
			}
    		&:nth-child(3) { 
				transform: rotateX(0deg) rotateY(6deg);  
				width: 98%;
				height: 1px;
				z-index: 3;
				position: relative;
				border-top:none; 
				margin-top: -4px;
			}
		}
	}
	 
</style>