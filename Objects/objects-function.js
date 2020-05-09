//let celsius=(farhrenheit-32)*5/9
//let kelvin= celsius+173.32
let farhrenheit=32

let allTemp = function(farhrenheit) {
    celsius=(farhrenheit-32)*5/9
    kelvin= celsius+173.32
    return{
        farhrenheit: farhrenheit,
        celsius: celsius,
        kelvin: kelvin
    }
}

let tempDetail =allTemp(farhrenheit)
console.log(`All temp are: \nfarhrenheit: ${tempDetail.farhrenheit}\ncelsius: ${tempDetail.celsius}\nkelvin: ${tempDetail.kelvin}`)
console.log(tempDetail)