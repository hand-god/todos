(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var vm = new Vue({
		el: "#app",
		data: {
			list: [{
					text: '吃饭',
					status: true
				},
				{
					text: '睡觉',
					status: false
				},
				{
					text: '打豆豆',
					status: false
				}
			],
			newText: '',
			editList: '',
			listStaus: 'all'
		},
		methods: {
			// delList(index) {
			// 	this.list.splice(index, 1);
			// }
			addList() {
				if (this.newText.trim() == '') {
					console.log('不能为空');
					this.newText = ''
					return
				}
				this.list.push({
					text: this.newText,
					status: false
				})
				this.newText = ''
			},
			isShow(valueStatus) {
				switch (this.listStaus) {
					case 'all':
						return true
						break;
					case 'active':
						return !valueStatus
						break;
					case 'completed':
						return valueStatus
					default:
						return true
						break;
				}
			}
		},
		computed: {
			// checkAll() {
			// 	var temList = this.list.filter(value => {
			// 		// return value.status == false
			// 		return !value.status
			// 	})
			// 	// console.log(temList.length)
			// 	// return temList.length == 0 ? true : false
			// 	// return !temList.length ? true : false
			// 	return !temList.length
			// }
			checkAll: {
				// 设置
				set(newValue) {
					// console.log(newValue);
					this.list.forEach(v => {
						v.status = newValue
					});
				},
				// 获取
				get() {
					var temList = this.list.filter(value => {
						// return value.status == false
						return !value.status
					})
					// console.log(temList.length)
					// return temList.length == 0 ? true : false
					// return !temList.length ? true : false
					return !temList.length
				}
			}
		},
		updated() {
			localStorage.setItem('todoList', JSON.stringify(this.list))
		},
		mounted() {
			if (!localStorage.getItem('todoList')) {
				return
			}
			this.list = JSON.parse(localStorage.getItem('todoList'))
		}
	})
})(window);
