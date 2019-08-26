const submit = document.getElementById('submit'),
    tbody = document.getElementById('tbody');

function removeError(element) {
    element.classList.remove('error');
}


const tasks = [];
const now = new Date;

function getTask() {
    const title = document.getElementById('title'),
        description = document.getElementById('description');
    if (title.value !== '' && description.value !== '') {
        const task = {
            title: title.value,
            description: description.value,
            date: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        };
        tasks.push(task);
        title.value = '';
        description.value = '';
    } else {
        if (title.value === '') {
            title.classList.add('error');
        }

        if (description.value === '') {
            description.classList.add('error');
        }
    }
    console.log(tasks);
};

submit.addEventListener('click', getTask);