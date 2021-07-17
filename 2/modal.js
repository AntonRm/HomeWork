function _createModal(options) {
	const modal = document.createElement('div');
	modal.classList.add('modal');
	modal.insertAdjacentHTML('afterbegin', `
	<div class="modal-overlay">
		<div class="modal-window">
			<div class="modal-header">
				<span class="modal-title">Modal title</span>
				<span class="modal-close">&times;</span>
			</div>
			<div class="modal-body">
				<p>Lorem ipsum dolor sit.</p>
				<p>Lorem ipsum dolor sit.</p>
			</div>
			<div class="modal-footer">
				<button>Ok</button>
				<button>Cansel</button>
			</div>
		</div>
	</div>
	`);
	document.body.appendChild(modal);
	return modal;
}



$.modal = function (options) {
	const ANIMATION_SPEED = 200;
	const $modal = _createModal(options);
	let closing = false;



	return {
		open() {
			!closing && $modal.classList.add('open');

			const modaClose = document.querySelector('.modal-close');
			modaClose.addEventListener('click', this.close);
			const modalOverlay = document.querySelector('.modal-overlay');
			modalOverlay.addEventListener('click', (e) => {
				if (e.target == modalOverlay) this.close();
			});
		},
		close() {
			closing = true;
			$modal.classList.remove('open');
			$modal.classList.add('hide');
			setTimeout(() => {
				$modal.classList.remove('hide');
				closing = false;
			}, ANIMATION_SPEED);
		},
		destroy() {
			document.body.removeChild($modal);
		},
		addTitle(text) {
			let modalTitle = document.querySelector('.modal-title');
			modalTitle.textContent = text;
		},
	}
}
