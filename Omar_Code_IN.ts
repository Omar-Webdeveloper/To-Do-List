interface Task {
id: number;
title: string;
states: string;
startDate: string;
endDate: string;
}  
let Count_ID = 0;
function increment() {
    Count_ID += 1;
    document.getElementById("counting")!.innerText = Count_ID.toString();
}
document.getElementById('TaskForm')!.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way




increment()
console.log("ssssssss",Count_ID)
document.getElementById("counting")!.innerText = Count_ID.toString();


    const id = Count_ID;
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const select: HTMLSelectElement = document.getElementById('states') as HTMLSelectElement;
    const states = select.options[select.selectedIndex] .value;
    const startDate = (document.getElementById('startDate') as HTMLInputElement).value;
    const endDate = (document.getElementById('endDate') as HTMLInputElement).value;

    // Create a new Task object
    const newTask: Task = {id, title, states, startDate, endDate };
    
    // Get the existing Tasks from local storage
    const Tasks: Task[] = JSON.parse(localStorage.getItem('Tasks') || '[]');

    // Add the new Tasks to the array
    Tasks.push(newTask);

    // Save the updated Tasks array back to local storage
    localStorage.setItem('Tasks', JSON.stringify(Tasks));

    // Display the updated Tasks list
    displayProducts();

    // Clear the form
    (document.getElementById('TaskForm') as HTMLFormElement).reset();
});

function displayProducts() {
    const TasksCards = document.getElementById('TasksCards')!;
    TasksCards.innerHTML = ''; // Clear existing content

    // Get the Tasks from local storage
    const Tasks: Task[] = JSON.parse(localStorage.getItem('Tasks') || '[]');

    Tasks.forEach(task => {
        const card = document.createElement('div');
        card.className = "card shadow-sm p-3 mb-3";
            card.innerHTML = `
                <h5 class="card-title"><strong>Tiltle:</strong> ${task.title}</h5>
                <p class="card-text"><strong>State:</strong> ${task.states}</p>
                <p class="card-text"><strong>Start Date:</strong> ${task.startDate}</p>
                <p class="card-text"><strong>End Date:</strong> ${task.endDate}</p>
            `;
        TasksCards.appendChild(card);
    });
}

// Display the Tasks on page load
displayProducts();
