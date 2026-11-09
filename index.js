document.getElementById('year').textContent = new Date().getFullYear();

const productGalleries = {
	safetyBadges: {
		title: 'Safety Badges',
		images: [
			['assets/safety_badge_together.jpg', 'Safety badges together'],
			['assets/safety_badge_product_bag.jpg', 'Safety badge product bag'],
			['assets/safety_badge_event.jpg', 'Safety badges at an event'],
			['assets/safety_badge_display.jpg', 'Safety badge display']
		]
	},
	rollingThroughSpace: {
		title: 'Rolling Through Space',
		images: [
			['assets/rolling_through_space_character_tokens.jpg', 'Rolling Through Space character tokens'],
			['assets/rolling_through_space_wood_tokens_1.jpg', 'Rolling Through Space wooden tokens'],
			['assets/rolling_through_space_wood_tokens_2.jpg', 'More Rolling Through Space wooden tokens'],
			['assets/rolling_through_space_mini-badges.jpg', 'Rolling Through Space mini badges'],
			['assets/rolling_through_space_sketches.jpg', 'Rolling Through Space character sketches'],
			['assets/rolling_through_spaces_classes.jpg', 'Rolling Through Space class materials']
		]
	}
};

const galleryDialog = document.querySelector('.product-gallery-dialog');
const galleryTitle = document.getElementById('gallery-title');
const galleryImages = document.getElementById('gallery-images');
const galleryCloseButton = document.querySelector('.gallery-close');

document.querySelectorAll('[data-gallery]').forEach((trigger) => {
	trigger.addEventListener('click', () => {
		const gallery = productGalleries[trigger.dataset.gallery];
		if (!gallery) return;

		galleryTitle.textContent = gallery.title;
		galleryImages.replaceChildren(...gallery.images.map(([src, alt]) => {
			const figure = document.createElement('figure');
			const image = document.createElement('img');
			const caption = document.createElement('figcaption');

			image.src = src;
			image.alt = alt;
			caption.textContent = alt;
			figure.append(image, caption);
			return figure;
		}));

		galleryDialog.showModal();
	});
});

galleryCloseButton.addEventListener('click', () => galleryDialog.close());

galleryDialog.addEventListener('click', (event) => {
	if (event.target === galleryDialog) galleryDialog.close();
});
