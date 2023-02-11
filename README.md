## About me

I'm Safwan, living in South India. I'm a sophomore (10th grade) at Vikaasa World School, and I love Arc! The idea for
Quote Undistractor suddenly came to me on a Wednesday night with 4 days left before the end
of [Take Back Your Internet](https://browserinc.notion.site/Guidelines-Take-Back-Your-Internet-18865fe8aa084fae8dff4c8975dcdeeb),
a mini-hackathon arranged by [The Browser Company, New York](https://thebrowser.company/), so I managed to pull this up
over the weekend. Thanks for checking it out!

## History

This started off as a Boost for Arc, which is something akin to Chrome extensions. I then converted it into a Chrome
extension. Arc is as of now not supported, but you can see previous commits and copy over the code, if you're really
interested. Feel free to open an issue if you have doubts or need help.

Read more about the development of the code on my [blog post](https://safwansamsudeen.medium.com/quote-undistractor-101151a8f79c).

## Quote Undistractor

How many times were you working, went onto Google, and never came off? Or when you're supposed to be with family, you're
staring at the screen? For the vast majority of us, such occurrences are only too frequent. In the journey of trying to
combat this problem, we start off with trying to improve "self-control", and when that failed, we tried different
extensions, slowly increasing in harshness - you might even have an extension that blocks you from Googling during work
time.

With this Boost, I've tried to solve the problem in a much less severe, and hopefully more efficient way. Quote
Undistractor merely shows you a quote whenever you browse, along with some statistics. It doesn't stop you from
browsing. It doesn't make you wait for five seconds while you twiddle your thumbs impatiently. The quote is a random
one, with topics based on the time of the day - customizable by the user.

The idea behind Quote Undistractor is simple but powerful - to remind you (indirectly) of your digital minimalism
mindset right in the moment of weakness. Let's say you're with your kids, and you start browsing. Seeing a quote on the
importance of good parenting is bound to jerk you back to the children. While working, you're not going to read up on
last night's FIFA match if you've just seen what Steve Jobs thought about working hard. You'll focus better on your
lunch if trying to browse results in you learning about the importance of food.

The beauty of this method is, it's ineffective when we're browsing for "reasonable" reasons. After all, no one should
feel bad about browsing code during a dev session. Reading parenting quotes when finding out something for your kid
will, in fact, make you feel good.

With almost 125 topics, you can set a list of topics from which quotes would appear for each "period" of your typical
day. For example, let's say I want to work from 8 AM to 6 PM. I might set that period to topics from motivational and
technology. Read the configuration instructions for more details.

As an additional push in case your conscience manages to defend the first blow, the Boost also displays how many times
you've visited Google on that day and how many minutes you've spent on it. After you actually search for something,
you'll only see a clipped portion of the quote along with the statistics. I hope this will encourage curious users to
click the clipped portion, which will bring them back to the Google search page and allow them to read the whole quote.

For more details, watch a [video demonstration](https://app.box.com/s/868otooovb86u6lagl6scwxgbocs666q). The
demonstration is of the Arc version, and the project has since been updated to allow users to configure in UI, instead
of meddling with code.

## Attribution

This Boost uses the excellent [Quotel - Quotes API](https://rapidapi.com/skjaldbaka17/api/quotel-quotes). The Free plan
allows 100 requests/day: however, Þórður Ágústsson, the owner of the API has kindly offered me 4000 requests/day for
free.

## Installation

Download the `quote-undistractor.crx` file from this repo, and read [this post](https://www.howtogeek.com/120743/how-to-install-extensions-from-outside-the-chrome-web-store/) to see how to install it on your computer. If that doesn't work, try searching online for instructions on installing `.crx` files.

## Configuration

Press the icon in the Chrome toolbar to open the popup. You can add a new period, specifying the name of the period and
the timings. Once you've done this, you'll see the list of available topics under the period's name. Select all the
topics from which you want quotes to be shown in that time period. That's it! You can edit the timings of a period after
you create it. Periods can also overlap, in the sense that at any given time, you can be in more than one period. In
that case, topics from all applicable periods will be tkaen.

Feel free to raise an issue if there are any errors or if you have any doubts!

Thanks for checking out Quote Undistractor!

## Known issues/feature improvements

1. The extension sometimes doesn't work when you go to other panels in the results page. For example, if you go to
   Images after searching for something, the extension won't show the stats and clipped quote. We're working on this.
2. Hopefully, in the future, we could add support for DuckDuckGo (and even Ecosia and Neeva).

If you're a developer, this extension has helped you, and you have free time, it'd be awesome if you could contribute to
this repo!

If you don't fulfill all of the above conditions, please do submit issues for feedback or bug reports. Thanks!
