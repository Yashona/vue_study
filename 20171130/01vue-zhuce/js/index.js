window.onload = function(){

	//全局注册
/*	
	Vue.component('my_comp',{
		template:'<p>Hello World !</p>'
	})


	new Vue({
		el:'#demo'
	})
*/

	//局部注册  注意先申明child
/*	var child = {
		template:"<p>Hello World !</p>"
	}

	new Vue({
		el:"#demo",
		components:{
			'my_comp':child
		}
	})
*/
	
	//全局注册  data必须是函数
	/*
	Vue.component('my_comp',{
		template:'<span> {{message}} </span>',
		data:function() {
			return data = {
				message:'我是一个兵！'
			}
		}
	})

	new Vue({
		el:'#demo'
	})
*/
	//由于这三个组件共享了同一个 data ， 因此增加一个 counter 会影响所有组件！我们可以通过为每个组件返回新的 data 对象来解决这个问题：
/*	Vue.component('my_comp',{
		template:'<button @click="counter += 1" style="margin:50px;width:auto;padding:0 5px;line-height:20px;text-align:center;" > {{counter}} </button>',
		data:function() {
			return data = {
				counter:0
			}
		}
	})

	new Vue({
		el:'#demo'
	})

	//&    用下面的方式也可以
	
	var data = { counter:0 }
	Vue.component('my_comp',{
		template:'<button @click="counter += 1" style="margin:50px;width:auto;padding:0 5px;line-height:20px;text-align:center;" > {{counter}} </button>',
		data:function() {
			return data;
		}
	})

	new Vue({
		el:'#demo'
	})
*/

}