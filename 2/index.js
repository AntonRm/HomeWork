const modal = $.modal({
	title: 'Modal Window',
	closable: true,
	content: `
		<h4>Modal is working</h4>
		<p>qwrty qwrty qwerty qerty</p>
		`,
	width: '400px',
});
modal.open()

