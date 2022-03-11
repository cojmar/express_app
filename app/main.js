new class {
	constructor() {
		this.init_dom()
	}
	init_dom() {
		document.getElementById('sendButton').onclick = () => {
			let data = JSON.parse(document.getElementById('dataToSend').value)
			this.server_call(data).then(response => document.getElementById('dataGot').value = JSON.stringify(response, null, 2))
		}
	}
	async server_call(data = {}) {
		const response = await fetch(window.location.href, {
			method: 'POST',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		return response.json()
	}
}