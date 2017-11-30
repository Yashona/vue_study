window.onload = function(){

	//使用Props传递数据  是在my_prop标签里面添加 message
/*	var aaa = '<div style="width:100px;height:100px;color:#f00;background:#f3f3f3;"><span>{{message}}</span></div>'
	
	Vue.component('my_prop',{
		props:['message'],
		template:aaa,
	})

	//此处的argument为一个变量参数，当为string 直接取 message;当为array，取用 message.a  或 message.b
	var argument ='我是一个‘程序猿’！';
	//var argument ={a:1,b:2};

	new Vue({
		el:"#demo",
		data:{
			message:argument
		}
	})

*/

	//动态props   类似用 v-bind绑定HTML一个表达式
	//用 v-bind 绑定动态 props 到父组件的数据。每当父组件的数据变化时，也会传导给子组件： 
/*	new Vue({
		el:"#props",
		data:{
			parentMsg:'message from parent'
		},
		components:{
			child:{
				props:['message'],
				template:'<div style="width:100px;height:100px;color:#f00;background:#f3f3f3;"><span>{{message}}</span></div>'
			}
		}
	})

*/
	

	//验证props   注意命名方式  如果没有渲染出来   有可能是名称出现问题  建议更改名称
	//number验证   赋值方式  <myexample :prop1 =22></myexample>
	/*Vue.component('myexample',{
		props:{
			//message:Number,
			// 基础类型检测 （`null` 意思是任何类型都可以）
			prop1: Number,
			// 多种类型 
			propB: [String, Number]

		},
		template:"<div><span>{{ prop1 }}</span><button @click='showMessage'>查看</button></div>",
		methods:{
			showMessage:function(){
				alert(typeof this.prop1 );

				if(typeof this.prop1 == "number"){
					this.prop1++;
					console.log(this.prop1)
				}

			}
		}
	})*/


	//String验证   赋值方式  <myexample :prop2 = " '333' "></myexample>  或者 <myexample :prop2 = " 'aaa' "></myexample>
	//赋值为字符串  不然会报错  如果只传数字（ <myexample :prop2 = " 333 "></myexample> ），不会报错，但是为number;
	/*Vue.component('myexample',{
		props:{
			// 必传且是字符串 
			prop2: {
				type: String,
				required: true 
			}

		},
		template:"<div><span>{{ prop2 }}</span><button @click='showMessage'>查看</button></div>",
		methods:{
			showMessage:function(){
				alert(typeof this.prop2 );
			}
		}
	})

*/

	//number默认验证   赋值方式  <myexample></myexample>
/*	Vue.component('myexample',{
		props:{
			// 数字，有默认值 
			prop3: {
				type: Number,
				default: 100 
			}
		},
		template:"<div><span>{{ prop3 }}</span><button @click='showMessage'>查看</button></div>",
		methods:{
			showMessage:function(){
				alert(typeof this.prop3 );
			}
		}
	})
	*/


	//Object 验证   赋值方式  <myexample></myexample>  或  <myexample :prop4 = '{a:"33",b:"44"}'></myexample>
/*	Vue.component('myexample',{
		props:{
			// 数组／对象的默认值应当由一个工厂函数返回  
			prop4: {
				type: Object,
				default: function () {
					return 'this is  the default way of object';
				}
			}
		},
		template:"<div><span>{{ prop4 }}</span><button @click='showMessage'>查看</button></div>",
		methods:{
			showMessage:function(){
				alert(typeof this.prop4 );
			}
		}
	})
	*/


	//自定义 验证   赋值方式  <myexample></myexample>  或  <myexample :prop4 = '{a:"33",b:"44"}'></myexample>
 	Vue.component('myexample',{
		props:{
			// 自定义验证函数 
			prop5: {
				validator: function (value) {
					return value > 10 
				}
			}
		},
		template:"<div><span>{{ prop5 }}</span><button @click='showMessage'>查看</button></div>",
		methods:{
			showMessage:function(){
				alert(typeof this.prop5 );
				console.log(this.prop5 );
			}
		}
	})


	new Vue({
		el:'#example',
		data:{
			msg:'hello!'
		}
	})






/*   // 下面是一个综合体
	Vue.component('myexample',{
		props:{
			message:Number,
			// 基础类型检测 （`null` 意思是任何类型都可以）
			propA: Number,
			// 多种类型 
			propB: [String, Number],
			// 必传且是字符串 
			propC: {
				type: String,
				required: true 
			},
			// 数字，有默认值 
			propD: {
				type: Number,
				default: 100 
			},
			// 数组／对象的默认值应当由一个工厂函数返回 
			propE: {
				type: Object,
				default: function () {
					return { message: 'hello' }
				}
			},
			// 自定义验证函数 
			propF: {
				validator: function (value) {
					return value > 10 
				}
			}

		},
		//template:'<div style="width:100px;height:100px;color:#f00;background:#f3f3f3;"><span>{{ propA }}</span></div>'
		template:"<div><span>{{ message }}</span><button @click='showMessage'>查看</button></div>",
		methods:{
			showMessage:function(){
				alert(typeof this.message + '错误条数：'+ this.$errors);

				if(typeof this.message == "number"){
					this.message++;
					console.log(this.message)
				}

			}
		},
		data:function(){
			return {counter:this.message}
		}




	})

	new Vue({
		el:'#example',
		data:{
			msg:'hello!'
		}
	})
*/


}