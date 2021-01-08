document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const theForm = document.querySelector('#new-item-form');
  theForm.addEventListener('submit', handleFormSubmit);

  
})

const handleFormSubmit = (event) => {
  event.preventDefault();
  const newListItem = document.createElement('li');
  newListItem.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;

  const list = document.querySelector('#reading-list');
  list.appendChild(newListItem);


}
