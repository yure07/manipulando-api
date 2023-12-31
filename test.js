var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function getApi() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetch('https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI')
                    .then(function (response) { return response.json(); })
                    .then(function (data) { return console.log(data); })];
        });
    });
}
function askAction() {
    var askToMake = prompt('O que quer fazer?\nAdicionar Carro.\nDeletar Carro.\nEncerrar Programa.');
    switch (askToMake) {
        case 'Adicionar Carro':
            addCar();
            break;
        case 'Deletar Carro':
            deleteCarUser();
            break;
        case 'Encerrar Programa':
            getApi();
            break;
        default:
            alert('Não posso fazer isso');
            askAction();
            break;
    }
}
askAction();
function getApiId(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetch("https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI/".concat(id))
                    .then(function (response) { return response.json(); })
                    .then(function (data) { return console.log(data); })];
        });
    });
}
function postApi(url, car) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI', {
                        method: 'POST',
                        cache: 'no-cache',
                        mode: 'cors',
                        credentials: 'same-origin',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        redirect: 'follow',
                        body: JSON.stringify(car),
                        referrerPolicy: 'no-referrer',
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function putApi(id, car) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI/".concat(id), {
                        method: 'PUT',
                        cache: 'no-cache',
                        mode: 'cors',
                        credentials: 'same-origin',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(car),
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer'
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function deleteApi(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI/".concat(id), {
                        method: 'DELETE',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer',
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
var Car = /** @class */ (function () {
    function Car(marca, modelo, categoria, ano, quilometragem, valor) {
        this.marca = marca,
            this.modelo = modelo,
            this.categoria = categoria;
        this.ano = ano,
            this.quilometragem = quilometragem,
            this.valor = valor;
    }
    return Car;
}());
/*let car1 = new Car('volkswagen', 'nivus', 'suv compacto', 2019, 32420, 87999)
postApi('https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI', car1)*/
/*let updateCelt = new Car('chevrolet', 'colbat', 'sedã', 2013, 25670, 42000)
putApi(1, updateCelt)

let updateNivus = new Car('volkswagen', 'golf', 'coupé', 2015, 54800, 160000)
putApi(3, updateNivus)*/
/*let car4 = new Car('peugeot', '208', 'coupé', 2008, 23870, 21900)
postApi('https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI', car4)*/
//deleteApi(6)
function getModelById(id) {
    var carById = { marca: '', modelo: '', ano: 0, valor: 0 };
    var response = fetch("https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI/".concat(id))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        carById.marca = data.marca;
        carById.modelo = data.modelo;
        carById.ano = data.ano;
        carById.valor = data.valor;
        console.log(carById);
    });
}
//getModelById(3)
// marca, modelo, categoria, ano, quilometragem, valor
function addCar() {
    var marca = prompt('Digite a MARCA do carro');
    var modelo = prompt('Diga o MODELO do carro');
    var categoria = prompt('Diga a CATEGORIA do carro');
    var ano = parseInt(prompt('Diga o ANO do carro'));
    var quilometragem = parseInt(prompt('Diga a QUILOMETRAGEM do carro'));
    var valor = parseInt(prompt('Diga o VALOR do carro'));
    var carToAd = {
        marca: marca,
        modelo: modelo,
        categoria: categoria,
        ano: ano,
        quilometragem: quilometragem,
        valor: valor
    };
    postApi("https://apigenerator.dronahq.com/api/cBAUTSsf/carroAPI", carToAd);
    getApi();
}
var carChangePrice = new Car('volkswagen', 'golf', 'coupé', 2015, 54800, 23780);
function changePrice(id, carObj) {
    putApi(id, carObj);
    //getApi() se quiser ver já atualizado, tenho que chamar fora da função, pois o putApi é uma Promise
}
//changePrice(3, carChangePrice)
function deleteCarUser() {
    var idCar = parseInt(prompt('Digite o ID do carro que deseja excluir'));
    deleteApi(idCar);
    //getApi()
}
//deleteCarUser()
