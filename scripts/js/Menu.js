class Menu {

	/**
	 * @constructs Menu
	 * @params { Browser } browser The browser object parent in the DOM
	 * @params { Object } object List of the items in the menu
	 * @params { Integer } code The code of the parent categorie in the object (null if not)
	 */
	constructor(browser, object, parentCode = null, id="wks-menu"){
		this.browser = browser
		this.object = object
		this.parentCode = parentCode
		this.id = id
	}

	/**
	 * Create the menu in the DOM
	 * 
	 * @return { Boolean } success True if the element could be create, false if not
	 */
	createDOM(){
		this.removeDOM()
		let parentElement = document.querySelector(`#${this.browser.id} .label`)
		if(parentElement){
			parentElement.insertAdjacentHTML('afterend', this.create())

			return true
		}
		return false
	}

	/**
	 * Remove the menu in the DOM
	 * 
	 * @return { Boolean } success True if the element could be remove, false if not
	 */
	removeDOM(){
		let element = document.getElementById(this.id)
		if(element){
			element.remove()
			return true
		}
		return false
	}

	/**
	 * Create the menu element
	 * 
	 * @return { String } menu String that contains the HTML elements of the menu
	 */
	create(){
		var _object = this.object;
		if(this.parentCode !== null){
			_object = this.object.find(item => item.code == this.parentCode).sub
		}
		if(_object){
			let nbRowPerColumns = _object.length > 7 ? (_object.length > 13 ? Math.ceil(_object.length/3) : Math.ceil(_object.length/2)) : _object.length
			let menu = `
			<div role="menu" tabindex="0" class="sub-menu theme-lakira" style="opacity: 1; transition-duration: 150ms;" id='${this.id}'>
				<ul class="sub-menu-list multi-column">`
					_object.forEach((item, index) => {
							menu += `
								<li class="sub-menu-item">
									<a class="sub-menu-link" href="/browse/genre/${item.code}?so=su">${item.name}</a>
								</li>`
						if((index+1) % nbRowPerColumns === 0){
							menu += `
							</ul>
							<ul class="sub-menu-list multi-column">`
						}
					})
				return menu + `
				</ul>
			</div>`
		}
		else return null
	}
}