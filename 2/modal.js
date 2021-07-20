function _createModal(options) {
	const DEFULT_WIDTH = '600px';
	const modal = document.createElement('div');
	modal.classList.add('modal');
	modal.insertAdjacentHTML('afterbegin', `
	<div class="modal-overlay" data-close="true">
		<div class="modal-window" style="width: ${options.width || DEFULT_WIDTH}">
			<div class="modal-header">
				<span class="modal-title">${options.title || 'Окно'}</span>
				${options.closable ? '<span class="modal-close" data-close="true">&times;</span>' : ''}
			</div>
			<div class="modal-body">
				${options.content || ''}
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
	let destroyed = false;


	const mmodal = {
		open() {
			if (destroyed) {
				return console.log('modal is destroyed')
			}
			!closing && $modal.classList.add('open');
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
	}

	const listener = event => {
		if (event.target.dataset.close) {
			mmodal.close();
		}
	}


	$modal.addEventListener('click', listener);

	return Object.assign(mmodal, {
		destroy() {
			$modal.parentNode.removeChild($modal);
			$modal.removeEventListener('click', listener);
			destroyed = true;
		},
		setContent(html) {

		}
	})

	// destroy() {
	// 	document.body.removeChild($modal);
	// },
	// addTitle(text) {
	// 	let modalTitle = document.querySelector('.modal-title');
	// 	modalTitle.textContent = text;
	// },

}
