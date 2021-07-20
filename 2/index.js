const modal = $.modal({
	title: 'Modal modal',
	closable: true,
	content: `
		<h2>Modal is working</h2>
		<p>qwrty qwrty qwerty qerty</p>
		`,
	width: '400px',
});
modal.open()
