window.onload = function(){

	//使用自定义事件的表单输入组件
	//让组件的 v-model 生效，它必须：1.接受一个 value 属性； 2.在有新的 value 时触发 input 事件 

	//将组件里面的input标签里面的value值通过onInput方法，并由$emit(event,[args])触发将值传到组件v-model="message"中，
	//通过双向绑定的功能将值赋予message，即message默认值hello将会随之改变
	
	//input里面未改变时的默认值是通过父组件props[]方式赋值而来
	
	//组件中的p标签为作用域的验证，当在html中 这样写 ( <my-input label="Message" v-model="message">{{ message }}</my-input> )
	//不会进行解析，父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译。
	//故要用下面的方式才正确，html中不应该这加{{message}}
	Vue.component('my-input', {
	  template: '\
	    <div class="form-group">\
	      <label v-bind:for="randomId">{{ label }}:</label>\
	      <input v-bind:id="randomId" v-bind:value="value" v-on:input="onInput">\
	      <p >{{message}}</p>\
	    </div>\
	  ',
	  props: ['label', 'value'], //此处的value为组件父级v-model="message"双向绑定传过来的,即value的值为 hello;
	  							 //	label同样为组件父级label="Message"传过来的，即label的值为Message;
	  data: function () {
	    return {
	      randomId: 'input-' + Math.round(Math.random()*10),
	      message:'aaa'
	    }
	  },
	  methods: {
	    onInput: function (event) {
	      this.$emit('input', event.target.value)  //此处的event.target.value为input里面的value,实时监听并
	    }
	  },
	})



	new Vue({
	  el: '#demo',
	  data: {
	    message: 'hello'
	  }
	})






}