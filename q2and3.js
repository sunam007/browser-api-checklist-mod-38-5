const promptAlert = () => {
  const numberField = prompt("Give a Positive number");
  const number = parseFloat(numberField);
  const sum = number + 200;
  alert(`Sum = ${sum}`);
};

const redirect = () => {
  const decision = confirm("Do you want to go to Google");
  if (decision === true) {
    window.location.href = "https://www.google.com";
  } else {
    alert("not found 404");
  }
};
