function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();

      if (taskText === '') {
        alert("Please enter a task.");
        return;
      }

      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = taskText;

      const actions = document.createElement('div');
      actions.className = 'actions';

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.onclick = function() {
        const newText = prompt("Edit task:", span.textContent);
        if (newText !== null && newText.trim() !== "") {
          span.textContent = newText.trim();
        }
      };

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'delete';
      deleteBtn.onclick = function() {
        li.remove();
      };

      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);

      li.appendChild(span);
      li.appendChild(actions);

      document.getElementById('taskList').appendChild(li);
      taskInput.value = '';
    }