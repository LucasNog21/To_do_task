class Task {
    #desc
    #complete
    constructor(title, desc, date, complete){
        this.title = title,
        this.#desc = desc,
        this.date = date,
        this.#complete = complete
    }
    get desc() {
        return this.#desc
    }
    set desc(new_desc) {
        if (typeof new_desc === 'string' && new_desc.length > 0) {
            this.#desc = new_desc
        } else {
            window.alert('[ERRO] Esse nome não é válido')
        }
    }

    get complete(){
        return this.#complete
    }

    set complete(complete) {
        if (typeof complete === 'boolean'){
            this.#complete = complete
        } else {
            window.alert('[ERRO] Esse valor não é válido')
        }
    }
}

function save_tasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function get_tasks() {
    let saved_tasks = localStorage.getItem('tasks')
    if (saved_tasks) {
        tasks = JSON.parse(saved_tasks)
    }

}

function input_task(){
    let input_area = document.getElementById('input_task')
    input_area.style.display = 'inline'
    
}

function add_task() {
    let task_title = document.getElementById('task_title').value
    let task_desc = document.getElementById('task_desc').value
    let task_date = document.getElementById('task_date').value

    let verify_title = false

    for (i in tasks){
        if (tasks[i].title == task_title){
            verify_title = true
        }
    }
    if (task_date.length == 0){
        window.alert('[ERRO] Preencha o campo de data')
    } else if ( ! verify_title) {
        let instance_task = new Task(task_title, task_desc, task_date, false)
        tasks.push(instance_task)
    } else {
        window.alert('[ERRO] Essa tarefa já existe')
    }

    save_tasks()

}

function show_task() {
    if (tasks.length !=0){
        hide_button.style.display = 'inline'
    }
    task_area.innerHTML = ''

    for (i in tasks){
        let card = document.createElement('div')
        let card_title = document.createElement('div')
        let card_info = document.createElement('div')

        card.id = tasks[i].title
        card.classList.add('card')
        card_info.classList.add('card_info')
        card_title.classList.add('card_title')
        card_title.innerHTML = `
        <h1>${tasks[i].title}</h1>
        <input type="checkbox" id="check_task${i}" value="${i}">
        <p>${tasks[i].date}</p>
        `
        card_info.innerHTML = `
        <p>
        <a href ="#" id="${i}" class="show_desc" onclick="show_hide_desc(${i})">mostrar descrição</a>
        <input type="button" value="delete" class="delete_button" onclick="delete_task(${i})">
        <p>
        `
        card.appendChild(card_title)
        card.appendChild(card_info)
        card.innerHTML += `<p id="p_desc${i}" class="desc">${tasks[i].desc}</p>`
        task_area.appendChild(card)
    }
    
}

function show_hide_desc(id) {
    let p_desc = document.getElementById(`p_desc${id}`)
    let desc_link = document.getElementById(`${id}`)

    if (p_desc.style.display == 'inline'){
        p_desc.style.display = 'none'
        desc_link.textContent = 'mostrar descrição'
    } else {
        desc_link.textContent = 'ocultar descrição'
        p_desc.style.display = 'inline'
    }
    

}

function hide_task() {
    task_area.innerHTML = ''
    hide_button.style.display = 'none'

}

function delete_task(id) {
    tasks.splice(id,1)
    show_task()
    if (task_area.innerHTML == ''){
        hide_task()
    }
    save_tasks()
}


function delete_complete_task() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]')
    for (let i in checkboxes) {
        if (checkboxes[i].checked){
            tasks[i].complete = true
        }
    }
    for (let i = tasks.length-1;i>=0;i--){
        if(tasks[i].complete){
            delete_task(i)
        }
    }
}

var tasks = []
const date = new Date()
const task_area = document.getElementById('tasks')
const hide_button = document.getElementById('hide_button')