class Title {

	/**
	 * @constructs Title
	 * @params { Object } object List of the items in the menu
	 * @params { Integer } code The code of the parent category in the object (null if not)
	 */
	constructor(parentElementDOM, object, code = null, id="wks-title"){
		this.parentElementDOM = parentElementDOM
		this.object = object
		this.code = code
		this.id = id
	}

	/**
	 * Set URL of the parent category
	 * 
	 * @return { String } url The relative URL of the parent category, null if the URL don't match anything
	 */
	setUrl(){
		if(this.object.some(item => item.code === this.code)) return '/browse'
		var url = null
		this.object.forEach(categorie => {
			if(categorie.sub.some(item => item.code === this.code)){
				url = `/browse/genre/${categorie.code}`
			}
		})
		return url
	}

	/**
	 * Set the title of the parent category
	 * 
	 * @return { String } title The title of the parent category, null if the URL don't match anything
	 */
	setTitle(){
		if(this.object.some(item => item.code === this.code)) return 'Accueil'
		var title = null
		this.object.forEach(categorie => {
			if(categorie.sub.some(item => item.code === this.code)){
				title = categorie.name
			}
		})
		return title
	}

	/**
	 * Create the title in the DOM
	 * 
	 * @return { Boolean } success True if the element could be create, false if not
	 */
	createDOM(){
		if(this.code === null || this.setUrl() === null){
			this.removeDOM()
			return false
		}
		let parentElement = document.querySelector(this.parentElementDOM)
		if(parentElement){
			if(parentElement.children[0] && parentElement.children[0].id !== this.id) return false
			parentElement.innerHTML = this.create()
			return true
		}
		return false

	}

	/**
	 * Remove the title in the DOM
	 * 
	 * @return { Boolean } success True if the element could be remove, false if not
	 */
	removeDOM(){
		let parentElement = document.querySelector(this.parentElementDOM)
		if(parentElement){
			parentElement.innerHTML = ''
			return true
		}
		return false
	}

	/**
	 * Create the title element
	 * 
	 * @return { String } menu String that contains the HTML elements of the menu
	 */
	create(){
		return `
			<div class="breadCrumbs" id="${this.id}">
				<ul>
					<li>
						<a href="${this.setUrl()}">${this.setTitle()}</a>
					</li>
				</ul>
			</div>`
	}
}
