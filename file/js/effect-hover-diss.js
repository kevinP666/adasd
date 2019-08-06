/*
	Created by Kevin Parra - KP Portafolio 2019.
*/
(function () {

	window.onload = hoverEffectImage();

	// Efecto hover image
	function hoverEffectImage() {
		var content = document.querySelector('#image-about-me');
		// Verificando si existe la etiquite con dicho id
		if (content != null || content != 'null') {
			new hoverEffect({
				parent: content,
				intensity: 0.2,
				image1: "https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
				image2: "https://images.pexels.com/photos/1024613/pexels-photo-1024613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
				displacementImage: "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/heightMap.png"
			});
		} else {
			console.log('id image-about-me no se encuentra en esté documento.');

		} 
	}

}());