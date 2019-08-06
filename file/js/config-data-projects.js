/*
	Created by Kevin Parra - KP Portafolio 2019.
*/
function config_data_project(DB_DATA_PROJECT) {
	
	var DATA_WEB = DB_DATA_PROJECT,
		container_cards = document.querySelector('#container-card-projects'),
		index = 0;

	var view_full_project = document.querySelector('#view-full-project'),
		content_view_full_project = document.querySelector('#content-view-full-project'),
		box_behind_view_full_project = document.querySelector('#box-behind-view-full-project'),
		button_close_view_full_project = document.querySelector('#button-close-view-full-project');

	var name_view_full_project = document.querySelector('#name-view-full-project'),
		description_view_full_project = document.querySelector('#description-view-full-project'),
		year_view_full_project = document.querySelector('#year-view-full-project'),
		content_images_view_full_project = document.querySelector('#container-image-view-full-project');

	// Agregar cada proyecto
	for (index; index < DATA_WEB.length; index++) {
		container_cards.innerHTML += '<div class="col-md-6">' + '<div class="card-project card-project-web" key="' + DATA_WEB[index].key + '">' + '<div class="card-project-image">' + '<img src="' + DATA_WEB[index].viewImageCardBox() + '">' + '</div>'+ '<div class="card-project-body">' + '<h5 class="title">' + DATA_WEB[index].name + '</h5>' + '<p class="txt">' + DATA_WEB[index].tags + '</p>' + '</div>' + '</div>' + '</div>';
	}

	// Agregar clase a card para el padding top.
	var card = document.querySelectorAll('.card-project');
	for (var i = 0; i < card.length; i+=2) {
		card[i].classList.add("pd");
	} 

	// Agregar evento click a cada proyecto para abri su descripción
	for (var x = 0; x < card.length; x++) {
		card[x].addEventListener('click', function() {
			box_behind_view_full_project.classList.add('active');
			setTimeout(() => {
				view_full_project.classList.add('active');
				setTimeout(() => { content_view_full_project.classList.add('active'); }, 300);
			}, 300);
			var index_key = this.getAttribute('key'),
				name_project = DATA_WEB[index_key].name,
				description_project = DATA_WEB[index_key].description,
				year_project = DATA_WEB[index_key].year;
				images = DATA_WEB[index_key].images;

			name_view_full_project.innerHTML = name_project;
			description_view_full_project.innerHTML = description_project;
			year_view_full_project.innerHTML = year_project;

			for (w = 0; w < images.length; w++) {
				var tagImg = document.createElement('img');
					tagImg.src = images[w];
					tagImg.setAttribute('class', 'image-view-project-full');

				content_images_view_full_project.appendChild(tagImg);
			}

		});
	}

	// Evento click para cerrar descripción
	button_close_view_full_project.addEventListener('click', () => {
		view_full_project.classList.remove('active');

		var images_view_project = document.querySelectorAll(".image-view-project-full");

		for (var i = 0; i < images_view_project.length; i++) {
			images_view_project[i].parentNode.removeChild(images_view_project[i]);
		}

		setTimeout(() => {
			box_behind_view_full_project.classList.remove('active');
			content_view_full_project.classList.remove('active');
		}, 300);
		
	});



};