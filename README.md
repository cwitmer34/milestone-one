# Ultimate Trivia - NORCS-SD-06 Milestone One Project
This is my first out of three milestone projects. I am building a web based trivia game, while utilizing the OpenTDB (https://opentdb.com/) api for my trivia questions.

The way I got the idea for a trivia game, out of all possibilities, might be a little unique. The reasoning behind me wanting to do this is actually my friends being harsh on me. Initially when I brought up the idea, they kind of snickered at me and told me that I probably wouldn't have the knowledge/time to make a proper trivia game. Mind you, these friends are people that are in the software engineering industry. I told them okay, give me 10 days... I'll exceed you expectations, and then some. And I think that's exactly what I did. I exceeded their expectations, and mine.

I honestly had a lot of trouble adding event listeners to buttons, because before I fixed the bug I was dealing with... I was adding an event listener each iteration through the function triviaGame(). Little did I know, it was the function itself causing me issues. I had the idea of merging that function with appendData(), and removing the event listeners from the iteration. This worked partially, but then I had no way of getting the data from the API that I was fetching from. 

To remedy that issue, I was able to assign the data I got from my fetch to the global variable triviaData.


Things I would change, now that I am able to reflect back on the project:
- Organization. I made a lot of questionable coding decisions, I'm sure of it. I definitely would like to go back and clean up the code once I get more practice and am able to recognize what exactly it is that should be cleaned up.
- Styling. My styling is not optimized at all. If you can tell, I added a media query for smaller screen sizes that basically makes it impossible for mobile users to use the website. In doing this, I force the user to use the website on a pc/laptop - or not at all (unless they decide to enable desktop mode on their mobile browser - that's for them to decide). I understand that this is by no means a permanent solution, but for the time being it seems like the only possible solution to my poor styling habits.
- Outside sources. Now that I understand sort of what I'm doing when trying to work things out on my own, I would definitely like to rely on less outside resources. And I'm not necessarily talking about docs, but rather going through stackoverflow solutions and trying to rework them into my code.

Things I am proud of:
- Organization. I am aware the organization is nowhere near perfect, but I definitely think it is a big step up from my previous standards, especially on a project that I am working on by myself.
- Styling. By no means is it reactive at all, but I think I did a good job of finding good backgrounds, as well as keeping a good color scheme. I tried to find colors that were easy on the eyes, so it didn't hurt your head when trying to think of answers.
- Outside sources. I think that I did a really good job of sourcing what I got from other people, as well as using the MDN docs as often as I could/needed to. +1 to me for that.


Overall, I think I did a good job on my first html/css/js project. There are definitely a lot of features missing/unoptimized, but those will work themselves out in due time. I plan to maintain/update this somewhat regularly, and eventually deploy it to a website other than github pages.

Features in question:
- Question timeout after 30 seconds
- Track amount of timeout/attempted failures
- Monitor total quiz time
- Amount of time spent on each question
- Average answer time
- Show correct answer if incorrect answer is chosen

Known issues:
- Answers are not parsing correctly (HTML entities showing instead of the actual character)
