window.onload = function(){

	//非父子之间的组件通信
	
	//使用一个空的 Vue 实例作为中央事件总线： 
	var eventBus = new Vue();

	var upcomponent = {
		template:'<div><p>the count of foo is {{upCount}}</p>' + '<button @click="addDown">add bar\'s count</button></div>',
		data:function(){
			return {
				upCount:0
			}
		},
		methods:{
			addDown:function(){
				alert(333)
				eventBus.$emit('addDown');
				
			}
		},
		mounted:function(){
			alert(111)
			var _this = this;  //当this进入到另一个方法其作用域发生了改变，故通过变量赋值的方法传递，或者用组件bbb里面的方法
			eventBus.$on('addUp',function(num){
				alert(666)
				_this.upCount +=num;
			})
		}
	}

	var downcomponent = {
		template:'<div><p>the count of foo is {{downCount}}</p>' + '<button @click="addUp">add foo\'s count</button></div>',
		data:function(){
			return {
				downCount:0
			}
		},
		methods:{
			addUp:function(){
				alert(555)
				eventBus.$emit('addUp',1);
			}
		},
		mounted:function(){
			alert(222)

			eventBus.$on('addDown',function(){
				alert(444)
				this.downCount++;
			}.bind(this))  //此处方法后面加.bind(this),是为了使方法内的this与组件所对应的this保持一致，此处的绑定方式与组件aaa里面的赋值一样；

			//上面的方法也可用下面的方法来替代
			//eventBus.$on('baddDown',() => this.bdownCount++)

		}
	}


	new Vue({
	  el: '#app',
	  components: {
	    upcomponent,
	    downcomponent
	  }
	})



}