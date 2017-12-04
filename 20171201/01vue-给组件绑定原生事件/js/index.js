window.onload = function(){

	//给组件绑定原生事件   渲染的代码中没有事件(<button >{{ counter }}</button>),
	//但是在组件的根元素上监听一个原生事件,如(<button-counter @click.native = "incrementTotal"></button-counter>)
	//可以使用 .native 修饰 v-on 或 @click
	Vue.component('button-counter',{
		template:'<button >{{ counter }}</button>',
		data:function(){
			return {
				counter:0
			}
		}
	})

	Vue.component('button-counter2',{
		template:'<div ></br><button @click="increment">{{ counter }}</button></div>',
		data:function(){
			return {
				counter:0
			}
		},
		methods:{
			increment:function(){
				this.counter++;
				this.$emit('increment');
			}
		}
	})

	new Vue({
		el:"#demo",
		data:{
			total:0
		},
		methods:{
			incrementTotal:function(){
				this.total++;
			}
		}
	})




}