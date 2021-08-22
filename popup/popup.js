var timeOutMessage

chrome.storage.local.get(['background'], (item) => {
  console.log(item.background)
  if(item.background) document.getElementById('background').style.backgroundImage = `url("${item.background}")`
  console.log(document.getElementById('background'), document.getElementById('background').style.backgroundImage)
})

document.getElementById('options').addEventListener('click', function(){
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage()
  }else{
    window.open(chrome.runtime.getURL('options.html'))
  }
})

chrome.storage.sync.get(null, (items) => {

  var categories = Object.values(items)
  categories.sort((a, b) => {
    return a.key - b.key
  })

  categories.forEach(categorie => {
    document.querySelector('main > ul').insertAdjacentHTML('beforeend', generateCategorieDOM(categorie.name, categorie.code, categorie.key, true))
    categorie.sub.forEach(item => {
      document.querySelector('main > ul > ul:last-child').insertAdjacentHTML('beforeend', generateCategorieDOM(item.name, item.code, item.key))
    })
    document.querySelector('main > ul').insertAdjacentHTML('beforeend', '</ul>')
  })

  Array.from(document.querySelectorAll('.trigger')).forEach(element => {
    element.addEventListener('click', function(event){
      this.classList.toggle('close')
      document.getElementById(this.dataset.id).classList.toggle('close')
    })
  })

  Array.from(document.querySelectorAll('main li > div[contenteditable="true"]')).forEach(element => {
    element.addEventListener('input', function(event){
      setMessage(0)
    })
  })

  Array.from(document.querySelectorAll('main li > p.delete')).forEach(element => {
    element.addEventListener('click', function(event){
      this.closest('li').remove()
      setMessage(0)
    })
  })

  Array.from(document.querySelectorAll('main > ul > ul')).forEach(element => {
    Sortable.create(element, {
      group: 'sub-categories',
      onEnd: function(){
        setMessage(0)
      }
    })
  })
  
  Sortable.create(document.querySelector('main > ul'), {
    group: 'categories',
    onEnd: function(event){
      Array.from(event.to.children).forEach(element => {
        if(element.tagName === "UL" && (!element.previousElementSibling || element.previousElementSibling.tagName === "UL" || element.id !== element.previousElementSibling.dataset.id)){
          referenceNode = document.querySelector(`li[data-id="${element.id}"]`)
          if(referenceNode){
            if(referenceNode.nextSibling){
              event.to.insertBefore(element, referenceNode.nextSibling)
            }else{
              event.to.insertAdjacentHTML('beforeend', element.innerHTML)
              element.remove()
            }
          }
        }
      })
      setMessage(0)
    }
  })

  document.getElementById('save').addEventListener('click', function(event){
    newCategories = new Array()
    Array.from(document.querySelectorAll('main > ul > li')).forEach((categorie, key) => {
      newSubCategories = new Array()
      Array.from(categorie.nextElementSibling.children).forEach((subCategorie, subKey) => {
        newSubCategories.push({
          'name': document.querySelector(`[data-id="${subCategorie.dataset.id}"] > .name`).innerHTML,
          'code': document.querySelector(`[data-id="${subCategorie.dataset.id}"] > .code`).innerHTML,
          'key': subKey
        })
      })
      newCategories.push({
        'name': document.querySelector(`[data-id="${categorie.dataset.id}"] > .name`).innerHTML,
        'code': document.querySelector(`[data-id="${categorie.dataset.id}"] > .code`).innerHTML,
        'key': key,
        'sub': newSubCategories
      })
    })

    chrome.storage.sync.clear()
    newCategories.forEach(categorie => {
      chrome.storage.sync.set({[`categorie-${categorie.key}`]: categorie})
    })

    setMessage(1, 'Les changements ont bien été enregistrés')
    timeOutMessage = setTimeout(function(){
      document.querySelector('footer').classList.remove('show')
    }, 3000)
  })

  document.getElementById('close').addEventListener('click', function(event){
    document.querySelector('footer').classList.remove('show')
  })

})

function insertAfter(newNode, referenceNode){
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function generateCategorieDOM(name, code, key, parent = false){
  return `
      <li data-id="${key}">
        <div class="name" contenteditable="true" title="Cliquer pour modifier le nom de la catégorie">${name}</div>
        <div class="draggable-zone" title="Cliquer et déplacer pour changer la position de cette catégorie"></div>
        <div class="code" contenteditable="true" title="Cliquer pour remplacer le code de la catégorie">${code}</div>
        <p class="delete" title="Cliquer ici pour supprimer cette catégorie">
          <i class="ri-delete-bin-7-line"></i>
        </p>
        ${
          parent ? `
            <span data-id="${key}" class="trigger close">
              <i class="ri-arrow-down-s-fill"></i>
              <i class="ri-arrow-up-s-fill"></i>
            </span>
          </li>
          <ul id="${key}" class="close">` : `
          </li>`
        }`
}

function setMessage(type, message='Vous avez effectués des changements...'){
  const SAVE = 0
  const INFO = 1
  const WARN = 2

  switch(type){
    case SAVE:
      document.getElementById('close').style.display = 'none'
      document.getElementById('cancel').style.display = 'inline-block'
      document.getElementById('save').style.display = 'inline-block'
      break
    case INFO:
      document.getElementById('close').style.display = 'inline-block'
      document.getElementById('cancel').style.display = 'none'
      document.getElementById('save').style.display = 'none'
      break
    case WARN:
    document.getElementById('close').style.display = 'none'
      document.getElementById('cancel').style.display = 'inline-block'
      document.getElementById('save').style.display = 'none'
      break
  }

  document.getElementById('info').innerHTML = message
  if(timeOutMessage !== undefined) clearTimeout(timeOutMessage)
  document.querySelector('footer').classList.add('show')
}