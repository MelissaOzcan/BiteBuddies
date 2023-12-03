/** 
//https://html.form.guide/snippets/html-submit-button-onclick-code/#:~:text=In%20both%20the%20cases%2C%20pressing,onsubmit%20event%20of%20the%20form.
let displaySuggestions = function() {
    var text = document.getElementById("suggestions");
    text.style.display = "block";
};

//https://stackoverflow.com/questions/67650367/how-to-submit-multiple-forms-with-a-single-submit-button
let submit = function () {
    let forms = document.getElementsByClassName("form");
    for (var i = 0; i < forms.length; i++) {
        forms[i].submit();
    }
}
*/