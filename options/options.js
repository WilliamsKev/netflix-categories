
let config = new Config
let importer = new Importer(config, document.getElementById('importer'))

document.getElementById('export').addEventListener('click', () => config.exportConfig())
document.getElementById('import').addEventListener('click', () => importer.show())

document.getElementById('importer').parentElement.addEventListener('click', event => {
  if(!event.path.find(item => item.id === 'importer')) importer.close()
  else if(event.path.find(item => item.id === 'dropzone')) document.getElementById('upload').click()
})

document.getElementById('upload').addEventListener('change', function(){
  importer.upload(this.files[0])
})