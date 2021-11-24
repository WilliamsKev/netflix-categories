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
      try{
        this.content = JSON.parse(result)
      }catch{
        this.error = true
      }
      this.reloadDOM()
    }
    reader.onerror = () => {
      this.error = true
      this.reloadDOM()
    }
  }

  reset(){
    this.error = false
    this.content = null
    document.getElementById('upload').value = null
    this.close()
    setTimeout(() => {
      this.reloadDOM()
    }, 200)
  }

  confirm(){
    this.config.import(this.content)
    this.reset()
  }

  reloadDOM(){
    if(this.error){
      this.DOMElement.querySelector('main').innerHTML = `
        <section>
          <div>
            <p>L'importation n'a pas pu être effectuée, fichier invalide.</p>
          </div>
          <div>
            <button id="cancel">Fermer</button>
          </div>
        </section>
      `
    }else{
      if(this.content){
        this.DOMElement.querySelector('main').innerHTML = `
          <section>
            <div>
              <p>Le fichier a bien été importé.<br/>L'utiliser comme configuration ?</p>
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