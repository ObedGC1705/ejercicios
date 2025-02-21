//ejercicio4

//Función reduce del prototipo Array
Array.prototype.myOwnReduce=function(callback,initialvalue){
    let acumulator=initialvalue !=undefined ? initialvalue : this[0];
    let index=initialvalue !=undefined ? 0: 1;
    for(let i=index;i<this.length;i++){
        acumulator=callback(this[i],acumulator);
    }
    return acumulator;
}

//Prueba para validar el funcionamiento de la función myOwnreduce
const array = [1,2,3,4,5];
const callback = (current, acumulator) => {
acumulator+=current; return acumulator;
}
console.log(array.myOwnReduce(callback)) // 1