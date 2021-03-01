const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = e.target.children[1].value;
      //OR const input = document.querySelector('input#searchByID')
      //input.value
      fetch(`http://localhost:3000/movies/${input}`)
      .then(response => response.json())
      .then(data => {
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')
    
        title.innerText = data.title
        summary.innerText = data.summary
      })
  })
}

document.addEventListener('DOMContentLoaded', init)