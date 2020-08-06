class Vehiculo {
    constructor(marca, modelo, precio) {
        this.marca = marca,
            this.modelo = modelo,
            this.precio = precio
    }
}
class Auto extends Vehiculo {
    constructor(marca, modelo, puertas, precio) {
        super(marca, modelo, precio);
        this.puertas = puertas;
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, cilindrada, precio) {
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;
    }
}

const vehiculosArray = [{
    marca: "Peugeot",
    modelo: "206",
    puertas: 4,
    precio: 200000.0,
},
{
    marca: "Honda",
    modelo: "Titan",
    cilindrada: '125c',
    precio: 60000.0,
},
{
    marca: "Peugeot",
    modelo: "208",
    puertas: 5,
    precio: 250000.0,
},
{
    marca: "Yamaha",
    modelo: "YBR",
    cilindrada: '160c',
    precio: 80500.5,
},
];
let arrayVehiculos = [];
function cargarVehiculos() {
    vehiculosArray.forEach((vehiculo) => {
        if (vehiculo.puertas) {
            arrayVehiculos.push(
                new Auto(
                    vehiculo.marca,
                    vehiculo.modelo,
                    vehiculo.puertas,
                    vehiculo.precio
                )
            );
        } else if (vehiculo.cilindrada) {
            arrayVehiculos.push(
                new Moto(
                    vehiculo.marca,
                    vehiculo.modelo,
                    vehiculo.cilindrada,
                    vehiculo.precio
                )
            );
        };
    });
}

function convertToPrice(num) {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(num);
}

function printCars(arrayVehiculos) {
    arrayVehiculos.forEach(vehiculo => {
        if (vehiculo.puertas) {
            console.log(
                `Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Puertas: ${vehiculo.puertas} // Precio:  ${convertToPrice(vehiculo.precio)}`
            );
        } else if (vehiculo.cilindrada) {
            console.log(
                `Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Cilindrada: ${vehiculo.cilindrada} // Precio:  ${convertToPrice(vehiculo.precio)}`
            );
        }

    })
};


function vehiculoMasCaro(arrayVehiculos) {
    let vehiculos = vehiculosOrdenadosDeMayorAMenor(arrayVehiculos);
    console.log(`Vehículo más caro : ${vehiculos[0].marca} ${vehiculos[0].modelo}`);
};
function vehiculoMasBarato(arrayVehiculos) {
    let vehiculos = vehiculosOrdenadosDeMayorAMenor(arrayVehiculos);
    let largoVehiculos = vehiculos.length - 1
    console.log(`Vehículo más barato : ${vehiculos[largoVehiculos].marca} ${vehiculos[largoVehiculos].modelo}`);

};
function vehiculosOrdenadosDeMayorAMenor(arrayVehiculos) {
    let vehiculosOrdenados = arrayVehiculos.sort((a, b) => b.precio - a.precio);
    return vehiculosOrdenados
}

function mostrarVehiculosOrdenados() {
    console.log(`Vehículos ordenados por precio de mayor a menor:`);
    vehiculosOrdenadosDeMayorAMenor(arrayVehiculos).forEach(vehiculo => {
        console.log(`${vehiculo.marca} ${vehiculo.modelo}`);
    });
};


function vehiculoConLetraEnModelo(letra, arrayVehiculos) {
    arrayVehiculos.forEach(vehiculo => {
        if (vehiculo.marca.toLowerCase().includes(letra.toLowerCase())) {
            console.log(`Vehículo que contiene en el modelo la letra ‘${letra}’: ${vehiculo.marca} ${vehiculo.modelo} ${convertToPrice(vehiculo.precio)}`);
        }
    })
};

const barra = '============================='
function main() {
    cargarVehiculos();
    printCars(arrayVehiculos);
    console.log(barra);
    vehiculoMasCaro(arrayVehiculos);
    vehiculoMasBarato(arrayVehiculos);
    vehiculoConLetraEnModelo("Y", arrayVehiculos);
    console.log(barra);
    mostrarVehiculosOrdenados();
};

main();