window.onload = function(){

	//使用事件监听

	var myHeaderChild = {
		template:'<div><p>This is my header {{childData}} children !</p><button @click="addStr">emit</button> <button @click="reset">reset</button></div>',
		data(){
			return {
				childData:'children\'s'
			}
		},
		methods:{
			addStr(){
				this.$emit('header-child',this.childData)
			},
			reset(){
				this.$emit('header-child-null')
			}
		}
	}



	var myHeader = {
		template:'<p>This is my header !<myHeaderChild  @header-child="getdata" @header-child-null = "clear"></myHeaderChild></p>',
		components:{
			myHeaderChild
		},
		methods:{
			getdata(arg){
				this.$emit('header-parent',arg+' other')
			},
			clear(){
				this.$emit('header-parent-null')
			}
		}
	}


	new Vue({
		el:"#demo",
		data:{
			myValue:'hello',
			myBox:[],
			myBoxRa:'',
			mySelection:''
		},
		components:{
			myHeader
		},
		watch:{  //事件监听
			myValue(val,oldval){
				console.log(val + ' '+ oldval)
			}
		},
		computed:{
			myValueWithoutNum(){
				return this.myValue.replace(/\d/g,'')
			}
		},
		methods:{
			getchilddata(arg){
				this.myValue = arg	
			},
			clear(){
				this.myValue = 'hello!'
			}
		}
	})


}