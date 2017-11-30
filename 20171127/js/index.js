window.onload = function(){

	new Vue({
		el:"#box",
		data:{
			myData:[],
			username:'',
			age:'',
			nowIndex:-100,
			notice:''
		},
		methods:{
			add:function(){
				this.myData.push({
					name:this.username,
					age:this.age
				})
				this.username='';
				this.age='';
			},
			searchIndex:function(index){
				this.nowIndex = index;
			},
			delMsg:function(n){
				if( n==-2 ){
					//this.notice = '确认删除所有吗？';
					this.myData = [];
					
				}else{
					//this.notice = '确认删除吗？';
					this.myData.splice(n,1);
					
					
				}
				
			}
		}
	})
	





}