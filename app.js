const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			confirmedName: '',
		};
	},

	methods: {
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
		},
		setName(e, lastName) {
			this.name = e.target.value + ' ' + lastName;
		},
		confirmInput() {
			this.confirmedName = this.name;
		},
		submitForm(e) {
			e.preventDefault();
			alert('Submitted!');
		},
	},
});

app.mount('#events');