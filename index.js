function getCurrentTime() {
  setTimeout(() => {
    var datetime = new Date().toLocaleTimeString();
    console.log(datetime); // it will represent date in the console of developers tool
    document.getElementById("current-time").textContent = datetime; // represent on html page
    getCurrentTime();
  }, 1000);
}

getCurrentTime();
