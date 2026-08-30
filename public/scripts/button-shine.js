(function () {
	'use strict';

	var SHINE_SELECTOR = [
		'.btn-buy',
		'.btn',
		'.cart-btn',
		'.activity-btn',
		'.reviews-index__link-btn',
		'.review-detail__link-btn',
		'.pricing-showcase__cart',
		'.features-detail__pricing-link',
		'.pricing-showcase__plan',
		'.pricing-showcase__play',
		'.pricing-showcase__thumb',
		'.product__plan',
		'.product__play',
		'.alt-link',
	].join(', ');

	function setGlowPosition(el, clientX, clientY) {
		var rect = el.getBoundingClientRect();
		var x = clientX - rect.left;
		var y = clientY - rect.top;
		el.style.setProperty('--glow-x', x + 'px');
		el.style.setProperty('--glow-y', y + 'px');
	}

	function bindShine(el) {
		if (el.dataset.glowBound === '1') return;
		el.dataset.glowBound = '1';
		if (!el.classList.contains('btn-buy')) {
			el.classList.add('btn-glow');
		}

		el.addEventListener('pointerenter', function (event) {
			setGlowPosition(el, event.clientX, event.clientY);
		});

		el.addEventListener('pointermove', function (event) {
			setGlowPosition(el, event.clientX, event.clientY);
		});

		el.addEventListener('pointerdown', function (event) {
			setGlowPosition(el, event.clientX, event.clientY);
		});

		el.addEventListener('pointerleave', function () {
			el.style.removeProperty('--glow-x');
			el.style.removeProperty('--glow-y');
		});
	}

	function init() {
		document.querySelectorAll(SHINE_SELECTOR).forEach(bindShine);
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
