chrome.storage.local.get(['categories'], ({categories}) => {
  categories.forEach(categorie => {
    document.querySelector('main > ul').insertAdjacentHTML('beforeend', generateCategorieDOM(categorie.name, categorie.code, true))
    categorie.sub.forEach(item => {
      document.querySelector('main > ul > ul:last-child').insertAdjacentHTML('beforeend', generateCategorieDOM(item.name, item.code))
    })
    document.querySelector('main > ul').insertAdjacentHTML('beforeend', '</ul>')
  })

  Array.from(document.querySelectorAll('.trigger')).forEach(element => {
    element.addEventListener('click', function(event){
      this.classList.toggle('close')
      document.getElementById(this.dataset.id).classList.toggle('close')
    })
  })
})

function generateCategorieDOM(name, code, parent = false){
  return `
      <li>
        <div>
          <span class="name" contenteditable="true" title="Cliquer pour modifier le nom de la catégorie">${name}</span>
        </div>
        <div class="draggable-zone" title="Cliquer et déplacer pour changer la position de cette catégorie"></div>
        <div>
          <span class="code" contenteditable="true" title="Cliquer pour remplacer le code de la catégorie">${code}</span>
        </div>
        ${
          parent ? `
            <span data-id="${code}" class="trigger close">
              <i class="ri-arrow-down-s-fill"></i>
              <i class="ri-arrow-up-s-fill"></i>
            </span>
          </li>
          <ul id="${code}" class="close">` : `
          </li>`
        }`
}