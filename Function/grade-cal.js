//student score and total possible score
//15/20 -> You got a C (75%)!

let studentScore=10
let totalScore=100

let gradeCalculator =function(a,b) {
    let c=a/b*100;
    let d;
    if (c>=90) {
        d='A'
    }
    else if (c>=80) {
        d='B'
    }
    else if  (c>=70) {
        d='C'
    }
    else if  (c>=60) {
        d='D'
    }
    else {
        d='E'
    }
    return `${a}/${b} -> You got a ${d} (${c})!`
}

let grade=gradeCalculator(studentScore,totalScore)
console.log(grade)