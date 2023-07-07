async function getApi() {
    return fetch('https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI')
    .then((response) => response.json())
    .then((data) => console.log(data))
}

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
getApi()