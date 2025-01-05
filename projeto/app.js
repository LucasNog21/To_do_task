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

function preview_task(){
    let input_area = document.getElementById('input_task')
    input_area.innerHTML = 'teste'
    input_area.style.display = 'inline'
}
const tasks = []
const date = new Date()

