const modal = $.modal({
	title: 'Modal modal',
	closable: true,
	content: `
		<h2>Modal is working</h2>
		<p>qwrty qwrty qwerty qerty</p>
		`,
	width: '400px',
	footerButtons: [
		{
			text: 'Ok', type: 'primary', handler() {
				console.log('Primary btn clicked');
			}
		},
		{
			text: 'Cancel', type: 'danger', handler() {
				console.log('Danger btn clicked');
			}
		}
	]
});
modal.open()
