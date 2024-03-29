const text = document.getElementById('text')
const author = document.getElementById('author')
const newQuote = document.getElementById('new-quote')
function loadQuote(){
  fetch('https://api.quotable.io/quotes/random', {
    method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  })
   .then((res) => res.json())
  .then((data) => {
    text.innerHTML = data[0].content
    author.innerHTML = data[0].author
  })
}

loadQuote()

newQuote.addEventListener('click', function(){
  loadQuote()
})