function apresentar(nome){
    return `Meu nome é ${nome}`
}

// Arrow function
const apresentarArrow = nome => `Meu nome é ${nome}`
const soma = (num1, num2) => num1 + num2

const somaNumPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10){
        return "somente numeros de 1 a 9"
    }
    return num1 + num2
} 