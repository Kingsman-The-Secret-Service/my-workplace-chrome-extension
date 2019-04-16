chrome.storage.sync.get('url',  function(items) {
    console.log(items);
    document.location.href = items.url
});