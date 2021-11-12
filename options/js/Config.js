class Config{

  constructor(){
    this.categories = this.getCategories()
    this.newCategories = null
  }

  getCategories(){
    let categories = new Object()
    chrome.storage.sync.get(null, (items) => {
      Object.assign(categories, items)
    })
    return categories
  }

  exportConfig(){
    let element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.categories)))
    element.setAttribute('download', 'netflix-categories.json')

    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  importConfig(){

  }

  resetConfig(){

  }

}