<template lang="ru">
	<div class="input__container">
		<input ref="input" @input="this.$refs.input.classList.remove('_req')" v-model.trim="todo.text" type="text" placeholder="Что должно быть сделано?" class="input">
		<label class="cursor"></label>
		<button type="button" class="btn-close input__btn"  @click="createTodo"></button>
	</div>
</template>
<script>	
export default {
	name: 'todo-form',
	data() {
		return {
			todo: {
				text: '',
			},
			
		}
	},
	
	methods: {
		createTodo() {
			this.todo.visible = true;
			this.todo.status = 'active';
			this.todo.id = Date.now();
			if (this.todo.text != '')	{
				this.$emit('create', this.todo);
				this.todo = {
					text: ''
				}
			} else{
				this.$refs.input.classList.add('_req')
				setTimeout(() => {
					this.$refs.input.classList.remove('_req')
				}, 1500);
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.input{
		width: calc(100% - 20px);
		padding: 10px 20px 10px 40px;
		border: none;
		transition: box-shadow 0.2s ease 0s;
		&._req{
			box-shadow: 0 19px 12px -15px rgba(247, 52, 22, 0.3);
		}
		&:focus,
		&:hover {
			border: none;
			outline: none;
		}
		&::placeholder { 
			font-size: 20px;
			font-weight: 300;
			font-style: italic;
			opacity: 0.7;
			position: relative;
			bottom: -3px;
			@media (max-width: 768px){
			font-size: 18px;
			}
		}	

		&:-ms-input-placeholder { 
            font-size: 20px;
				font-weight: 300;
				font-style: italic;
				opacity: 0.7;
				@media (max-width: 768px){
			font-size: 18px;
			}
		}

		&::-ms-input-placeholder { 
           font-size: 20px;
			  font-weight: 300;
			  font-style: italic;
			  opacity: 0.7;
			  @media (max-width: 768px){
			font-size: 18px;
			}
 		}
	&__container{
		padding: 12px;
		position: relative;
		border-bottom: 2px solid rgba(0, 0, 0, 0.2);
	}
	&__btn {
			transition: opacity 0.3s ease 0s;
			position: absolute;
			right: 20px;
			top:22px;
			transform: rotate(45deg);

			&:focus{
				box-shadow: none;
				opacity: 0.5;
			}
			&:hover{
				opacity: 0.8;
			}
		}
	}

.input__container label:before {
  content: '';
  display: none;
  position: absolute;
  left: 52px;
  top: 24px;
  width: 1px;
  height: 21px;
  background: #000;
  opacity: 1;
  z-index: 3;
}

.input__container input:not(:focus) + label.cursor:before {
  display: inline-block;
  animation: cursor 1.5s infinite step-end;
}

@keyframes cursor {
  50% { background: transparent; }
}
</style>


