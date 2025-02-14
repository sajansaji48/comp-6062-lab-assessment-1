console.log();
const studentFullName = 'Sajan Saji';
const studentNumber = '1190959';
const result= studentFullName + '-' + studentNumber;
console.log(result)
let headerContent = document.querySelector(".message");
headerContent.innerHTML=result;
headerContent.classList.add("headingPrimary")