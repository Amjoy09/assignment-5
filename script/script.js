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

copyButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const card = event.target.closest(".card-body");
    const serviceNameElement = card.querySelector(".card-title");
    const phoneNumberElement = card.querySelector(".emergency-number");
    const serviceName = serviceNameElement.innerText;
    const phoneNumber = phoneNumberElement.innerText;

    const textToCopy = `${serviceName} — ${phoneNumber}`;
    navigator.clipboard
      .writeText(textToCopy)

      .then(() => {
        alert(`Copied: ${textToCopy}`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        alert("Copying failed. Please try again.");
      });
  });
});

const allCallButtons = document.querySelectorAll(".call-btn");
const callHistoryList = document.getElementById("callHistory");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

function addToHistory(serviceName, phoneNumber) {
  const newHistoryItem = document.createElement("li");
  
  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = now.toLocaleTimeString("en-US");
  

  const serviceInfoDiv = document.createElement("div");
  serviceInfoDiv.classList.add("flex", "flex-col", "items-start");

   
    const serviceNameSpan = document.createElement('span');
    serviceNameSpan.textContent = serviceName;
    serviceNameSpan.classList.add('font-bold', 'text-gray-900');

    
    const phoneNumberSpan = document.createElement('span');
    phoneNumberSpan.textContent = phoneNumber;
    phoneNumberSpan.classList.add('text-gray-600', 'text-sm');

    
    serviceInfoDiv.appendChild(serviceNameSpan);
    serviceInfoDiv.appendChild(phoneNumberSpan);

    
    const timeSpan = document.createElement('span');
    timeSpan.textContent = `${formattedDate} ${formattedTime}`;
    timeSpan.classList.add('text-gray-500', 'text-xs', 'whitespace-nowrap');

   
    newHistoryItem.appendChild(serviceInfoDiv);
    newHistoryItem.appendChild(timeSpan);


  newHistoryItem.classList.add(
     'bg-gray-100', 
        'p-3',      
        'mb-2',       
        'rounded-md', 
        'border-l-4', 
        'border-blue-500',
        'flex',       
        'justify-between', 
        'items-center' 
  );

 
  callHistoryList.appendChild(newHistoryItem);
}

function clearHistory() {
  
  callHistoryList.innerHTML = "";
}


allCallButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    
    const card = event.target.closest(".card-body");
    
    const serviceName = card.querySelector(".card-title").innerText;
    const phoneNumber = card.querySelector(".emergency-number").innerText;


    addToHistory(serviceName, phoneNumber);
  });
});


clearHistoryBtn.addEventListener("click", clearHistory);
