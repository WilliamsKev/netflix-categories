class Browser {

	/**
	 * @constructs Browser
	 * @params { String } parentElementDOM The name of the parent element in the DOM
	 * @params { String } genreTitle The genreTitle associated with the browser
	 * @params { String } label The label of the browser
	 * @params { STring } id The ID of the element in the DOM 
	 */
	constructor(parentElementDOM, genreTitle, label, id="wks-categories"){
		this.parentElementDOM = parentElementDOM
		this.genreTitle = genreTitle
		this.label = label
		this.id = id
	}

	/**
	 * Create the browser in the DOM
	 * 
	 * @return { Boolean } success True if the element could be create, false if not
	 */
	createDOM(){
		
		this.removeDOM()

		let parentElement = document.querySelector(this.parentElementDOM)
		let prevElement = document.querySelector(`${this.parentElementDOM} .genreTitle`)
		let netflixDefaultBrowser = document.querySelector(`.subgenres:not(#${this.id})`)

		if(netflixDefaultBrowser) this.removeDOM()

		if(parentElement && !netflixDefaultBrowser){	
			if(!this.genreTitle && prevElement){
				prevElement.insertAdjacentHTML('afterend', this.create())
			} 
			else parentElement.insertAdjacentHTML('beforeend', this.create())
			
			return true
		}
		return false
	}

	/**
	 * Remove the browser in the DOM
	 * 
	 * @return { Boolean } success True if the element could be remove, false if not
	 */
	removeDOM(){
		var element

		if(this.genreTitle) element = document.querySelector(`${this.parentElementDOM} .aro-gallery-header`)
		else element = document.getElementById(`#${this.id}`)

		if(element){
			element.remove()
			return true
		}
		return false
	}

	/**
	 * Create the browser element
	 * 
	 * @return { String } browser String that contains the HTML elements of the browser
	 */
	 create(){
	 	if(this.genreTitle) return `
			<div class="aro-gallery-header wks-browser" style="padding: 20px 0">
				<div class="genreTitle"></div>
				<div class="aro-genre-details">
					<span class="genreTitle">${this.genreTitle}</span>
					<div class="subgenres" id="${this.id}">
						<div label="Genres" cols="3" class="nfDropDown theme-lakira">
							<div class="label" role="button" aria-haspopup="true" tabindex="0" aria-expanded="false" aria-labelledby="profileLanguageDropDown-header">${this.label}
								<span class="arrow"></span>
							</div>
						</div>
					</div>
				</div>
			</div>`
		return `
			<div class="subgenres wks-browser" id="${this.id}">
				<div label="Genres" cols="3" class="nfDropDown theme-lakira">
					<div class="label" role="button" aria-haspopup="true" tabindex="0" aria-expanded="false" aria-labelledby="profileLanguageDropDown-header">${this.label}
						<span class="arrow"></span>
					</div>
				</div>
			</div>`
	 }
}