(function () {
    var root = document.querySelector(':root');
    var loadFont = window.getComputedStyle(root, null).getPropertyValue('font-size');

    function setFont(size){
        root.style.setProperty('--fontsize', size + 'px');
        localStorage.setItem('--fontsize', size);
    }

    function altTextSize (i) {
        var size = parseFloat(window.getComputedStyle(root, null).getPropertyValue('font-size'));
        size += i;
        if(size <= 0) { size = 1; }
        setFont(size);
    }

    document.querySelector('.text-up').onclick = function () {
        altTextSize(1);
    };

    document.querySelector('.text-down').onclick = function () {
        altTextSize(-1);
    };

    document.querySelector('.text-reset').onclick = function () {
        setFont(parseFloat(loadFont));
    };

    var storedSize = localStorage.getItem('--fontsize');
    if (storedSize) {
        setFont(parseFloat(storedSize));
    }

    function setTheme(acc1, acc2){
        root.style.setProperty('--accent1', acc1);
        root.style.setProperty('--accent2', acc2);
        localStorage.setItem('accent1', acc1);
        localStorage.setItem('accent2', acc2);
    }

    function defaultTheme(){
        setTheme(accent1, accent2);
    }

    function highTheme(){
        setTheme(cont_accent1, cont_accent2);
    }

    document.querySelector('.default-theme').onclick = defaultTheme;
    document.querySelector('.high-theme').onclick = highTheme;

    var savedAccent1 = localStorage.getItem('accent1');
    if(savedAccent1)
    {
        var savedAccent2 = localStorage.getItem('accent2');
        setTheme(savedAccent1, savedAccent2);
    }
    else if(accent1 && accent2){
        defaultTheme();
    }
})();