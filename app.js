function preview_task() {
    let preview_area = document.querySelector('div#add_input')
    let add_button = document.querySelector('input#add_task_button')
    let input_area = document.querySelector('div#input_task')
    input_area.style.display = 'flex'
    add_button.style.display = 'inline'
    preview_area.innerHTML = ''
    preview_area.innerHTML += `
    <p>Digite o nome da tarefa: <input type="text" id="task_name"></p><br>
    Digite a descrição da tarefa:<textarea name="task_desc"id="task_desc"></textarea>
    `
}

function add_task() {
    let task_txt = document.querySelector('input#task_name')
    let desc_txt = document.querySelector('textarea#task_desc')
    var task_title = task_txt.value
    let task_desc = desc_txt.value
    let verify = false


    for (i in tasks_array){
        if (tasks_array[i].name == task_title) {
            verify = true
        }
    }

    if ( ! verify) {
        let instance_task = new Task(task_title, task_desc, false)
        tasks_array.push(instance_task)
    } else {
        window.alert('Digite outro nome, esse já existe')
    }
}

function show_task() {
    var tasks = document.querySelector('div#tasks')
    tasks.innerHTML = ''
    for (var i = 0; i < tasks_array.length;i++){
        tasks.innerHTML += `
    <div class="card" id="${tasks_array[i].name}">
        <h1>${tasks_array[i].name}</h1><a href="#" id="${i}" onclick="show_hide_desc(${i})">mostrar descrição</a>
        <p id="p_desc${i}" class="desc">${tasks_array[i].desc}</p> 
    </div>
    `
    }
    
}

function show_hide_desc(id) {
    let desc_text = document.querySelector(`p#p_desc${id}`)
        if(desc_text.style.display == 'none'){
            desc_text.style.display = 'inline'
        } else {
            desc_text.style.display = 'none'
        }

}

function Task(name, desc, complete ) {
    this.name = name,
    this.desc = desc,
    this.complete = complete
}
var tasks_array = []