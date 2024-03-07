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
				console.log(textContent.substring(0, 207) + '...');
				title.textContent = textContent.substring(0, 207) + '...';
			} else {
				console.log(textContent);
			}
		});
	}


})