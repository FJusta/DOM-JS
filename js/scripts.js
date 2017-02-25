
var withButtonClass = document.getElementsByClassName('button');

for (var i = 0; i < withButtonClass.length; i++) {
    
    function getClassText() {
        alert(withButtonClass[i].innerHTML);
    }
    getClassText();
}

