<template>
	<div class="navbar">
		<div class="navbar__quantity">Осталось {{ countTodos() }} дел(а)</div>
		<div class="navbar__btns ">
			<button ref="btnAll" @click="isActive($event.target); $emit('showAll', todos)" class="btn-navbar__all btn-navbar _active">Все</button>
			<button ref="btnActive" @click="isActive($event.target); $emit('showActive', todos)" class="btn-navbar__active btn-navbar">Активные</button>
			<button ref="btnCompleted" @click="isActive($event.target); $emit('showComleted', todos)" class="btn-navbar__completed btn-navbar">Выполненые</button>
		</div>
		<div @click="this.todos.length = 0" class="navbar__clear">Очистить все</div>
	</div>
</template>

<script>
	export default {
		name: 'app-navbar',
		props: {
			todos: {
				type: Array,
				raqured: true
			},
			currentTab: {
				type: String,
				raqured: true
			}
		},
		watch: {
		countTodos() {
				let len = 0;
				for (const t of this.todos) {
					if (t.visible && this.currentTab !== 'all'){
						len++
					} else if (this.currentTab == 'all') {
						for (const element of this.todos) {
							if (element.status == 'active') {
								len = len + 1 / this.todos.length;
								
							}
						}
					} else if (this.currentTab == 'complete'){
						len = 0;
					}
				}
				return len.toFixed(0)
			}
		},
		methods: {
			isActive(event) {
				event.classList.toggle('_active');
				
				let buttonAll = this.$refs.btnAll;
				let buttonActive = this.$refs.btnActive;
				let buttonCompleted = this.$refs.btnCompleted;

				if (buttonAll.classList == event.classList){
					buttonActive.classList.remove('_active');
					buttonCompleted.classList.remove('_active');
				}

				if (buttonActive.classList == event.classList){
					buttonAll.classList.remove('_active');
					buttonCompleted.classList.remove('_active');
				}

				if (buttonCompleted.classList == event.classList){
					buttonAll.classList.remove('_active');
					buttonActive.classList.remove('_active');
				}
				
			},
				
			countTodos() {
				let len = 0;
				for (const t of this.todos) {
					if (t.visible && this.currentTab !== 'all'){
						len++
					} else if (this.currentTab == 'all') {
						for (const element of this.todos) {
							if (element.status == 'active') {
								len = len + 1 / this.todos.length;
								
							}
						}
					} else if (this.currentTab == 'complete'){
						len = 0;
					}
				}
				return len.toFixed(0)
			}
		},
	}
</script>

<style lang="scss" scoped>
	.navbar {
		@media (max-width: 768px){
			gap: 30px;
			text-align: center;
		}
		@media (max-width: 630px){
			gap: 15px;
		}
		font-size: 16px;
		padding: 15px 10px;
		opacity: 0.8;
		&__quantity {
			@media (max-width: 630px){
			flex: 1 1 100%;
			
			}
		}
		&__btns {
			display:flex;
			gap: 7px;
			button{
				border: none;
				background: none;
				
			}
			@media (max-width: 630px){
			flex: 1 1 100%;
			justify-content: center;
			}
		}
		&__clear {
			cursor: pointer;
			padding: 1px 6px;
			outline: none;
			&:active,
			&:hover,
			&:focus{
				outline: 1px solid rgba(0,0,0,0.6);
			border-radius: 2px;
			}
			@media (max-width: 630px){
			flex: 1 1 100%;
			
			}
		}
	}
	.btn-navbar  {
		&._active {
			outline: 1px solid rgba(0,0,0,0.6);
			border-radius: 2px;
		}
	}
</style>