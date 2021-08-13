var surligneur = new Array()

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get("surligneur", ({ _surligneur }) => {
    surligneur = (_surligneur === undefined) ? surligneur : _surligneur
  })
})

//chrome.storage.sync.clear()