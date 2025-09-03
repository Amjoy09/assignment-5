
const copyBtnElements = document.getElementsByClassName("btn-copy");

for (const singleBtn of copyBtnElements) {
  singleBtn.addEventListener("click", function (event) {
    const countCopy = document.getElementById("copy-count");
    let countCopyString = countCopy.innerText;
    let copyCountNumber = parseInt(countCopyString);
    copyCountNumber++;
    countCopy.innerText = copyCountNumber++;




  });
}






const heartBtnElements = document.getElementsByClassName("card-heart");

for (const singleHeartBtn of heartBtnElements) {
  singleHeartBtn.addEventListener("click", function () {
    const heartCount = document.getElementById("heart-number");
    let heartCountString = heartCount.innerText;
    let heartCountNumber = parseInt(heartCountString);
    heartCountNumber++;

    console.log(heartCountNumber);
    heartCount.innerText = heartCountNumber;
  });
}

const callBtnElements = document.querySelectorAll(".call-btn");
const coinCounter = document.getElementById("coin-count");
const coinCounterString = coinCounter.innerText;
let coinCounterNumber = parseInt(coinCounterString);

let currentPoints = 100;
let costPerCall = 20;

for (const callBtn of callBtnElements) {
  callBtn.addEventListener("click", function () {
    if (currentPoints < costPerCall) {
      alert("Not enough points to place this call.");

      return;
    }
    currentPoints -= costPerCall;
    coinCounter.innerText = currentPoints;
  });
}


const copyButtons = document.querySelectorAll(".btn-copy");

copyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
    const card = event.target.closest('.card-body');
    const serviceNameElement = card.querySelector('.card-title');
    const phoneNumberElement = card.querySelector('.emergency-number');
    const serviceName = serviceNameElement.textContent;
    const phoneNumber = phoneNumberElement.textContent;

     const textToCopy = `${serviceName} — ${phoneNumber}`;
     navigator.clipboard.writeText(textToCopy)

     .then(() => {
                alert(`Copied: ${textToCopy}`);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                alert('Copying failed. Please try again.');



            });
        });
    })
