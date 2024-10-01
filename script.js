const workoutForm = document.getElementById('workout-form');
const workoutLog = document.getElementById('workout-log');
const totalDuration = document.getElementById('total-duration');

let workouts = [];

// function to add workout
function addWorkout(event) {
    event.preventDefault();
    const workoutName = document.getElementById('workout-name').value;
    const workoutDuration = parseInt(document.getElementById('workout-duration').value);

    const workout = { name: workoutName, duration: workoutDuration };
    workouts.push(workout);
    
    // clears the input fields
    workoutForm.reset();

    renderWorkouts();
}

// function to render thr workouts
function renderWorkouts() {
    workoutLog.innerHTML = '';
    let total = 0;

    workouts.forEach((workout, index) => {
        const li = document.createElement('li');
        li.textContent = `${workout.name}: ${workout.duration} minutes`;
        workoutLog.appendChild(li);
        total += workout.duration;
    });

    totalDuration.textContent = total;
}

// event listener for the form submission
workoutForm.addEventListener('submit', addWorkout);
