document.addEventListener('DOMContentLoaded', () => {

	// // Tabs
	const tabContents = document.querySelectorAll('.tab-content');
	const tabItems = document.querySelectorAll('.tab-item');
	const tabContentInfos = document.querySelectorAll('.tab-content__info');

	function hideTabContent() {
		tabItems.forEach(item => item.classList.remove('active'));
		tabContentInfos.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show');
		});
	}

	function showTabContent(index = 0) {
		tabItems[index].classList.add('active');
		tabContentInfos[index].classList.remove('hide')
		tabContentInfos[index].classList.add('show')
	}

	hideTabContent();
	showTabContent();

	tabContents.forEach(content => {
		const tabItemsContainer = content.querySelector('.tab-items');

		tabItemsContainer.addEventListener('click', (e) => {
			const targetItem = e.target.closest('.tab-item');
			if (targetItem) {
				const index = Array.from(tabItems).indexOf(targetItem);
				if (index !== -1) {
					hideTabContent();
					showTabContent(index);
				}
			}
		});
	});

	// Swiper
	var swiper = new Swiper(".news-swiper", {
		slidesPerView: 1,
		spaceBetween: 0,
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

})