window.onload = function(){

	//用get()做一个小的测试  交互需要在后台操作  此处用get()只能从后台获取数据   但是请求参数无反应
	
	new Vue({
		el:"#demo",
		data:{
			a:1,
			b:2
		},
		methods:{
			get:function(){
				this.$http.get('./get.php',{a:2,b:1}).then(function(res){
					alert(res.data + 'aaa')
				},function(err){
					alert(err.status)
				})
			}
		}
	})


	//用post()做一个小的测试  交互需要在后台操作  注意接收用 $_POST
/*	
	new Vue({
		el:"#demo",
		data:{
			a:1,
			b:2
		},
		methods:{
			get:function(){
				this.$http.post('./get.php',{a:20,b:1},{emulateJSON:true}).then(function(res){
					alert(res.body + 'aaa')
				},function(err){
					alert(err.status)
				})
			}
		}
	})
*/
	
	//用jsonp()做一个小的测试  交互需要在后台操作  注意接收用 $_POST

/*	new Vue({
		el:"#demo",
		data:{

		},
		methods:{
			get:function(){
				this.$http.jsonp('https://sug.so.360.cn/suggest',{word:'a'},{emulateJSON:true}).then(function(res){
					alert(res.data.s)
				},function(err){
					alert(err.status)
				})
			}
		}
	})
*/

/*
	new Vue({
		el:"#demo",
		data:{

		},
		methods:{
			get:function(){
				this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
						wd:'a'
					},{
						jsonp:'cb'
					}).then(function(res){
					//alert(res.data)
					console.log(111)
				},function(err){
					alert(err.status)
				})
			}
		}
	})

*/
}