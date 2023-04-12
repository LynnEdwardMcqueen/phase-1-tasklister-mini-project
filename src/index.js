document.addEventListener("DOMContentLoaded", () => {
  let input = document.querySelector("input#new-task-description")
  let submit = document.querySelector("input#submit-button")
  console.log(submit)
  document.querySelector('form').addEventListener("submit", function(e) {
    e.preventDefault();
    addNewTask(e.target.new_task_description.value)
  } );
});

function addNewTask(newTask) {
  let newListItem = document.createElement("li");
  // Add a space to put some separation between the task and the checkbox
  newListItem.innerHTML = newTask + " ";
  let newListCheckBox = document.createElement("button")
  // When the check box is clicked, this will remove the task.
  newListCheckBox.addEventListener("click", removeTask)
  newListCheckBox.textContent = "x"
  newListItem.appendChild(newListCheckBox)
  document.querySelector("ul#tasks").appendChild(newListItem);


}

function removeTask(e) {
  // Any one of the buttons (if there are many tasks) could have caused the "click."  Use the target property of the event to figure out which
  // specific button had this occur.
  e.target.parentNode.remove();
}
