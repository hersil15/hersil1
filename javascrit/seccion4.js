
//Arrays y metodos de array
var frutas = ["Manzana", "Pera", "Uva", "Sandia"];
console.log(frutas[1]);
//Lista de compras
var lista = [
  ["Manzana", "Pera", "Uva", "Sandia"],
  ["carne molida", "pollo", "pescado", "cerdo"],
  ["leche", "jugo", "agua", "refresco"],
  [["papas", "zanahorias"], ["cebolla", "tomate"]]
];

console.log(lista[3][0][1])


inventario = [
  {
    categoria: "Frutas",
    productos: [
      {
        nombre: "Manzana",
        precio: 1.5,
        cantidad: 10
      },
      {
        nombre: "Pera",
        precio: 2.5,
        cantidad: 5
      }
    ]
  },
  {
    categoria: "Carnes",
    productos: [
      {
        nombre: "Pollo",
        precio: 3.5,
        cantidad: 20
      },
      {
        nombre: "Res",
        precio: 5.5,
        cantidad: 15
      }
    ]
  },
  {
    categoria: "Lacteos",
    productos: [
      {
        nombre: "Leche",
        precio: 1.5,
        cantidad: 10
      },
      {
        nombre: "Queso",
        tipos:[
          {
            nombre: "Pecorino",
            precio: 2.5,
            cantidad: 5
          },
          {
            nombre: "Mozarella",
            precio: 3.5,
            cantidad: 10
          }
        ]
      }
    ]
  }
]

console.log(inventario[2].productos[1].tipos[0].nombre)

