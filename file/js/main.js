/*
	Created by Kevin Parra - KP Portafolio 2019.
*/
(function() {

	window.onload = init();

	function init() {
		console.log("%c Created by Kevin Parra: https://github.com/kevinP666","color: #fff; font-size: 0.9rem; background: #333;");
		effectMouse();
		openSectioContact();
		openMenuResponsive();


	}

	// Función de efecto del mouse
	function effectMouse() {
		const cursor = document.querySelector('.cursor'),
			  tagLink = document.getElementsByTagName('a'),
			  sliderProjects = document.querySelectorAll('.slider-projects');
		
		for (var x = 0; x < sliderProjects.length; x++) {
        	sliderProjects[x].addEventListener('mouseover', (e) =>{
        		cursor.classList.add('cursor-mover');
        		document.body.style.cursor = 'e-resize';
        		document.addEventListener('mousemove', e => {
		            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
		        });
		        this.addEventListener('mouseout', () => {
		        	cursor.classList.remove('cursor-mover');
        		document.body.style.cursor = 'default';
		        });
        	});
        }
	}
	
	/* Abrir sección de contacto */
	function openSectioContact() {
		var buttonContact = document.querySelector('#btn-contact'),
			boxBehindContact = document.querySelector("#box-behind-contact"),
			sectionContact = document.querySelector('#section-contact'),
			closeContact = document.querySelector('#close-contact');

		buttonContact.addEventListener('click', () => {
			boxBehindContact.classList.add('active');
			setTimeout(() => { sectionContact.classList.add('active'); }, 300);
			setTimeout(() => { closeContact.classList.add('active') }, 1000);
		});

		closeContact.addEventListener('click', () => {
			sectionContact.classList.remove('active');
			setTimeout(() => {
				boxBehindContact.classList.remove('active');
				closeContact.classList.remove('active');
		}, 300);
		});
	}

	// Abrir menú responsive max-width: 700px
	function openMenuResponsive() {
		var button_open_menu_responsive = document.querySelector('#button-open-menu-responsive'),
			menu_responsive = document.querySelector('#menu-responsive'),
			option_menu_responsive = document.querySelectorAll('.option-menu-responsive'),
			close_menu_responsive = document.querySelector('#close-menu-responsive'),
			box_behind_menu_responsive = document.querySelector('#box-behind-menu-responsive');


		var closes__menu = [
			close_menu_responsive,
			option_menu_responsive[0],
			option_menu_responsive[1],
			option_menu_responsive[2]
		];

		button_open_menu_responsive.addEventListener('click', () => {
			box_behind_menu_responsive.classList.add('active');
			setTimeout(() => {
				menu_responsive.classList.add('active');
				setTimeout(() => {
					close_menu_responsive.classList.add('active');
				}, 500);
			}, 300);
		});

		for (var i = 0; i < closes__menu.length; i++) {
			closes__menu[i].addEventListener('click', () => {
				menu_responsive.classList.remove('active');
				setTimeout(() => {
					box_behind_menu_responsive.classList.remove('active');
					close_menu_responsive.classList.remove('active');
				}, 300);
			});
		}
	}

}());