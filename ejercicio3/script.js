//ejercicio3

//Función para compresión de strings usando el conteo de los caracteres repetitivos consecutivos
function myMethod(str){
    let count=1;
    let result="";
    for(let i=0; i<str.length; i++){
        if(str[i]===str[i+1]){
            count++;
        }else{
            result +=str[i]+count;
            count=1;
        }
    }
    return result;
}


//Prueba para validar el funcionamiento de la función myMethod
console.log(myMethod('aabcccccaaa')) // «a2b1c5a3».