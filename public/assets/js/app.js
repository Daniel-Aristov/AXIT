const tabsBtn   = document.querySelectorAll(".tab-btn");
const tabsItems = document.querySelectorAll(".tab-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
	item.addEventListener("click", function() {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		if(!currentBtn.classList.contains('active') ) {
			tabsBtn.forEach(function(item) {
				item.classList.remove('active');
			});

			tabsItems.forEach(function(item) {
				item.classList.remove('active');
			});

			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
	});
}

document.querySelector('.tabs__nav-btn').click();
