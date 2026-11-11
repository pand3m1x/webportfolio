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
	},
	amalgamEffect: {
		title: 'Amalgam Effect',
		images: [
			['assets/amalgam_effect/AE-color-updated-LOGO.png', 'Amalgam Effect logo'],
			['assets/amalgam_effect/AE_BLM_tribute_poster.PNG', 'Black Lives Matter tribute poster'],
			['assets/amalgam_effect/AmalgamEffectAlbum_As-we-were_FinalProduct.jpg', 'As We Were album artwork'],
			['assets/amalgam_effect/AmalgamEffectAlbum_As-we-were_Finished.jpg', 'As We Were finished artwork'],
			['assets/amalgam_effect/AmalgamEffectAlbum_Chimera_Finished.jpg', 'Chimera album artwork'],
			['assets/amalgam_effect/AmalgamEffectAlbum_Chimera_Outline.jpg', 'Chimera artwork outline'],
			['assets/amalgam_effect/AmalgamEffectAlbum_TOD_Canvas_All.jpg', 'Tales of Dystopia canvas artwork'],
			['assets/amalgam_effect/AmalgamEffectAlbum_TOD_Canvas_FinalProduct.jpg', 'Tales of Dystopia finished canvas artwork'],
			['assets/amalgam_effect/AmalgamEffectLogo_Ink.jpg', 'Amalgam Effect logo ink artwork'],
			['assets/amalgam_effect/Hocus Pocus Draft 2.PNG', 'Hocus Pocus artwork draft'],
			['assets/amalgam_effect/Hocus_Pocus_V2.png', 'Hocus Pocus finished artwork'],
			['assets/amalgam_effect/Sketches.png', 'Amalgam Effect artwork sketches'],
			['assets/amalgam_effect/Sketches_Album.jpg', 'Album artwork sketches']
		]
	},
	dakotaSlim: {
		title: 'Dakota Slim',
		images: [
			['assets/DTK/DTK You Know.PNG', 'You Know cover artwork'],
			['assets/DTK/You Know draft.PNG', 'You Know artwork draft'],
			['assets/DTK/You Know Draft 3.PNG', 'You Know artwork draft 3'],
			['assets/DTK/You know Draft 2.PNG', 'You Know artwork draft 2'],
			['assets/DTK/DTK Hooptie.JPG', 'Hooptie cover artwork'],
			['assets/DTK/Hooptie first draft.JPG', 'Hooptie artwork first draft'],
			['assets/DTK/Hooptie 2nd draft.JPG', 'Hooptie artwork second draft'],
			['assets/DTK/Hooptie 3rd draft.PNG', 'Hooptie artwork third draft'],
			['assets/DTK/DTK For the Gram.JPG', 'For the Gram artwork'],
			['assets/DTK/DTK MP3.PNG', 'Dakota Slim MP3 artwork'],
			['assets/DTK/Sunset DTK.JPG', 'Dakota Slim at sunset']
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
