new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	grabCursor: true,
	touchRatio: 1,
})

const listNav = document.querySelectorAll('header li a')
const navBtn = document.querySelector('.nav-btn')

listNav.forEach(links => {
	links.addEventListener('click', e => {
		e.preventDefault()
		const blockId = e.target.getAttribute('href').substr(1)
		const scrollSection = document.getElementById(blockId)
		scrollSection.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
})

navBtn.addEventListener('click', e => {
	e.preventDefault()
	const contact = document.getElementById('contact')
	contact.scrollIntoView({
		behavior: 'smooth',
		block: 'center',
	})
})
