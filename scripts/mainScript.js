chrome.storage.local.get(['categories'], ({categories}) => {

  var href = window.location.href

  var browser = new Browser('.pinning-header > .pinning-header-container', 'Catégories', 'Extension')
	var menu = new Menu(browser, categories)
	var title = new Title('.pinning-header > .pinning-header-container .title', categories)


	/* Observing changes in the header to avoid double browser */
	const targetNode = document.querySelector(".pinning-header-container")
	const observerOptions = {
	  childList: true,
	  attributes: true,
	  subtree: true
	}
	const observer = new MutationObserver(callback)
	observer.observe(targetNode, observerOptions)
	function callback(mutationList, observer) {
	  mutationList.forEach((mutation) => {
	  	if(mutation.type === 'childList'){
	  		addedNode = Array.from(mutation.addedNodes).find(item => item.nodeType === Node.ELEMENT_NODE)
	  		//if(addedNode) console.log({'addedNode': addedNode, 'closest': addedNode.closest('.aro-gallery-header:not(.wks-browser)')})
	  		if(addedNode && (addedNode.closest('.aro-gallery-header:not(.wks-browser)') !== null || addedNode.className === "sub-header")){
	  			if(addedNode.id !== "wks-categories" && addedNode.id !== "wks-title" && addedNode.id !== "wks-menu"){
	  				if(document.querySelector('.wks-browser')){
	  					document.querySelector('.wks-browser').remove()
	  				}
	  			}
	  		}
	  		if(document.querySelectorAll('#wks-categories').length > 1){
	  			document.querySelector('#wks-categories').remove()
	  		}
	  	}
	  });
	}

	window.addEventListener('load', main, { once: true })
	main()

	document.body.addEventListener('click', function(event){

		window.requestAnimationFrame(() => {
	    	if(window.location.href !== href){
	    		href = window.location.href
	    		main()
	    	}
	    })

		if(event.path.some(item => item.id === 'wks-categories')) menu.createDOM()
		else menu.removeDOM()
	})

	function main(){

		if(window.location.pathname == '/browse'){
			generateBrowserMenuTitle('Catégorie', null, null)
		}
		else if(window.location.pathname.includes('/browse/genre')){
			let code = window.location.pathname.split('/')[3]
			if(categories.some(item => item.code === code)){
				generateBrowserMenuTitle(null, code, code)
			}
			else{
				let categorieExist = false
				categories.forEach(categorie => {
					if(categorie.sub.some(item => item.code === code)){
						generateBrowserMenuTitle(null, categorie.code, code)
						categorieExist = true
					}
				})
				if(!categorieExist){
					browser.removeDOM()
				}
			}
		}
		else{
			browser.removeDOM()
		}

	}

	function generateBrowserMenuTitle(genreTitle, parentCode, code){
		browser.genreTitle = genreTitle
		browser.createDOM()

		title.code = code
		title.createDOM()

		menu.parentCode = parentCode
	}
})