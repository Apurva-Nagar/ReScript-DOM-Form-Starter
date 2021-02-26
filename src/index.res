@val external document: {..} = "document"
@val external window: {..} = "window"

let textEditor = document["getElementById"]("textEditor")
let textView = document["getElementById"]("textView")

let updateTextView = event => {
  textView["innerText"] = event["target"]["value"]
}

textEditor["addEventListener"]("input", updateTextView)

let selectSmall = document["getElementById"]("selectSmall")
let selectRegular = document["getElementById"]("selectRegular")
let selectLarge = document["getElementById"]("selectLarge")

selectSmall["addEventListener"]("change", _ => {
  textView["classList"]["add"]("text-sm")
  textView["classList"]["remove"]("text-2xl", "text-6xl")
})

selectRegular["addEventListener"]("change", _ => {
  textView["classList"]["add"]("text-2xl")
  textView["classList"]["remove"]("text-sm", "text-6xl")
})

selectLarge["addEventListener"]("change", _ => {
  textView["classList"]["add"]("text-6xl")
  textView["classList"]["remove"]("text-sm", "text-2xl")
})
