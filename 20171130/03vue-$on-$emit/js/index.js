window.onload = function(){

	//使用 v-on 绑定自定义事件   在要渲染的代码(template)中加入自定义的事件通过$emit()来触发事件，
	//并且在渲染的代码(button-counter)中加入 v-on 来监听事件: <button-counter v-on:increment = "incrementTotal"></button-counter>
	//运行流程：当点击标签button触发里面increment方法，其方法内counter++，并使用 $emit('increment')触发事件 来触发
	//渲染的代码button-counter里面 用 v-on:increment 绑定的 incrementTotal 方法，使total++;
	//即 aaa1 -> bbb2 -> ddd3 -> eee4 -> ccc5
	Vue.component('button-counter',{
		template:'<button @click="increment">{{ counter }}</button>',
		data:function(){
			return {
				counter:0
			}
		},
		methods:{
			increment:function(){
				alert( this.counter +"aaa1" )
				this.counter++;
				alert( this.counter +"bbb2" )
				this.$emit('increment');
				alert( this.counter +"ccc5" )
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
				alert( this.total +"ddd3" )
				this.total++;
				alert( this.total +"eee4" )
			}
		}
	})

}