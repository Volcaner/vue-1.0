var vm = new Vue({
	el: "#app",
	data: {
		message: "Hello Vue"
	},
	filter: {

	},
	mounted: function(){
		this.changeMessage();
	},
	methods: {
		changeMessage: function(){
			var self = this;

			// self.message = {"aaa": 111}.aaa;

			this.$http.get('data/test.json').then(function(res){  // Ajax is studying
				self.message = res.body.result.aaa;
			});

			// var xmlhttp = new XMLHttpRequest();
			// xmlhttp.onreadystatechange = function() {
			//     self.message = this.responseText;
			// };
			// xmlhttp.open("GET", "data/test.json", true);
			// xmlhttp.send();
		}
	}
});