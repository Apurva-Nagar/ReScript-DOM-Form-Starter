// Generated by ReScript, PLEASE EDIT WITH CARE


var textEditor = document.getElementById("textEditor");

var textView = document.getElementById("textView");

function updateTextView($$event) {
  textView.innerText = $$event.target.value;
  
}

textEditor.addEventListener("input", updateTextView);

var selectSmall = document.getElementById("selectSmall");

var selectRegular = document.getElementById("selectRegular");

var selectLarge = document.getElementById("selectLarge");

selectSmall.addEventListener("change", (function (param) {
        textView.classList.add("text-sm");
        return textView.classList.remove("text-2xl", "text-6xl");
      }));

selectRegular.addEventListener("change", (function (param) {
        textView.classList.add("text-2xl");
        return textView.classList.remove("text-sm", "text-6xl");
      }));

selectLarge.addEventListener("change", (function (param) {
        textView.classList.add("text-6xl");
        return textView.classList.remove("text-sm", "text-2xl");
      }));

export {
  textEditor ,
  textView ,
  updateTextView ,
  selectSmall ,
  selectRegular ,
  selectLarge ,
  
}
/* textEditor Not a pure module */
