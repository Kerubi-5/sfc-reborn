---
pubDate: 2022-06-06
tags:
  - "Signup"
type: Landing
date: "2022-11-12 Sat"
title: ✅ SFC DevLog Newsletter signup
---

It was winter 2021, when I started talking with this developer called Binny.

He had questions about writing, I had questions about this thing called a "Digital Garden" that people were talking about, and we got along really well. So, we decided to meet weekly and answer each other's questions.

10 months later and after a lot of inspiration and help from him and many others, and I've built a little MVP, hired people for development and SEO, and I realise:

While I wasn't paying attention, I accidentally ended up building a tiny little Software-as-a-Service. Oops 🤷

Of course it's been enormously fun, and the process taught me a ton of things - from hiring and managing, to code and what a Digital Garden is, to figuring out how to put myself into a tin, and give everyone out there free access to my methodologies.

And as of November 11 2022, I'm sharing our progress and development, in a weekly DevLog newsletter.

It's where I pull back the curtain, and give you an inside-view on what goes into being a manic content creator with an insatiable drive for serving, and for tinkering, who is trying to put something in the world that's more useful than just a blog.

Each week I will share what's going on behind the scenes at SFC HQ, cool things I've found, and of course:

New content that got added to the app in the last week.
**
To sign up to get the DevLog newsletter, just drop your email below...

Cheers,

Martin

<iframe src="https://martinstellar.com/sfc-devlog-newsletter/" style="border:none 1px #777" width="100%" height="200" frameborder="0" scrolling="yes"></iframe>
```dataviewjs
// Ensure you're in a DataviewJS code block: ```dataviewjs
dv.paragraph(`#### Properties & links`);
// Fetch the metadata of the current note
const currentPage = dv.current();
// Check if there's frontmatter data available
if(currentPage && currentPage.file.frontmatter) {
    for (const [key, value] of Object.entries(currentPage.file.frontmatter)) {
        // Skip properties 'type' and 'cdate', or any other you wish to exclude explicitly
        if (['type', 'cdate', 'excludeThisProperty', 'anotherOneToExclude'].includes(key)) continue;
        // Additional check to hide properties that are null, empty, or have no assigned value
        if (!value || (typeof value === 'object' && Object.keys(value).length === 0) || value === '') continue;
        // Display the property (key-value pair)
        dv.paragraph(`- **${key}**: ${JSON.stringify(value)}`);
    }
} else {
    dv.paragraph("No frontmatter properties found.");
}
``` 