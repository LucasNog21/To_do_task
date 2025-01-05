class Task {
    #desc
    constructor(title, desc, date){
        this.title = title,
        this.#desc = desc,
        this.date = date
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
}

function input_task(){
    let input_area = document.getElementById('input_task')
    input_area.style.display = 'inline'
    
}

function add_task() {
    let task_title = document.getElementById('task_title').value
    let task_desc = document.getElementById('task_desc').value
    let task_date = document.getElementById('task_date').value

    let verify = false

    for (i in tasks){
        if (tasks[i].title == task_title){
            verify = true
        }
    }

    if ( ! verify) {
        let instance_task = new Task(task_title, task_desc, task_date)
        tasks.push(instance_task)
    } else {
        window.alert('[ERRO] Essa tarefa já existe')
    }
    
}

function show_task() {
    hide_button.style.display = 'inline'
    task_area.innerHTML = ''

    for (i in tasks){
        let card = document.createElement('div')
        let card_info = document.createElement('div')

        card.id = tasks[i].title
        card.classList.add('card')
        card_info.innerHTML = `
        <p>
        <h1>${tasks[i].title}</h1>
        <a href ="#" id="${i}" class="show_desc" onclick="show_hide_desc(${i})">mostrar descrição</a>
        <input type="checkbox" id="check_task${i}" value="${i}">
        <input type="button" value="delete" class="delete_button" onclick="delete_task(${i})">
        <p>
        <p id="p_desc${i}" class="desc">${tasks[i].desc}</p>
        `
        card.appendChild(card_info)
        task_area.appendChild(card)
    }
    
}

function show_hide_desc(id) {
    let p_desc = document.getElementById(`p_desc${id}`)
    p_desc.syle.display = 'inline'

}

function hide_task() {
    task_area.innerHTML = ''
    hide_button.style.display = 'none'

}


const tasks = []
const date = new Date()
const task_area = document.getElementById('tasks')
const hide_button = document.getElementById('hide_button')