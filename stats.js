TimeMe.initialize({
    currentPageName: "my-home-page", // current page
    idleTimeoutInSeconds: 5, // stop recording time due to inactivity
});

TimeMe.getTimeOnCurrentPageInSeconds();

// Get statistics
const epoch = new Date(null);
const dayId = Math.ceil((now - epoch) / (1000 * 60 * 60 * 24));
const day = parseInt(localStorage.getItem("last-day"));
let visitCount = 0;
// visitTime is a string as toFixed returns a String
let visitTime = "0.00";
if (day && day === dayId) {
  visitCount = parseInt(localStorage.getItem("visit-count")) || 0;
  visitTime =
    parseFloat(localStorage.getItem("visit-time")).toFixed(2)|| "0.00";
}

// Report stats
let stats = document.createElement("div");
stats.classList.add("stats");
stats.innerHTML = getStatsStatement();

if (onHomePage) {
  stats.innerHTML += `<div class="author">Quote from ${author}</div>`;
  logo.parentElement.parentElement.prepend(stats);
} else {
  stats.classList.add("stats-small");
  holder = document.createElement("div");
  holder.append(stats);
  holder.append(contentHolder);
  logo.parentElement.prepend(holder);
  logo.remove();
}

/* Work for next visit */
// Update stats before window unloads
window.onbeforeunload = () => {
  localStorage.setItem("last-day", dayId);
  localStorage.setItem("visit-count", visitCount + 1);
  localStorage.setItem(
    "visit-time",
    parseFloat(visitTime) + TimeMe.getTimeOnCurrentPageInSeconds() / 60
  );
};