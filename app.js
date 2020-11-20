//Function:  Cơ bản
// function getName($name){
//     $name += " 18211TT0534";
//     return $name;

// }

// const resul = getName('Duc long');
// console.log(resul);

//Funciton nâng cao:


// // const name  =
//  getName("ho duc long")
// //console.log(name);
// function getName(name){
//     name += '18211TT0534';
//     document.getElementById('longteo').innerHTML = name;
//     //return name;
// }

function concatenate(name, age) {
    var full;
    full =  name +  age;
    return full;
 }

 function secondFunction() {
    var result;
    result = concatenate('Long ', 20);
    document.write (result );
 }