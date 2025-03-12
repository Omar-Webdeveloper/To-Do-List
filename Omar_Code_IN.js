var Count_ID = 0;
var ID_1;
function increment() {
    Count_ID += 1;
    ID_1 = Count_ID;
}
document.getElementById('TaskForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    increment();
    var id = ID_1;
    var title = document.getElementById('title').value;
    var select = document.getElementById('states');
    var states = select.options[select.selectedIndex].value;
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    // Create a new Task object
    var newTask = { id: id, title: title, states: states, startDate: startDate, endDate: endDate };
    // Get the existing Tasks from local storage
    var Tasks = JSON.parse(localStorage.getItem('Tasks') || '[]');
    // Add the new Tasks to the array
    Tasks.push(newTask);
    // Save the updated Tasks array back to local storage
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
    // Display the updated Tasks list
    displayProducts();
    // Clear the form
    document.getElementById('TaskForm').reset();
});
function displayProducts() {
    var TasksCards = document.getElementById('TasksCards');
    TasksCards.innerHTML = ''; // Clear existing content
    // Get the Tasks from local storage
    var Tasks = JSON.parse(localStorage.getItem('Tasks') || '[]');
    Tasks.forEach(function (task) {
        var card = document.createElement('div');
        card.className = "card shadow-sm p-3 mb-3";
        card.innerHTML = "\n                <h5 class=\"card-title\"><strong>Tiltle:</strong> ".concat(task.title, "</h5>\n                <p class=\"card-text\"><strong>State:</strong> ").concat(task.states, "</p>\n                <p class=\"card-text\"><strong>Start Date:</strong> ").concat(task.startDate, "</p>\n                <p class=\"card-text\"><strong>End Date:</strong> ").concat(task.endDate, "</p>\n            ");
        TasksCards.appendChild(card);
    });
}
// Display the Tasks on page load
displayProducts();
