const input  = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list   = document.getElementById('task-list');

function addTask() {
  const text = input.value.trim();

  if (!text) {
    input.focus();
    return;
  }

  const li = document.createElement('li');
  li.textContent = text;

  list.appendChild(li);

  input.value = '';
  input.focus();
}

list.addEventListener('click', function(e) {
  const li = e.target.closest('li');
  if (li) {
    li.remove();
  }
});

addBtn.addEventListener('click', addTask);

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addTask();
});