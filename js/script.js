document.addEventListener('DOMContentLoaded', () => {

	// // Tabs
	const tabContents = document.querySelectorAll('.tab-content');

	tabContents.forEach(content => {
		const tabItems = content.querySelectorAll('.tab-item');
		const tabContentInfos = content.querySelectorAll('.tab-content__info');

		function filterTabContent(id) {
			tabContentInfos.forEach((info, idx) => {
				if (idx !== id) {
					info.classList.add('hide');
					info.classList.remove('show');
				} else {
					info.classList.remove('hide');
					info.classList.add('show');
				}
			})
		}
		filterTabContent(0);
		tabItems.forEach((item, idx) => {
			item.addEventListener('click', () => {
				filterTabContent(idx);
				tabItems.forEach((btn, btnId) => {
					if (btnId !== idx) {
						btn.classList.remove('active');
					} else {
						btn.classList.add('active');
					}
				})
			})

		})
	})

	const tabHeaderItems = document.querySelectorAll('.tab-header__item');
	const tabContentChild = document.querySelectorAll('.tab-content__two');
	function filterTabContent(id) {
		tabContentChild.forEach((content, idx) => {
			if (idx !== id) {
				content.classList.add('hide');
				content.classList.remove('show');
			} else {
				content.classList.remove('hide');
				content.classList.add('show');
			}
		})
	}
	tabHeaderItems.forEach((item, idx) => {
		item.addEventListener('click', () => {
			filterTabContent(idx);
			tabHeaderItems.forEach((btn, btnId) => {
				if (btnId !== idx) {
					btn.classList.remove('active');
				} else {
					btn.classList.add('active');
				}
			})
		})
	})


	// Swiper
	var swiper = new Swiper(".news-swiper", {
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		loop: true,
	});

	// 
	const swiperInfo = document.querySelectorAll('.swiper-slide__info');
	const windowWidth = window.innerWidth;

	if (windowWidth <= 960) {
		swiperInfo.forEach(title => {
			const textContent = title.textContent.trim();
			if (textContent.length > 207) {
				title.textContent = textContent.substring(0, 207) + '...';
			}
		});
	}
	// modal
	document.querySelectorAll('.open-modal').forEach(element => {
		element.addEventListener('click', function () {
			document.querySelector('.parent-modal').classList.add('show');
		});
	})

	// document.querySelector('.modal-close').addEventListener('click', function () {
	// 	document.querySelector('.parent-modal').classList.remove('show');
	// });

	document.querySelector('.modal__close-two').addEventListener('click', function () {
		document.querySelector('.parent-moda-two').classList.remove('show');
	});

	document.querySelector('.modal').addEventListener('click', function (e) {
		if (e.target === this) {
			document.querySelector('.parent-modal').classList.remove('show');
			document.querySelector('.parent-moda-two').classList.remove('show');
		}
	});

	function validateEmail(email) {
		var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	document.getElementById('submit').addEventListener('click', function (e) {
		e.preventDefault();

		var formFields = ['name', 'phone', 'email', 'address']; // Update 'adress' to 'address'
		var clickTime = new Date().getTime();
		var allFieldsFilled = true;

		for (var i = 0; i < formFields.length; i++) {
			var field = document.getElementById(formFields[i]);
			var value = field.value.trim();

			if (value === "") {
				field.classList.add('danger');
				document.querySelector('.send-data').classList.add('danger')
				allFieldsFilled = false;
			} else {
				field.classList.remove('danger');
				document.querySelector('.send-data').classList.remove('danger')
			}
		}

		// Email uchun validatsiya
		var emailField = document.getElementById('email');
		var emailValue = emailField.value.trim();
		if (!validateEmail(emailValue)) {
			emailField.classList.add('danger');
			this.classList.add('danger')
			allFieldsFilled = false;
		} else {
			emailField.classList.remove('danger');
			this.classList.add('danger')
		}

		if (allFieldsFilled) {
			var currentTime = new Date().getTime();
			if (currentTime - clickTime < 1000) {
				document.querySelector('.parent-modal').classList.remove('show');
				document.querySelector('.parent-moda-two').classList.add('show');
				document.querySelector('.send-data').classList.remove('danger')
				document.querySelectorAll('input, textarea').forEach(function (element) {
					element.value = '';
				});
			}
		}
	});

})