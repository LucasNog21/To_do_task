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



const tasks = []
const date = new Date()

