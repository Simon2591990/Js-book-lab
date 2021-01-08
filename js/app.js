document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const theForm = document.querySelector('#new-item-form');
  theForm.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.createElement('button');
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.appendChild(deleteButton);
  deleteButton.textContent = 'Delete';
  deleteButton.type = 'submit'

  
})

const handleFormSubmit = (event) => {
  event.preventDefault();
  const submission = document.createElement('li');
  submission.classList.add('submission');
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(submission);

  const title = document.createElement('li')
  title.classList.add('title')
  title.textContent = event.target.title.value;
  const titleHolder = document.createElement('li');
  submission.appendChild(title)
  
  const author = document.createElement('li')
  author.classList.add('author')
  author.textContent = event.target.author.value;
  const authorHolder = document.createElement('li');
  submission.appendChild(author)
  
  const cat = document.createElement('li')
  cat.classList.add('category')
  cat.textContent = event.target.category.value;
  const catHolder = document.createElement('li');
  submission.appendChild(cat)


  const newFormItem = document.getElementById('new-item-form')
  newFormItem.reset()
  console.log(newFormItem)
  // document.getElementByClass('.primary').reset()
  // newListItem.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;

}
