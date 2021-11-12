class Importer{

  constructor(config, DOMElement){
    this.config = config
    this.DOMElement = DOMElement
    this.fileName = new String()
    this.content = null
    this.error = false
  }

  show(){
    this.reloadDOM()
    this.DOMElement.parentElement.classList.add('show')
  }

  close(){
    this.DOMElement.parentElement.classList.remove('show')
  }

  upload(element){
    this.fileName = element.name
    const reader = new FileReader()
    reader.readAsText(element, 'UTF-8')
    reader.onload = (event) => {
      let result = event.target.result
      if(JSON.parse(result)) this.content = JSON.parse(result)
      else this.error = true
    }
    reader.onerror = () => {
      this.error = true
    }
    this.reloadDOM()
  }

  reloadDOM(){
    if(this.error){

    }else{
      if(this.content){
        this.DOMElement.querySelector('main').innerHTML = `
          <section>
            <div>
              <p>Le fichier</p>
            </div>
            <div>
              <button id="cancel">Annuler</button>
              <button id="valid">Sauvegarder</button>
            </div>
          </section>
        `
      }else{  
        this.DOMElement.querySelector('main').innerHTML = `
          <section class="dropzone" id="dropzone">
            <i class="ri-download-line"></i>
            <label><b>Choisir un fichier</b> ou le glisser ici</label>
          </section>`
      }
    }
  }

}