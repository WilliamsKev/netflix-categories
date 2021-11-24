
let config = new Config
let importer = new Importer(config, document.getElementById('importer'))

document.getElementById('export').addEventListener('click', () => config.export())
document.getElementById('import').addEventListener('click', () => importer.show())
document.getElementById('reset').addEventListener('click', () => config.reset())

document.getElementById('importer').parentElement.addEventListener('click', event => {
  if(!event.path.find(item => item.id === 'importer')) importer.reset()
  else if(event.path.find(item => item.id === 'dropzone')) document.getElementById('upload').click()
})

document.getElementById('upload').addEventListener('change', function(){
  if(this.files && this.files.length) importer.upload(this.files[0])
})

document.getElementById('importer').addEventListener('click', (event) => {
  if(event.target.id === 'cancel') importer.reset()
  else if(event.target.id === 'valid') importer.confirm()
})