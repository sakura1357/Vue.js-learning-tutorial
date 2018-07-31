
function isValueNumber(value){
	return(/(^-?[0-9]+\.{1}\d+$))|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '');
}
Vue.component('input-number', {
	template: '\
		<div class="input-number">\
			<input type="text" :value="currentValue" @change="handleChange"/>\
			<button @click="handleDown" :disabled="currentValue <= min">-</button>\
			<button @click="handleUp" :disabled="currentValue >= max">+</button>\
		</div>',
	props: {
		max: {
			type: Number,
			default: Infinity
		},
		min: {
			type: Number,
			default: -Infinity
		},
		value: {
			type: Number,
			default: 0
		}
	},
	data: function() {
		return {
			currentValue: this.value  
		}
	},
	// 监听（watch）选项，用来监听某个prop或者data的改变，当它们发生变化时，就会触发watch配置的函数，从而完成我们的业务逻辑。
	watch: {
		currentValue: function(val){
			this.$emit('input', val);
			this.$emit('on-change', val);
		},
		value: function(val){
			this.updateValue(val);
		}
	},
	methods: {
		handleDown:function(){
			if (this.currentValue <= this.min) return;
			this.currentValue -= 1;
		},
		handleUp:function(){
			if (this.currentValue >= this.max) return;
			this.currentValue += 1;
		},
		handleChange:function(event){
			var val = event.target.value.trim();
			var max = this.max;
			var min = this.min;
			if (isValueNumber(val)) {
				val = Number(val);
				this.currentValue = val;

				if (val > max) {
					this.currentValue = max;
				}else if(val < min){
					this.currentValue = min;
				}
			}else {
				event.targe.value  = this.currentValue;
			}
		},
		updateValue: function(val){
			if (val > this.max ) val = this.max;
			if (val < this.max ) val = this.min;
			this.currentValue = val;

		}
	},
	mounted: function(){
		this.updateValue(this.value);
	}
});
