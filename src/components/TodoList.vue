<template lang="ru">
	<transition-group name="todo-list">
	<div v-for="todo in todos" :key="todo.id" class="todos__list todo" >
		<div class="todo__item">
			<input class="form-check-input todo__check" @click="show" type="checkbox" id="{{ todo.id }}">
			<label class="form-check-label todo__text" for="{{ todo.id }}">{{ todo.text }}</label>
			<button type="button" class="btn-close todo__btn"  @click="$emit('remove', todo)"></button>
		</div>
	</div>
	</transition-group>
	
</template>
<script>
export default {
	name: 'todo-list',
	props: {
		todos: {
			type: Array,
			required: false
		}
	},
	data() {
		return{
			itemVisible: false
		}
	},
	methods: {
		show(event){
			event.target.closest('.todo__item').classList.toggle('_checked');
		}
	},
}
</script>
<style lang="scss" scoped>
	.todos {
		&__list {
			display: flex;
			flex-direction: column;
		}
	}

	.todo {
		&__text {
			cursor: pointer;
			font-size: 18px;
			line-height: 1;
			max-width:555px;
			width: 100%;
			margin: auto 0;
			font-size: 18px;
			transition: all 2s ease 0s;
			._checked &{
				text-decoration: line-through;
				opacity: 0.5;
				
			}
		}

		&__item {
			position: relative;
			display: flex;
			overflow: hidden;
			padding: 20px ;
			border-bottom: 1px solid rgba(0, 0, 0, 0.2);
			transition: opacity 4s ease 0.5s;
			
			
			&:hover{
					.todo__btn{
						opacity: 0.7;
					}
			}
		}

		&__check {
			cursor: pointer;
			position: relative;
			top: -1.3px;
			margin-right: 15px;
			min-width:1.6rem;
			min-height:1.6rem;
			border-radius: 50%;
			border-color:rgba(0, 0, 0, 0.25);
			background: none;
			
		}

		&__btn {
			position: absolute;
			right: 20px;
			top:25px;
			transition: opacity 0.3s ease 0s;
			opacity:0.2;
			&:focus {
				box-shadow: none;
				opacity: 1;
			}

			
		}

	}
	.form-check-input:focus{
		box-shadow: none;
	}
	.form-check-input{
		background: none;
	}
	
	.todo-list-item {
  		display: inline-block;
  		margin-right: 20px;
	}
	.todo-list-enter-active,
	.todo-list-leave-active {
	  	transition: all 0.3s ease;
	}
	.todo-list-enter,
	.todo-list-leave-to {
	  	opacity: 0;
	  	transform: translateX(30px);
	}
	.todo-list-move {
	  	transition: transform 0.5s ease;
	}
	
	._checked{
		.form-check-input:checked{
			background: url('../assets/img/check.svg') 4px 7px no-repeat;
			border-color:rgba(0, 0, 0, 0.25);
			
		}
	}
	
	
</style>