let periodsEl = document.querySelector("#periods")
let topicsEl = document.querySelector("#topics")
const AVAILABLE_TOPICS = [
    {
        "id": 86,
        "name": "Science"
    },
    {
        "id": 27,
        "name": "Fitness"
    },
    {
        "id": 26,
        "name": "Finance"
    },
    {
        "id": 39,
        "name": "History"
    },
    {
        "id": 94,
        "name": "Time"
    },
    {
        "id": 64,
        "name": "Christmas"
    },
    {
        "id": 69,
        "name": "Saint"
    },
    {
        "id": 112,
        "name": "Technology"
    },
    {
        "id": 77,
        "name": "Thanksgiving"
    },
    {
        "id": 81,
        "name": "Pet"
    },
    {
        "id": 82,
        "name": "Sympathy"
    },
    {
        "id": 83,
        "name": "Wedding"
    },
    {
        "id": 91,
        "name": "Politics"
    },
    {
        "id": 105,
        "name": "Marriage"
    },
    {
        "id": 110,
        "name": "Sports"
    },
    {
        "id": 99,
        "name": "Money"
    },
    {
        "id": 1,
        "name": "Father"
    },
    {
        "id": 92,
        "name": "Strength"
    },
    {
        "id": 54,
        "name": "Family"
    },
    {
        "id": 68,
        "name": "Mother"
    },
    {
        "id": 14,
        "name": "Imagination"
    },
    {
        "id": 74,
        "name": "Valentine"
    },
    {
        "id": 15,
        "name": "Environmental"
    },
    {
        "id": 43,
        "name": "Design"
    },
    {
        "id": 51,
        "name": "Humor"
    },
    {
        "id": 3,
        "name": "Gardening"
    },
    {
        "id": 88,
        "name": "Patience"
    },
    {
        "id": 59,
        "name": "Equality"
    },
    {
        "id": 67,
        "name": "Memorial"
    },
    {
        "id": 111,
        "name": "Respect"
    },
    {
        "id": 76,
        "name": "Moving"
    },
    {
        "id": 102,
        "name": "Religion"
    },
    {
        "id": 38,
        "name": "Anger"
    },
    {
        "id": 40,
        "name": "Age"
    },
    {
        "id": 107,
        "name": "Men"
    },
    {
        "id": 7,
        "name": "Forgiveness"
    },
    {
        "id": 52,
        "name": "Intelligence"
    },
    {
        "id": 50,
        "name": "Home"
    },
    {
        "id": 49,
        "name": "Computers"
    },
    {
        "id": 78,
        "name": "Teen"
    },
    {
        "id": 101,
        "name": "Positive"
    },
    {
        "id": 106,
        "name": "Truth"
    },
    {
        "id": 97,
        "name": "Travel"
    },
    {
        "id": 100,
        "name": "Wisdom"
    },
    {
        "id": 80,
        "name": "Patriotism"
    },
    {
        "id": 17,
        "name": "Best"
    },
    {
        "id": 58,
        "name": "Great"
    },
    {
        "id": 33,
        "name": "Hope"
    },
    {
        "id": 36,
        "name": "Dreams"
    },
    {
        "id": 35,
        "name": "Chance"
    },
    {
        "id": 34,
        "name": "Knowledge"
    },
    {
        "id": 85,
        "name": "Power"
    },
    {
        "id": 103,
        "name": "Women"
    },
    {
        "id": 13,
        "name": "Dating"
    },
    {
        "id": 87,
        "name": "Society"
    },
    {
        "id": 21,
        "name": "Amazing"
    },
    {
        "id": 18,
        "name": "God"
    },
    {
        "id": 57,
        "name": "Diet"
    },
    {
        "id": 89,
        "name": "Relationship"
    },
    {
        "id": 53,
        "name": "Beauty"
    },
    {
        "id": 95,
        "name": "Teacher"
    },
    {
        "id": 79,
        "name": "Parenting"
    },
    {
        "id": 73,
        "name": "top100"
    },
    {
        "id": 45,
        "name": "Future"
    },
    {
        "id": 24,
        "name": "Happiness"
    },
    {
        "id": 109,
        "name": "Trust"
    },
    {
        "id": 16,
        "name": "Independence"
    },
    {
        "id": 19,
        "name": "Freedom"
    },
    {
        "id": 56,
        "name": "Good"
    },
    {
        "id": 84,
        "name": "Thankful"
    },
    {
        "id": 10,
        "name": "Anniversary"
    },
    {
        "id": 98,
        "name": "Morning"
    },
    {
        "id": 46,
        "name": "Attitude"
    },
    {
        "id": 8,
        "name": "Brainy"
    },
    {
        "id": 62,
        "name": "Faith"
    },
    {
        "id": 108,
        "name": "Mom"
    },
    {
        "id": 37,
        "name": "Art"
    },
    {
        "id": 61,
        "name": "Learning"
    },
    {
        "id": 55,
        "name": "Famous"
    },
    {
        "id": 4,
        "name": "Graduation"
    },
    {
        "id": 25,
        "name": "Alone"
    },
    {
        "id": 2,
        "name": "Easter"
    },
    {
        "id": 23,
        "name": "Food"
    },
    {
        "id": 5,
        "name": "Car"
    },
    {
        "id": 96,
        "name": "Medical"
    },
    {
        "id": 20,
        "name": "Fear"
    },
    {
        "id": 11,
        "name": "Government"
    },
    {
        "id": 22,
        "name": "Communication"
    },
    {
        "id": 28,
        "name": "Birthday"
    },
    {
        "id": 30,
        "name": "Change"
    },
    {
        "id": 31,
        "name": "Health"
    },
    {
        "id": 48,
        "name": "Leadership"
    },
    {
        "id": 44,
        "name": "Dad"
    },
    {
        "id": 72,
        "name": "popular"
    },
    {
        "id": 114,
        "name": "Nature"
    },
    {
        "id": 47,
        "name": "Failure"
    },
    {
        "id": 65,
        "name": "Death"
    },
    {
        "id": 113,
        "name": "Smile"
    },
    {
        "id": 70,
        "name": "New"
    },
    {
        "id": 71,
        "name": "Veterans"
    },
    {
        "id": 29,
        "name": "Cool"
    },
    {
        "id": 41,
        "name": "Courage"
    },
    {
        "id": 93,
        "name": "Success"
    },
    {
        "id": 60,
        "name": "Funny"
    },
    {
        "id": 90,
        "name": "Romantic"
    },
    {
        "id": 104,
        "name": "Peace"
    },
    {
        "id": 115,
        "name": "Movies"
    },
    {
        "id": 120,
        "name": "Space"
    },
    {
        "id": 63,
        "name": "Business"
    },
    {
        "id": 122,
        "name": "Love"
    },
    {
        "id": 124,
        "name": "Life"
    },
    {
        "id": 118,
        "name": "Work"
    },
    {
        "id": 42,
        "name": "Architecture"
    },
    {
        "id": 9,
        "name": "Experience"
    },
    {
        "id": 32,
        "name": "Friendship"
    },
    {
        "id": 6,
        "name": "Jealousy"
    },
    {
        "id": 123,
        "name": "War"
    },
    {
        "id": 66,
        "name": "Education"
    },
    {
        "id": 119,
        "name": "Music"
    },
    {
        "id": 117,
        "name": "Poetry"
    },
    {
        "id": 75,
        "name": "Motivational"
    },
    {
        "id": 12,
        "name": "Inspirational"
    },
    {
        "id": 121,
        "name": "Legal"
    },
    {
        "id": 116,
        "name": "Sad"
    }
]
let periods;
chrome.storage.sync.get(["topics", "periods"]).then(result => {
    periods = JSON.parse(result.periods || "{}")
    const topics = JSON.parse(result.topics || "{}")

    let el;
    for (let p in periods) {
        el = document.createElement('p')
        el.innerHTML = `
            <h5>${p}</h5>
<div class="input-group" style="margin-bottom: 10px;">
    <span class="input-group-text">From:</span>
    <input name="from" value="${periods[p][0]}" class="form-control" type="text"/>
</div>
<div class="input-group" style="margin-bottom: 20px;">
<span class="input-group-text">To:</span>
<input name="to" value="${periods[p][1]}" class="form-control" type="text"/>
</div>
`
        periodsEl.appendChild(el)

        el = document.createElement("div")
        el.id = p
        el.innerHTML = `<h2>${p}</h2>`
        topicsEl.appendChild(el)
    }
    AVAILABLE_TOPICS.forEach(t => {
        for (let period in periods) {
            let periodEl = topicsEl.querySelector(`#${period}`)
            el = document.createElement('p')
            el.textContent = t.name
            el.innerHTML = `<div class="form-check" >
<input type="checkbox" class="form-check-input" ${topics[period] && topics[period].includes(t.id) ? 'checked' : ''}/> 
<label class="form-check-label">${el.innerHTML}</label>
</div>`
            periodEl.appendChild(el)
        }
    })

    document.querySelector("#update").onclick = () => {
        let from, to, name;
        for (let p of periodsEl.childNodes) {
            name = p.querySelector("h5").textContent;
            [from, to] = p.querySelectorAll('input');
            [from, to] = [Number.parseInt(from.value), Number.parseInt(to.value)];
            periods[name] = [from, to]
        }
        let newPeriod = document.querySelector("#new-period").value
        let newFrom = Number.parseInt(document.querySelector("#new-from").value)
        let newTo = Number.parseInt(document.querySelector("#new-to").value);

        let new_ = newPeriod && newFrom && newTo;
        if (new_) {
            periods[newPeriod] = [newFrom, newTo]
        }
        chrome.storage.sync.set({periods: JSON.stringify(periods)}).then(() => new_ && window.location.reload())
    }
})


document.onchange = () => {
    let topics = {}
    for (let period in periods) {
        let periodEl = topicsEl.querySelector(`#${period}`)
        Array.from(periodEl.children).slice(1).forEach((topic, index) => {
            if (topic.querySelector('input[type=checkbox]').checked) {
                if (topics[period]) {
                    topics[period].push(AVAILABLE_TOPICS[index].id)
                } else {
                    topics[period] = [AVAILABLE_TOPICS[index].id]
                }
            }
        })
    }
    chrome.storage.sync.set({topics: JSON.stringify(topics), periods: JSON.stringify(periods)})
}