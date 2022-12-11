## A Boost for reducing distraction

How many times were you been working, went onto Google and never came off? Or when you're supposed to be with family, you're staring at the screen? For the vast majority of us, such occurrences are only too frequent. In the journey of trying to combat this problem, we start off with trying to improve "self control", and when that failed, we tried different extensions, slowly increasing in harshness - we might even have an extension which blocks us from Googling during work time.

With this Boost, I've tried to solve the problem in a much less severe, and hopefully more efficient way. Quote Undistractor's merely shows you a quote whenever you browse, along with some statistics. It does't stop you browsing. It doesn't make you wait for five seconds while you twiddle your thumbs impatiently. The quote is a random one, with topics based on the time of the day - customizable by the user.

The idea behind Quote Undistractor is simple but powerful - to reminding you (indirectly) of your digital minimalism mindset right in the moment of weakness. Let's say you're with your kids, and you start browsing. Seeing a quote on the importance of good parenting is bound to jerk you back the children. While working, you're not gonna read up on last night's FIFA match if you've just seen what Steve Jobs thought about working hard. You'll focus better on your lunch if trying to browse resulted in you learning about the importance of food.

With almost 125 topics, you can set a list of topics from which quotes would appear for each "period" of your typical day. For example, let's say I want to work from 8 to 12 morning, and 2 to 6 evening. I'd might set that time period to topics from motivational (ID 75) and technology (ID 112). The IDs for the topics can be found in `topics.json`. Read the installation instructions to know how to configure them.

As an additional push in case your conscience manages to defend the first blow, the Boost also display how much times you've visited Google on that day and how many minutes you've spent on it. After you actually search for something, you'll only see a clipped portion of the quote along with the statistics. I hope this will encourage curious users to click the clipped portion, which will bring them back the the Google search page and allow them to read the whole quote. And then log off :).

For more details, watch a [video demonstration](https://app.box.com/s/868otooovb86u6lagl6scwxgbocs666q).

## Installation

1. Download and add the Boost to Arc by creating an Inject Boost and copying over the contents of `content.js` and `styles.css`. `topics.json` is just for your reference, you can download it if you like, alternatively, you can view the topics in GitHub itself (more info on topics in step 4).
2. Subscribe for the [Quotel - Quotes API](https://rapidapi.com/skjaldbaka17/api/quotel-quotes) (by clicking on the subscribe button) after creating a free RapidAPI account. I wish I could remove all this API stuff as it complicates the installation process, but my plan is a Free one and I have access to only a 100 API calls everyday. If you subscribe to Quotel - Quotes (it's completely free) you too will get to access to 100 calls (that is, 100 quotes) every day.
3. Copy the X-RapidAPI-Key, and paste it into the value of the `API_KEY` in line 2 of `content.js`: like this, only your API key instead of `YourAPIKeyHERE`
```js
const API_KEY = "YourAPIKeyHERE";
```
4. Open `topics.json`, where there's a list of topics along with their IDs. Choose the topics you want and copy over their IDs.
5. Modify the variables in `content.js` to reflect your choice of topics and periods. Add, modify, or remove periods as you like. For each period, put all the IDs in square brackets after a colon after your chosen name of the period. The IDs should be seperated with a comma, and each line should end with a common. for example, here, for the "work" period, quotes from the topic 75 will appear on the Google homepage.

```js
const TOPICS = {
  work: [75],
  children: [79, 54],
  lunch: [23, 96],
  browsing: [91, 112],
};
```

6. Set the timings for the periods. For each period, set the timings in square brackets after a colon after your chosen name of the period. Each timing is represented by `[startTime, endTime]`. The starting and ending times should be in hours in the 24 hour clock. The timings should be seperated with a comma, and each line should end with a common. For example, this will result in the work period being set to 8 AM to 12 PM, along with 2 to 6 PM. The children period is 7 to 8 PM.

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

7. Feel free to raise a pull request if there are any errors or you have any doubts!
