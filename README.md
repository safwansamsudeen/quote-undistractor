## About me

I'm Safwan, living in South India. I'm a sophomore (10th grade) at Vikaasa World School, and I love Arc! The idea for Quote Undistractor suddenly came to me on a Wednesday night with 4 days left before the end of [Take Back Your Internet](https://browserinc.notion.site/Guidelines-Take-Back-Your-Internet-18865fe8aa084fae8dff4c8975dcdeeb), a mini-hackathon arranged by [The Browser Company, New York](https://thebrowser.company/), so I managed to pull this up over the weekend. Thanks for checking it out!

## A Boost for reducing distraction

How many times were you been working, went onto Google, and never came off? Or when you're supposed to be with family, you're staring at the screen? For the vast majority of us, such occurrences are only too frequent. In the journey of trying to combat this problem, we start off with trying to improve "self-control", and when that failed, we tried different extensions, slowly increasing in harshness - you might even have an extension that blocks you from Googling during work time.

With this Boost, I've tried to solve the problem in a much less severe, and hopefully more efficient way. Quote Undistractor merely shows you a quote whenever you browse, along with some statistics. It doesn't stop you from browsing. It doesn't make you wait for five seconds while you twiddle your thumbs impatiently. The quote is a random one, with topics based on the time of the day - customizable by the user.

The idea behind Quote Undistractor is simple but powerful - to remind you (indirectly) of your digital minimalism mindset right in the moment of weakness. Let's say you're with your kids, and you start browsing. Seeing a quote on the importance of good parenting is bound to jerk you back to the children. While working, you're not gonna read up on last night's FIFA match if you've just seen what Steve Jobs thought about working hard. You'll focus better on your lunch if trying to browse results in you learning about the importance of food.

The beauty of this method is, it's ineffective when we're browsing for "reasonable" reasons. After all, no one should feel bad about browsing about code during a dev session. Reading parenting quotes when finding out something for your kid will, in fact, make you feel good.

With almost 125 topics, you can set a list of topics from which quotes would appear for each "period" of your typical day. For example, let's say I want to work from 8 to 12 morning, and 2 to 6 evening. I might set that period to topics from motivational (ID 75) and technology (ID 112). The IDs for the topics can be found in `topics.json`. Read the installation instructions to know how to configure them.

As an additional push in case your conscience manages to defend the first blow, the Boost also displays how many times you've visited Google on that day and how many minutes you've spent on it. After you actually search for something, you'll only see a clipped portion of the quote along with the statistics. I hope this will encourage curious users to click the clipped portion, which will bring them back to the Google search page and allow them to read the whole quote.

For more details, watch a [video demonstration](https://app.box.com/s/868otooovb86u6lagl6scwxgbocs666q).

## Attribution

This Boost uses the excellent [Quotel - Quotes API](https://rapidapi.com/skjaldbaka17/api/quotel-quotes). The Free plan allows 100 requests/day: however, Þórður Ágústsson, the owner of the API has kindly offered me 4000 requests/day for free until the end of Take Back Your Internet.

If you're a non-developer, feel free to try out our API using the installation instructions below until the 20th of December, 2022. After that, you'll have to create a free RapidAPI account and subscribe to Quotel - Quotes, allowing you 100 quotes/day. Using my API key, every user can use up to 30 quotes every day.

If you are a developer (or a brave adventurer), please follow the API setup instructions below to immediately access 100 quotes/day. You could use my plan too (the default), but it'd be much better if you could set up your own - we don't want to prey on the kindness of Þórður Ágústsson (thanks a lot!).

## Installation

1. Download and add the Boost to Arc by creating an Inject Boost and copying over the contents of `content.js` and `styles.css`. `topics.json` is just for your reference, you can download it if you like, alternatively, you can view the topics in GitHub itself (more info on topics in step 4). Set the website of the Boost to "google.com", along with ensuring the Boost runs after the page loads or when the page idles.
2. Open `topics.json`, where there's a list of topics along with their IDs. Choose the topics you want and copy over their IDs.
3. Modify the variables in `content.js` to reflect your choice of topics and periods. Add, modify, or remove periods as you like. For each period, put all the IDs in square brackets after a colon after your chosen name of the period. The IDs should be separated with a comma, and each line should end with a common. for example, here, for the "work" period, quotes from topic number 75 (motivation, you can check this out in `topics.json`) will appear on the Google homepage.

```js
const TOPICS = {
  work: [75],
  children: [79, 54],
  lunch: [23, 96],
  browsing: [91, 112],
};
```

4. Set the timings for the periods. For each period, set the timings in square brackets after a colon after your chosen name of the period. Each timing is represented by `[startTime, endTime]`. The starting and ending times should be in hours in the 24-hour clock. The timings should be separated with a comma, and each line should end with a common. For example, the below code will result in the work period being set to 8 AM to 12 PM, along with 2 to 6 PM. The children's period is from 7 to 8 PM.

```js
const PERIODS = {
  work: [
    [8, 12],
    [14, 20],
  ],
  children: [[21, 22]],
  lunch: [[13, 14]],
  browsing: [[6, 7]],
};
```

7. Feel free to raise an issue if there are any errors or if you have any doubts!

Thanks for checking out Quote Undistractor!

## API setup

1. Subscribe for the [Quotel - Quotes API](https://rapidapi.com/skjaldbaka17/api/quotel-quotes) (by clicking on the subscribe button) after creating a free RapidAPI account. After you subscribe to Quotel - Quotes (it's completely free) you too will get access to 100 calls (that is, 100 quotes) every day.
2. Copy the X-RapidAPI-Key, and paste it into the value of the `API_KEY` in line 2 of `content.js`: like this, only your API key instead of `YourAPIKeyHERE`

```js
const API_KEY = "YourAPIKeyHERE";
```

## Known issues/feature improvements

1. I know the design could be improved - it looks a little bad now. I will improve this Boost, and even add it to Google Chrome after the hackathon ends.
2. As of now, the Boost does not support Google Doodles - it breaks whenever there's a Google Doodle.
3. Right now, this works across _all_ sites under the `google.com` domain, including Google Accounts, Gmail, Finance, and whatnot. While this might be a good idea to increase productivity, Quote Undistractor is (as of now) only meant for Google Search, so the styling isn't optimized for other Google sites. This is a truly annoying bug - I keep seeing wonky boxes everywhere across Google (for some reason, my Boost seems to disable the Login button in Google Accounts), and I hope to correct this URL-matching bug after I receive the green flag from the Arc team (for making significant modifications after the deadline).
4. Hopefully, in the future, we could add support for DuckDuckGo (and even Ecosia and Neeva).

If you're a developer, this extension has helped you, and you have free time, it'd be awesome if you could contribute to this repo!

If you don't fulfill all of the above conditions, please do submit issues for feedback or bug reports. Thanks!
