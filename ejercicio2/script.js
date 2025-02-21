//Ejercicio 2

//Función para calcular la distancia entre las 2 cadenas de texto
function distancia(str1,str2){
    let diff=0;
    let maxlength=Math.max(str1.length, str2.length);
    for(let i=0; i<maxlength; i++){
        if(str1[i] !==str2[i]){
            diff++;
        }
    }
    return diff;
}

//Pruebas para validar el funcionamiento de la función distancia
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3