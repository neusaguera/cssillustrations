var codes = document.querySelectorAll('pre > code');
codes.forEach(function (codeBlock) {
    var button = document.createElement('button');
    button.className = 'copy-code';
    button.type = 'button';
    button.innerText = 'Copiar';
    var pre = codeBlock.parentNode;
    pre.parentNode.insertBefore(button, pre);
});

var copyCode = new ClipboardJS('.copy-code', {
    target: function(trigger) {
        return trigger.nextElementSibling;
    }
});

copyCode.on('success', function(event) {
    event.clearSelection();
    event.trigger.textContent = 'Copiado';
    window.setTimeout(function() {
        event.trigger.textContent = 'Copiar';
    }, 1000);
});

copyCode.on('error', function(event) {
    event.trigger.textContent = 'Press "Ctrl + C"';
    window.setTimeout(function() {
        event.trigger.textContent = 'Copiar';
    }, 1000);
});