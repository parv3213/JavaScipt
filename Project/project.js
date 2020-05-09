var numberOfSubjects
var subject1, subject2, subject3 = []
var options = []
var n = 0

numberOfSubjects=3
subject1=[0,1,1]
subject2=[3,2,0]
subject3=[2,0,3]

//functions

//function for 3 subjects
function threeSubjectOptions(){
        for(var x1=0; x1<=subject1.length; x1++){
        for(var x2=0; x2<=subject2.length; x2++){
            for(var x3=0; x3<=3 ; x3++){
                if (subject1[x1] && subject2[x2] && subject3[x3]){
                    options[n] = [subject1[x1],subject2[x2],subject3[x3]]
                    n++
                }
            }
        }
    }
}

//options
if (numberOfSubjects === 3)
{
    threeSubjectOptions()
    console.log(options)
}

//best for max. starting free classes 
n=0
for(x1=0;x1<=options;x1++){
    for (x2 = 0; x2 <= options[x1] ; x2++){
        if (x2 !== 0 ){
            n++
        }
    }
}
console.log(n)

