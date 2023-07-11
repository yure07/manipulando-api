async function getApi() {
    return fetch('https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI')
    .then((response) => response.json())
    .then((data) => console.log(data))
}

function askAction(){
    let askToMake = prompt('O que quer fazer?\nAdicionar Carro.\nDeletar Carro.\nEncerrar Programa.')
    switch (askToMake) {
        case 'Adicionar Carro':
            addCar()
            break;
        case 'Deletar Carro':
            deleteCarUser()
            break;
        case 'Encerrar Programa':
            getApi()
            break;
        default:
            alert('Não posso fazer isso')
            askAction()
            break;
    }
}
askAction()

async function getApiId(id: number) {
    return fetch(`https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
}

async function postApi(url: string, car: object) {
    const response = await fetch('https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI',{
        method: 'POST',
        cache: 'no-cache',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify(car),
        referrerPolicy: 'no-referrer',
    })
    return response.json()
}

async function putApi(id:number, car: object) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI/${id}`,{
        method: 'PUT',
        cache: 'no-cache',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(car),
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    })
    return response.json()
}

async function deleteApi(id:number) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI/${id}`,{
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers:{
            'Content-type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    })
    return response.json()
}

class Car{
    marca: string
    modelo: string
    categoria: string
    ano: number
    quilometragem: number
    valor: number

    constructor(marca:string, modelo:string, categoria:string, ano:number, quilometragem:number, valor:number){
        this.marca = marca,
        this.modelo = modelo,
        this.categoria = categoria
        this.ano = ano,
        this.quilometragem = quilometragem,
        this.valor = valor
    }
}

/*let car1 = new Car('volkswagen', 'nivus', 'suv compacto', 2019, 32420, 87999)
postApi('https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI', car1)*/

/*let updateCelt = new Car('chevrolet', 'colbat', 'sedã', 2013, 25670, 42000)
putApi(1, updateCelt)

let updateNivus = new Car('volkswagen', 'golf', 'coupé', 2015, 54800, 160000)
putApi(3, updateNivus)*/

/*let car4 = new Car('peugeot', '208', 'coupé', 2008, 23870, 21900)
postApi('https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI', car4)*/
//deleteApi(6)

function getModelById(id: number){
    let carById = {marca:'', modelo:'', ano:0, valor:0} 
    const response = fetch(`https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI/${id}`)
    .then((response) => response.json())
    .then((data) => {
        carById.marca = data.marca
        carById.modelo = data.modelo
        carById.ano = data.ano
        carById.valor = data.valor
        console.log(carById)
    })
}
//getModelById(3)


// marca, modelo, categoria, ano, quilometragem, valor
function addCar(){
    let marca:string = prompt('Digite a MARCA do carro')!
    let modelo:string = prompt('Diga o MODELO do carro')!
    let categoria:string = prompt('Diga a CATEGORIA do carro')!
    let ano:number = parseInt(prompt('Diga o ANO do carro')!)
    let quilometragem:number = parseInt(prompt('Diga a QUILOMETRAGEM do carro')!)
    let valor:number = parseInt(prompt('Diga o VALOR do carro')!)

    let carToAd = {
        marca: marca,
        modelo: modelo,
        categoria: categoria,
        ano: ano,
        quilometragem: quilometragem,
        valor: valor
    }
    postApi(`https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI`, carToAd)
    getApi()
}

let carChangePrice = new Car('volkswagen', 'golf', 'coupé', 2015, 54800, 23780)
function changePrice(id:number, carObj:object) {
    putApi(id, carObj)
    //getApi() se quiser ver já atualizado, tenho que chamar fora da função, pois o putApi é uma Promise
}
//changePrice(3, carChangePrice)

function deleteCarUser(){
    let idCar = parseInt(prompt('Digite o ID do carro que deseja excluir')!)
    deleteApi(idCar)
    //getApi()
}
//deleteCarUser()