const inventario_mercado = [
  {
    categoria: "Frutas",
    subcategorias: [
      {
        tipo: "Manzanas",
        marcas: [
          {
            nombre: "Apple Farms",
            origen: "EE.UU.",
            productos: [
              {
                nombre: "Manzana Gala",
                precio: 1.2,
                cantidad: 30,
                proveedor: {
                  nombre: "Fresh Import",
                  ubicacion: "California, EE.UU.",
                  contacto: "import_fresh@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  humedad: "90%"
                },
                fechaIngreso: "2023-09-10",
                vidaUtilDias: 20,
                certificaciones: ["Orgánico", "Libre de pesticidas"],
                embalaje: "Caja de cartón con separadores"
              },
              {
                nombre: "Manzana Fuji",
                precio: 1.5,
                cantidad: 25,
                proveedor: {
                  nombre: "Fresh Import",
                  ubicacion: "California, EE.UU.",
                  contacto: "import_fresh@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  humedad: "85%"
                },
                fechaIngreso: "2023-09-15",
                vidaUtilDias: 25,
                certificaciones: ["Orgánico", "GMO-Free"],
                embalaje: "Empaque biodegradable"
              }
            ]
          },
          {
            nombre: "EcoFruit",
            origen: "Chile",
            productos: [
              {
                nombre: "Manzana Verde",
                precio: 1.3,
                cantidad: 40,
                proveedor: {
                  nombre: "Green Supply",
                  ubicacion: "Santiago, Chile",
                  contacto: "greensupply@example.cl"
                },
                condiciones: {
                  temperatura: "3°C",
                  humedad: "80%"
                },
                fechaIngreso: "2023-09-08",
                vidaUtilDias: 30,
                certificaciones: ["Fair Trade", "Orgánico"],
                embalaje: "Bolsa de papel reciclado"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    categoria: "Carnes",
    subcategorias: [
      {
        tipo: "Aves",
        marcas: [
          {
            nombre: "FreeRange Poultry",
            origen: "Brasil",
            productos: [
              {
                nombre: "Pollo Entero",
                precio: 4.5,
                cantidad: 50,
                proveedor: {
                  nombre: "Granjas Unidas",
                  ubicacion: "São Paulo, Brasil",
                  contacto: "granjas_unidas@example.com"
                },
                condiciones: {
                  temperatura: "-2°C",
                  embalaje: "Empaque al vacío",
                  fechaCaducidad: "2023-10-05"
                },
                fechaIngreso: "2023-09-10",
                vidaUtilDias: 45,
                pesoPromedio: "1.2 kg",
                certificaciones: ["Libre de hormonas", "Bienestar animal"]
              }
            ]
          }
        ]
      },
      {
        tipo: "Res",
        marcas: [
          {
            nombre: "Bovino Premium",
            origen: "Argentina",
            productos: [
              {
                nombre: "Corte de Res Angus",
                precio: 10.0,
                cantidad: 20,
                proveedor: {
                  nombre: "Exportadora Bovino",
                  ubicacion: "Buenos Aires, Argentina",
                  contacto: "exportadora_bovino@example.com"
                },
                condiciones: {
                  temperatura: "-3°C",
                  embalaje: "Empaque al vacío"
                },
                fechaIngreso: "2023-09-12",
                vidaUtilDias: 30,
                pesoPromedio: "0.8 kg",
                certificaciones: ["GMO-Free", "Alta calidad"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    categoria: "Lácteos",
    subcategorias: [
      {
        tipo: "Leche",
        marcas: [
          {
            nombre: "Lácteos del Valle",
            origen: "México",
            productos: [
              {
                nombre: "Leche Entera",
                precio: 2.0,
                cantidad: 100,
                proveedor: {
                  nombre: "Distribuidora Valle",
                  ubicacion: "Ciudad de México, México",
                  contacto: "distribuidora_valle@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  embalaje: "Envase de cartón reciclable"
                },
                fechaIngreso: "2023-09-18",
                vidaUtilDias: 10,
                tipo: "Entera",
                certificaciones: ["Certificado orgánico"]
              }
            ]
          }
        ]
      },
      {
        tipo: "Quesos",
        marcas: [
          {
            nombre: "Quesería Tradicional",
            origen: "Francia",
            productos: [
              {
                nombre: "Queso Brie",
                precio: 8.5,
                cantidad: 15,
                proveedor: {
                  nombre: "Quesería Tradicional",
                  ubicacion: "París, Francia",
                  contacto: "queso_france@example.fr"
                },
                condiciones: {
                  temperatura: "5°C",
                  humedad: "75%"
                },
                fechaIngreso: "2023-09-20",
                vidaUtilDias: 60,
                origenLeche: "Vaca",
                certificaciones: ["Appellation d'origine contrôlée (AOC)"],
                embalaje: "Caja de madera"
              },
              {
                nombre: "Queso Roquefort",
                precio: 12.0,
                cantidad: 10,
                proveedor: {
                  nombre: "Quesería Tradicional",
                  ubicacion: "París, Francia",
                  contacto: "queso_france@example.fr"
                },
                condiciones: {
                  temperatura: "6°C",
                  humedad: "80%"
                },
                fechaIngreso: "2023-09-21",
                vidaUtilDias: 90,
                origenLeche: "Oveja",
                certificaciones: ["Appellation d'origine contrôlée (AOC)"],
                embalaje: "Empaque de cera ecológica"
              }
            ]
          }
        ]
      }
    ]
  }
];

/*
  Ejercicios de selección de datos de un array de objetos
  1. Imprime el nombre de la marca de manzanas que proviene de Chile
  2. Imprime el precio de la manzana Fuji
  3. Imprime el array de productos de la marca de manzanas que proviene de Chile
  4. Imprime el nombre de la marca de pollo que proviene de Brasil
  5. Imprime el precio del pollo entero
  6. Imprime el proveedor (objeto) de leche de méxico
  7. Imprime la vida util del queso de Oveja
*/
console.log("Manzana proveniente Chile: " + inventario_mercado[0].subcategorias[0].marcas[1].productos[0].nombre)
console.log("Precio de la Manzana Fuji: " + inventario_mercado[0].subcategorias[0].marcas[0].productos[1].precio)
console.log("Productos de la Marca de Manzanas proveniente de Chile: " + inventario_mercado[0].subcategorias[0].marcas[1].productos[0])
console.log("Marca de Pollo proveniente de Brasil: " + inventario_mercado[1].subcategorias[0].marcas[0].nombre)
console.log("Precio del Pollo Entero: " + inventario_mercado[1].subcategorias[0].marcas[0].productos[0].precio)
console.log("Proveedor de México: " + inventario_mercado[2].subcategorias[0].marcas[0])
console.log("Vida Útil del Queso de Oveja: " + inventario_mercado[2].subcategorias[1].marcas[0].productos[1].vidaUtilDias)

/*
  Ejercicios de selección de datos de un array de objetos
  1. Imprime el nombre de la marca de manzanas que proviene de Chile
  2. Imprime el precio de la manzana Fuji
  3. Imprime el array de productos de la marca de manzanas que proviene de Chile
  4. Imprime el nombre de la marca de pollo que proviene de Brasil
  5. Imprime el precio del pollo entero
  6. Imprime el proveedor (objeto) de leche de méxico
  7. Imprime la vida util del queso de Oveja
*/

//Metodos de array
frutas = ["Manzana", "Pera", "Uva", "Sandia"];
//Longitud del array
console.log(frutas.length);
//Agregar un elemento al final del array
frutas.push("Mango");
//Agregar un elemento al inicio del array
frutas.unshift("Fresa");
//Eliminar el ultimo elemento del array
frutas.pop();
//Eliminar el primer elemento del array
frutas.shift();
//Eliminar un elemento en una posicion especifica
frutas.splice(1, 1);
//Eliminar un elemento en una posicion especifica y agregar un nuevo elemento
frutas.splice(1, 1, "Uva");
//Concatenar dos arrays
var frutas2 = ["Pera", "Kiwi"];
frutas = frutas.concat(frutas2);
console.log(frutas);
// [Manzana, Uva, Sandia, Pera, Kiwi]
//Ordenar un array
console.log(frutas.sort());
//[Kiwi, Manzana, Pera, Sandia, Uva]
//Invertir un array
console.log(frutas.reverse());
//[Uva, Sandia, Pera, Manzana, Kiwi]
//Buscar un elemento en un array (devuelve la posicion)
console.log(frutas.indexOf("Uva"));
//Buscar un elemento en un array (devuelve true o false)
console.log(frutas.includes("Uva"));
//cortar un array
console.log(frutas.slice(1, 3));
// [Sandia, Pera] (no incluye el ultimo elemento)

//Curiosidad, los strings tambien pueden ser tratados como arrays
var texto = "Hola, soy un texto";
console.log(texto[4]);

//Callback
// Es una función que se pasa como argumento a otra función

function calcular_descuento(precio, descuento){
  return precio - (precio * descuento);
}

function comprar(producto = "", precio = 0,  funcioncita){
  if(producto === "manzana"){
    return funcioncita(precio, 0.1);
  } else {
    return precio;
  }
}

console.log(comprar("manzana", 100, calcular_descuento));

//[Kiwi, Manzana, Pera, Sandia, Uva]
//filtrar un array
console.log(frutas.filter(
  (fruta) => fruta.length > 4)
);
//otro ejemplo de filter
console.log(frutas.filter(
  fruta => fruta.includes("a")
));

/*
  Ejercicios de metodos de arrays
  1. Crea una función que reciba un array de numeros y devuelva la suma de todos los numeros.
  2. Crea una función que reciba un array de numeros y devuelva el promedio de todos los numeros.
  3. Crea una función que reciba un array de numeros y devuelva el numero mayor.
  4. Crea una función que reciba un array de numeros y devuelva el numero menor.
  5. Crea una función que reciba un array de numeros y devuelva un array con los numeros pares.
  6. Crea una función que reciba un array de numeros y devuelva un array con los numeros impares.
  7. Crea una función que reciba un array de ciudades y devuelva un array con las ciudades que empiezan con la letra "M".
  8. Crea una función que reciba un array de nombres y verifique si el nombre "Juan" se encuentra en el array y devuelva su posicion.
*/

/**
 * Made with ❤️ by:
 * Alejandro Aguilar
 * Angélica Rivas
 * Camila Castillo
 * Herasi Silva
 */
