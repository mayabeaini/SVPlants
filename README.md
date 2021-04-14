Hello!

I hope you are well and sorry in advance for any and all messes you'll see...

In here, I will state all the possible bugs, the things I could have done better, and the logic I would have used if I were more knowledgeable in the languages asked for.

Pre-challenge: I was about to learn Redux + I've never done anything with ASP.NET Core Web API or C#. I am saying this in hopes that it will show you that within 3 days, I attempted to tackle Redux and ASP.NET Core Web API.

If I were fluent in them both, that is how I would have done the project:

The Web API would have been set up as it is now without the empList and with the commented out return.

A database would have been connected

The logic would have been found in the back-end so that whenever the client side has a put request, it would calculate the time difference, change the plantStatus to whichever it needs to be and send the newer version of plantStatus as it goes along (depending on time and such).

The logic in the backend would also prevent the current bug (if the database was set up and all that), which is that if you refresh the page, go and come back, the plantStatus would be up to date.

The issue I have faced as well with the Web API was CORS, I was unable to solve that issue in time due to framework and package version incompatibility (and I'm sure other things too).

As for the front-end, I would name variables better, as well as, change the way the button color change is set up to use state.

I would have loved to use Redux probably to include fetching the data from the API, but that will be on my own time.

Sorry for the long essay; however, if you got to here, I hope that means that it was interesting and have intrigued you :D

Anyway, hope to hear from you, but if I don't, I get it.

Best,
Maya