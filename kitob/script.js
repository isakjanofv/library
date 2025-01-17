const addBookButton = document.getElementById('add-book');
const library = document.getElementById('library');

addBookButton.addEventListener('click', () => {
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('author').value;

  if (title.trim() === '' || author.trim() === '') {
    alert('Please fill in both fields.');
    return;
  }

  const book = document.createElement('div');
  book.className = 'book';

  const bookInfo = document.createElement('span');
  bookInfo.textContent = `${title} by ${author} - Unread`;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const markAsReadButton = document.createElement('button');
  markAsReadButton.textContent = 'Mark as Read';
  markAsReadButton.addEventListener('click', () => {
    if (bookInfo.textContent.includes('Unread')) {
      bookInfo.textContent = `${title} by ${author} - Read`;
      markAsReadButton.textContent = 'Mark as Unread';
    } else {
      bookInfo.textContent = `${title} by ${author} - Unread`;
      markAsReadButton.textContent = 'Mark as Read';
    }
  });

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    library.removeChild(book);
  });

  actions.appendChild(markAsReadButton);
  actions.appendChild(removeButton);

  book.appendChild(bookInfo);
  book.appendChild(actions);

  library.appendChild(book);

  document.getElementById('book-title').value = '';
  document.getElementById('author').value = '';
});
