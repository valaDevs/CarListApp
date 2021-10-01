class Car{
    constructor(name , company , color){
        this.name = name
        this.company = company
        this.color = color
    }
}

class UI{
    addCarToList(car){
        const list = document.getElementById('car-list')
        const row = document.createElement('tr')

        row.innerHTML = `
            <td>${car.name}</td>
            <td>${car.company}</td>
            <td>${car.color}</td>
            <td><a href="#" class="delete btn btn-danger"><i class="fa fa-trash"></i></a></td>
        `
        list.appendChild(row)
    }

    showAlert(message,className){
        const div = document.createElement('div')
        div.className =`alert ${className}`
        div.appendChild(document.createTextNode(message))

        const container = document.querySelector('.container-fluid')
        const form = document.querySelector('.row')

        container.insertBefore(div , form)

        setTimeout(() => {
            document.querySelector('.alert').remove()
        },3000)
    }

    clearFields(){
        document.getElementById('name').value = ""
        document.getElementById('company').value = ""
        document.getElementById('color').value = ""
    }

    deleteCar(target){
        if(target.classList.contains('delete')){
            target.parentElement.parentElement.remove()
        }

    
    }
}

const form = document.getElementById('car-form')
form.addEventListener('submit' , e => {

        const name = document.getElementById('name').value
        const company = document.getElementById('company').value
        const color = document.getElementById('color').value

        const car = new Car(name , company , color)
        const ui = new UI()

        if(name === "" || company === "" || color === ""){
            ui.showAlert('Please fill out all fields' , 'alert-danger')
        }
        else{
            ui.addCarToList(car)
            ui.clearFields()
            ui.showAlert('Car added to List ' , 'alert-success')
        }


    e.preventDefault()
})


document.getElementById('car-list').addEventListener('click' , e => {

    const ui = new UI()
    ui.deleteCar(e.target)
    ui.showAlert('car deleted' , 'alert-success')
    e.preventDefault()
})