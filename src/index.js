const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const input = document.querySelector('input#searchByID')
    

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        //Access the DOM and store the two elements in js
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')

        //Change the content of title and summary based on the retrieve data
        title.innerText = data.title
        summary.innerText = data.summary
      })
  })
}

document.addEventListener('DOMContentLoaded', init);