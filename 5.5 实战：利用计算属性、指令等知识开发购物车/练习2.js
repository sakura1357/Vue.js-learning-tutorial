var app = new Vue({
	el: '#app',
	data: {
		goods_list:[
		{
			category:"电子产品",
			list:[
			{
				id: 1,
				name: 'iPhone 7',
				price: 6188,
				count: 1
			},
			{
				id: 2,
				name: 'iPad Pro',
				price: 5888,
				count: 1
			},
			{
				id: 3,
				name: 'Macbook Pro',
				price: 21488,
				count: 1
			},
			]
		},
		{
			category:"生活用品",
			list:[
			{
				id: 1,
				name: '牙膏',
				price: 15,
				count: 1
			},
			{
				id: 2,
				name: '毛巾',
				price: 10,
				count: 2
			}
			]
		},
		{
			category: "果蔬",
			list:[
			{
				id: 1,
				name: '西红柿',
				price: 3,
				count: 1
			},
			{
				id: 2,
				name: '香蕉',
				price: 6,
				count: 3
			}
			]
		}
		],
	},
	methods: {
		handleReduce:function(index){
			if (this.list[index].count === 1) return;
			this.list[index].count--;
		},
		handleAdd:function(index){
			this.list[index].count++;
			},
		handleRemove:function(index){
			// slice() 方法可从已有的数组中返回选定的元素。
			// splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。注释：该方法会改变原始数组。
			// 注释：请注意，splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改。
			this.list.splice(index, 1);
		}
	},
	computed: {
		// 计算购物车所有商品的总价格
		totalPrice:function(){
			var total = 0;
			for (var i = 0; i < this.goods_list.length; i++){
				for (var j = 0; j < this.goods_list[i]['list'].length ; j++){
					var item = this.goods_list[i]['list'][j];
					total += item.price * item.count;
				}
			}
			//将总价格用千位分隔符转换
			return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
		}
	}
})