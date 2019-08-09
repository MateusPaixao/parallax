/*Main JS*/

function moveLayer(event) {
	const layers = document.querySelectorAll('.layer_parallax')
	const { clientX, clientY } = event

	// layers[6].style.top = `calc(50% - ${(clientY / 50)}px)`
	// layers[6].style.left = -(clientX / 300) +'px'

	layers[5].style.top = `calc(50% - ${(clientY / 30)}px)`
	layers[5].style.left = (clientX / 200) +'px'

	layers[4].style.top = `calc(50% - ${(clientY / 50)}px)`
	layers[4].style.left = (clientX / 100) +'px'

	layers[3].style.top = `calc(50% - ${(clientY / 50)}px)`
	layers[3].style.left = (clientX / 400) +'px'

	layers[2].style.top = `calc(50% - ${(clientY / 50)}px)`
	layers[2].style.left = -(clientX / 400) +'px'

	layers[2].style.top = `calc(50% - ${(clientY / 30)}px)`
	layers[2].style.left = -(clientX / 500) +'px'

	layers[1].style.top = `calc(50% - ${(clientY / 20)}px)`
	layers[1].style.left = (clientX / 500) +'px'

	layers[0].style.top = `calc(50% + ${(clientY / 50)}px)`
	layers[0].style.left = -(clientX / 600) +'px'
}


document.addEventListener("mousemove", _.debounce((event) => moveLayer(event), 5) )