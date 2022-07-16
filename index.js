const txtSearchEl = document.getElementById("txtSearch");
const btnSearchEl = document.getElementById("btnSearch");

txtSearchEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    btnSearchEl.click();
  }
});

btnSearchEl.addEventListener("click", () => {
  let getUserInput = document.getElementById("txtSearch").value;
  ValidURL(getUserInput);
});

function ValidURL(userInput) {
  let regex =
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  if (!regex.test(userInput)) {
    if (userInput === "") {
      return;
    }
    const googleUrl = "https://www.google.com/search?q=";
    let textSearch = googleUrl + userInput;
    window.open(textSearch, "_self");
  } else if (userInput.includes("https://") || userInput.includes("http://")) {
    window.open(userInput, "_self");
  } else {
    window.open("https://" + userInput, "_self");
  }
}
