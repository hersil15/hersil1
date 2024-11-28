document.addEventListener('DOMContentLoaded', (event) => {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  // Función para agregar una nueva tarea
  window.addTask = function() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
      const listItem = document.createElement('li');

      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      listItem.appendChild(taskSpan);

      const editButton = document.createElement('button');
      editButton.textContent = 'Editar';
      editButton.onclick = () => editTask(taskSpan);
      listItem.appendChild(editButton);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.onclick = () => deleteTask(listItem);
      listItem.appendChild(deleteButton);

      const completeButton = document.createElement('button');
      completeButton.textContent = 'Completada';
      completeButton.onclick = () => completeTask(taskSpan);
      listItem.appendChild(completeButton);

      taskList.appendChild(listItem);
      taskInput.value = '';
  };

  // Función para editar una tarea
  function editTask(taskSpan) {
      const newTaskText = prompt('Edita tu tarea:', taskSpan.textContent);
      if (newTaskText !== null) {
          taskSpan.textContent = newTaskText.trim();
      }
  }

  // Función para eliminar una tarea
  function deleteTask(listItem) {
      taskList.removeChild(listItem);
  }

  // Función para marcar una tarea como completada
  function completeTask(taskSpan) {
      taskSpan.style.textDecoration = 'line-through';
  }
});
