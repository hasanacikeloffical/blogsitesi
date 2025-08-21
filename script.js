	document.addEventListener('DOMContentLoaded', function() {
		// h1 animasyonu: yukarıdan aşağıya fade-in
		const h1 = document.querySelector('h1');
		if (h1) {
			h1.style.opacity = '0';
			h1.style.transform = 'translateY(-40px)';
			h1.style.transition = 'opacity 1s, transform 1s';
		}

		// h3 animasyonu: sağdan sola fade-in
		const h3 = document.querySelector('h3');
		if (h3) {
			h3.style.opacity = '0';
			h3.style.transform = 'translateX(40px)';
			h3.style.transition = 'opacity 1s, transform 1s';
		}

		// img animasyonu: büyüyerek ve fade-in ile görünme
		const img = document.querySelector('img');
		if (img) {
			img.style.opacity = '0';
			img.style.transform = 'scale(0.8)';
			img.style.transition = 'opacity 1s, transform 1s';
		}

		// Hepsi aynı anda başlasın
		setTimeout(() => {
			if (h1) {
				h1.style.opacity = '1';
				h1.style.transform = 'translateY(0)';
			}
			if (h3) {
				h3.style.opacity = '1';
				h3.style.transform = 'translateX(0)';
			}
			if (img) {
				img.style.opacity = '1';
				img.style.transform = 'scale(1)';
			}
		}, 100);
	});
