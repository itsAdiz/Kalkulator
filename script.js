let currentDate = new Date();
let userInput = document.querySelector(".dateInput");
let displayAge = document.querySelector(".displayAge");

const flags = () => {
  if (userInput.value == '' || userInput.value == null) {
    displayAge.innerText = "😛";
    return false;
  }
  else {
    return true;
  }
};

const months = () => {
  if (flags() === true) {
    let dateObj = new Date(userInput.value);
    displayAge.innerText = `${(currentDate.getFullYear() - dateObj.getFullYear()) * 12} Months Old`;
  }
  else {
    displayAge.innerText = "Select Date";
  }
}

const days = () => {
  if (flags() === true) {
    let dateObj = new Date(userInput.value);
    let ageInMilliSec = currentDate.getTime() - dateObj.getTime();
    let ageInDays = ageInMilliSec / (1000 * 60 * 60 * 24);
    displayAge.innerText = `${Math.floor(ageInDays)} Days Old`;
  } else {
    displayAge.innerText = "Select Date";
  }
};

const expire = () => {
  if (flags() === true) {
    let dateObj = new Date(userInput.value);
    let ageInMilliSec = currentDate.getTime() - dateObj.getTime();
    let ageInDays = ageInMilliSec / (1000 * 60 * 60 * 24);
    let daysRemaining = Math.floor((66.27 * 365) - ageInDays);
    if (daysRemaining <= 0) {
      displayAge.innerText = "exceeded";
    } else {
      let deathDate = new Date(currentDate.getTime() + (daysRemaining * 24 * 60 * 60 * 1000));
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      displayAge.innerText = ` Days :${daysRemaining} Date: ${deathDate.toLocaleDateString('en-US', options)}.`;
    }
  } else {
    displayAge.innerText = "Select Date";
  }
};

const getAge = () => {
  if (flags() === true) {
    let dateObj = new Date(userInput.value);
    let today = new Date();
    let ageInMs = today.getTime() - dateObj.getTime();
    let ageInDays = ageInMs / (1000 * 3600 * 24);
    let years = Math.floor(ageInDays / 365);
    let months = Math.floor((ageInDays % 365) / 30);
    let days = Math.floor((ageInDays % 365) % 30);
    displayAge.innerText = `Age: ${years} years, ${months} months, and ${days} days`;
  } else {
    displayAge.innerText = "Select Date";
  }
}






