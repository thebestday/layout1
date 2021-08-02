// Напишем простенький скрипт - находит кнопку и ослеживает клик по ней
// и когда происходит клик то будет добавлять класс mobile-nav-active
const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

navBtn.addEventListener('click', function(event) {
	event.stopPropagation();
	toggleMobileNav();

})


// будем ловить клик везде кроме навигации - что бы нажал и вышел и режима окна сбоку
// клик по окну за пределами навигации

window.addEventListener('click',function() {
	

	if (body.classList.contains('no-scroll')) {
		toggleMobileNav();
	}

});

// останавливаем клик внутри октрытой мобильной навигации сбоку
mobileNav.addEventListener('click', function(event) {
	event.stopPropagation();
})


function toggleMobileNav() {
	body.classList.toggle('no-scroll');
	navBtn.classList.toggle('nav-button-close');
	mobileNav.classList.toggle('mobile-nav-active');
}