let students = [
    {name : "ali",grade : [15,16,12],}
    ,{name : "sora",grade : [13,11,19],}
    ,{name : "samir",grade : [15,16,14],}
];
    function addStudent(name,[a,b,c]){
        students.push({name :name,grade : [a,b,c],});
    }
    function calculateAveragestdent(name){
        let avg = 0;
        let k =[];
        for(let i = 0;i < students.length; i++){
            if(students[i].name === name){
                k = students[i].grade;
                for(let j= 0;j<k.length;j++){
                    avg = avg +k[j];
            
            }
            return avg/3;
        }   
        }
        return "الطالب غير موجود";
    }
function calculateAverage(){
    let avg = 0;
    let k =[];
    for(let i = 0;i < students.length; i++){
        k.push(students[i].grade);
}
for(let i = 0;i < k.length; i++){
    for(let j = 0;j < k[i].length; j++){
        avg = avg + k[i][j];
    }    
    }   
    return avg/(3*students.length);
}
function listAllStudents(){
    for(let i = 0;i < students.length; i++){
        console.log(students[i].name +" avg = " + calculateAveragestdent(students[i].name));

    }
}
function getPassingStudents(){
    for(let i = 0;i < students.length; i++){
        if (calculateAveragestdent(students[i].name) >= 10){
            console.log("The student :" + students[i].name + "pass");
        }
}
}
function getTopStudent(){
    let max_avg = 0;
    for(let i = 0;i < students.length; i++){
        if(calculateAveragestdent(students[i].name) > max_avg){
            max_avg = calculateAveragestdent(students[i].name);
        }
    }
    for(let i = 0;i < students.length; i++){
        if(calculateAveragestdent(students[i].name) === max_avg){
        console.log("TOP STUDENT :" + students[i].name );
    }
}
}
function main (){
    let loop = true;
    while(loop === true){
        let choice = Number(prompt("Hi there . Chosse one :\n 1.list for all students\n2.calculate Average\n3.add Student\n4.calculate Average stdent\n5.Passing Students\n6.Exit"));
        if(choice === 1){
            listAllStudents();
        }
        if(choice === 2){
            console.log(calculateAverage());
        }
        if(choice === 3){
            let name = (prompt("Enter the student name"));
            let a = Number(prompt("Enter the student grade a"));
            let b = Number(prompt("Enter the student grade b"));
            let c = Number(prompt("Enter the student grade c"));
            addStudent(name,[a,b,c]);
        }
        if(choice === 4){
            let name = (prompt("Enter the student name"));
            console.log(calculateAveragestdent(name));
        }
        if(choice === 5){
            getPassingStudents();
        }
        if(choice === 6){
            console.log("Thank you fr using our server.");
            loop = false;
        }
      }  
    }   
main();