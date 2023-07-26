// this code is for showing real-time on page

printTime() {
  setInterval(() => {
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    document.getElementById('time').innerHTML = hours + ":" + mins + ":" + secs;
  }, 1000);
}