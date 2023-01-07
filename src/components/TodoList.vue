<template lang="ru">
	
	<div class="todos-list">
		<img @click="hideList" src="../assets/img/down-arrow.png" alt="" class="arrow-down">
		<transition-group  name="todo-list">
			<div v-for="todo in todos"  :ref="'item_' + todo.id"  :key="todo.id"  class="todos__list todo" >
				<div class="todo__item" v-show="listVisible && todo.visible">
					<input  class="form-check-input todo__check" @click.stop="$emit('activeStatus', todo)" type="checkbox" id="{{ todo.id }}">
					<label class="form-check-label todo__text"  >{{ todo.text }}</label>
					<button type="button" class="btn-close todo__btn"  @click="$emit('remove', todo)"></button>
				</div>
			</div>
		</transition-group>
	</div>
	
</template>
<script>
export default {
	name: 'todo-list',
	props: {
		todos: {
			type: Array,
			required: true
		}
	},
	data() {
		return{
			listVisible: true,
			statusCompleted: false
		}
	},
	methods: {
		hideList(){
			if (this.listVisible){
				this.listVisible = false;
			} else {
				this.listVisible = true;
			}
			
		}
	},
}
</script>
<style lang="scss" scoped>

	

	.arrow-down{
			width: 30px;
			z-index: 10;
			cursor: pointer;
			height: 30px;
			opacity:0.7;
			top:-48px;
			left:10px;
			display: block;
			position:absolute;
		}
	.todos-list{
		position: relative;
		
	}
	.todos {
		&__list {
			display: flex;
			flex-direction: column;
		}
	}

	.todo {
		&__text {
			cursor: pointer;
			font-size: 20px;
			line-height: 1;
			max-width: calc(100% - 75px);
			width: 100%;
			margin: auto 0;
			
			transition: all 2s ease 0s;
			@media (max-width: 768px){
			 font-size: 18px;
			}
			._checked &{
				text-decoration: line-through;
				opacity: 0.5;
				
			}
		}

		&__item {
			position: relative;
			display: flex;
			overflow: hidden;
			padding: 20px 10px;
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
			opacity:0;
			&:focus {
				box-shadow: none;
				opacity: 0.8;
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
	  	transition: transform 0.3s ease;
	}
	
	._checked{
		.form-check-input{
			background: url('../assets/img/check.svg') 4px 7px no-repeat;
			border-color:rgba(0, 0, 0, 0.25);
			
		}
	}
	
	
</style>