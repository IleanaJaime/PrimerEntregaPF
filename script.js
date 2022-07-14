class Medicamento{
    constructor(nombreComercial, nombreDroga, precio, comprimidos){
        this.nombreComercial = nombreComercial
        this.nombreDroga = nombreDroga
        this.precio = precio
        this.comprimidos = comprimidos
    }
}

const medicamento1 = new Medicamento("penoral", "Fenoximetilpenicilina", 1000, 18)
const medicamento2 = new Medicamento("amoxolduo", "Amoxicilina", 500, 10)
const medicamento3 = new Medicamento("clamoxolduo","AmoxicilinayÁcidoclavulánico", 600, 10)
const medicamento4 = new Medicamento("cotrimox","SulfametoxazolyTrimetoprima", 300, 20)
const medicamento5 = new Medicamento("azitral","Azitromicina", 450, 6)

const medicamentos = [medicamento1, medicamento2, medicamento3, medicamento4, medicamento5]

let nombreABuscar = prompt("Ingrese nombre comercial del antibiotico que busca")

console.log(medicamentos.find(medicamento => medicamento.nombreComercial == nombreABuscar))