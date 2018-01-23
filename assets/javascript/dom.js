var $ = function (sel) {
    var elem = document.querySelectorAll(sel);

    // will only be accessable through the text function because not being directly returned
    // var helperFunction = function () {
    //     console.log("More text");
    // }
    var text = function (str) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].innerText = str;
        }
        // helperFunction();
    }
    var addClass = function (className) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.add(className);
        }
    }
    var removeClass = function (className) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.remove(className);
        }
    }
    var on = function (action, cb){
        for (var i = 0; i < elem.length; i++){
            elem[i].addEventListener(action, cb);
        }
    }
    var publicAPI = {
        element: elem,
        text: text,
        addClass: addClass,
        removeClass: removeClass,
        on: on
    }
    return publicAPI;
}
