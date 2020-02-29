// function passWord() {
//     var correctAnswer = "greenbutterfly";
//     var testV = 1;
//     var pass1 = "";
//     while (testV <= 3) {
//         if (testV === 1) {
//             pass1 = prompt('Portfolio is Private, Enter password', ' ');
//         } else {
//             pass1 =
//                 prompt('Access Denied - Password Incorrect, Please Try Again.', 'Password');
//         }
//         testV += 1;
//         if (pass1 && pass1.toLowerCase() == correctAnswer) {
//             break;
//         }
//     }
//     if (pass1 && (pass1.toLowerCase() != correctAnswer)) {
//         // history.go(-1);
//     } else {
//         alert('Correct Click ok to see portfolio!');
//         window.open('fb_billing.html', '');
//     }
//     return " ";
// }

    // THis is for the different passWord

    // function passWord() {
    // var testV = 1;
    // var pass1 = prompt('Portfolio is Private, Enter password',' ');
    // while (testV < 3) {
    // if (!pass1)
    // history.go(-1);
    // if (pass1.toLowerCase() =="fiddle") {
    // alert('Correct Click ok to see portfolio!');
    // window.open('fb_billing.html');
    // return;
    // }
    // testV+=1;
    // var pass1 =
    // prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
    // }
    // if (pass1.toLowerCase()!="password" & testV ==3)
    // history.go('home_page.html');
    // return " ";
    // }





    // 
    function passwordModal() {
        console.log("password modal trigger")
        var pass1 = document.getElementById("copperpot").value;
        console.log("pass1",pass1)

         if (pass1.toLowerCase() =="fiddle") {
        console.log("password correct") 
        window.open('fb_billing.html');

       
        } else {

        }
    }

