const API_KEY = "7c3f02b150msh6c7e71d55db7657p19511fjsne90d8afc3de6"; // Set the API key here


const now = new Date();
const setNextQuote = async () => {
    // Download a random quote from the API based on options
    const newQuoteRes = await fetch(
        "https://quotel-quotes.p.rapidapi.com/quotes/random",
        options
    );
    const newQuote = await newQuoteRes.json();
    // Set to LocalStorage
    if (!newQuote.quote) {
        alert("An error occurred, please check the console");
        console.log(newQuote);
        return;
    }
    localStorage.setItem("quote", newQuote.quote);
    localStorage.setItem("quote-author", newQuote.name);
};

function getDivider(quote) {
    // Divide a quote by the first word break after the 25th character
    let i = 25;

    let c = quote[i];
    while (![" "].includes(c) && i < quote.length) {
        c = quote[i + 1];
        i++;
    }

    let clippedQuote = quote.slice(0, i);
    let rest = quote.slice(i, quote.length);

    return [clippedQuote, rest];
}

const getStatsStatement = () => {
    if (onHomePage) {
        return `You've visited <span class="standout">${visitCount}</span> time${
            visitCount !== 1 ? "s" : ""
        } today, spending <span class="standout">${visitTime}</span> minute${
            visitTime !== "1.00" ? "s" : ""
        }. Was it really worth it?`;
    } else {
        return `<span class="standout">${visitCount}</span>t, <span class="standout">${visitTime}</span>m`;
    }
};

const getTopics = () => {
    let h = now.getHours();

    let periods = [];
    for (let [period, time] of Object.entries(PERIODS)) {
        if (time[0] <= h && h < time[1]) {
            periods.push(period);
        }
    }

    let topicIds = [];
    for (let period of periods) {
        topicIds = topicIds.concat(TOPICS[period]);
    }
    return JSON.stringify(topicIds);
};