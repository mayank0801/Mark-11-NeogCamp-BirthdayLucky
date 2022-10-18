const dateOfBirth = document.querySelector("#Date-Of-Birth");
const luckyNumber = document.querySelector("#lucky-Number");
const btnCheck = document.querySelector("#btn-Check");
const outputMsg = document.querySelector("#output");
const Privacy = document.querySelector(".Privacy");
const Privacy_btn = document.querySelector(".Privacy_btn");


function Check(dob, luckyNum) {
    var sum = 0;
    for (var i = 0; i < dob.length; i++) {
        sum = sum + Number(dob[i]);
    }
    if (sum % parseInt(luckyNum) === 0) {
        outputMsg.innerText = "Lucky Number";
    }
    else {
        outputMsg.innerText = "Not Lucky";
    }
}

function checkLucky() {
    var dob = dateOfBirth.value;
    dob = dob.replaceAll("-", "");
    const luckyNum = Number(luckyNumber.value);
    if(dob===""||luckyNum==="")
    {
        outputMsg.innerText="Plz Fill Both Field";
        return;
    }
    else if(luckyNum<0)
    {
        outputMsg.innerText="Lucky Number Cant be Negative";
        return;
    }
    if (dob && luckyNum) {
        Check(dob, luckyNum);
    }
    else {
        outputMsg.innerText = "Plz Fill Both Field";
    }
}


btnCheck.addEventListener("click", checkLucky);


setTimeout(function () {
    Privacy.style.display = "block";
  }, 3000);
  
  Privacy_btn.addEventListener("click", () => {
    Privacy.style.display = "none";
  });