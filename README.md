## A Simple Brevo Email Setup with NodeJS/Express

**DATE_AUTHORED**: 05/21/2023

### Installation

```
git clone <this_repo_url> && cd <this_repo_name> && npm install
```

Copy the .env_sample file and rename the copy .env.

Fill this .env file in with your Brevo API Key ([see this outdated tutorial](https://www.brevo.com/blog/send-transactional-emails-with-next-js-and-sendinblue/) on how to set up a Brevo account, get your default template set up, and get an API key).

Put in an email that you feel comfortable testing in your .env file.

Head over to brevo.com and sign up. Once there create a generic test email template and sign up for an API key. In your test email template, somewhere in the template place the following text:

```
{{ params.link }}
```

This is important, as the express server will send a bit of JSON with this field filled in. This will dynamically populate this field in the email based off of what is sent back from express (in this case a link to https://craftcode.design).

**RECAP**:
Sign up with brevo.com free tier, create a generic test template with {{ params.link }} input somewhere in the text. Grab an API key from brevo.com, and put that in the newly created .env file under the API_KEY field. Fill out the MY_EMAIL field of the .env file with an email you're comfortable testing as well as different PORT number if you'd prefer not to use the default.

### Moving on:

Once done, start the server:

```
npm run start
```

In your browser, navigate to localhost:PORT, where the PORT is the number in the PORT field you filled in the .env file (defaults to 6969).

You'll be presented with a basic input field with a button. Hit the button. It should send you a test email. Note that the {{ params.link }} field you inputted into the Brevo template on their website will now contain the "https://craftcode.design" link.

### Of Note:

None of the tutorials or documentation were 100% helpful. I had to go digging under esoteric documentation to get here. This was a frustrating experience, but that's software development for you.

Here are the tutorials/documentation that got me haflway there (and eventually compiled into a working example of basic API usage...):

https://www.brevo.com/blog/send-transactional-emails-with-next-js-and-sendinblue/

https://www.npmjs.com/package/sib-api-v3-sdk

https://developers.brevo.com/docs/send-a-transactional-email

Of note is to NOT follow the API Node notes that show up in a small code box below the API key generator on their official site!!! They made comments using hashtags in what was supposed to be a JavaScript example...boo.

The official [brevo blog article](https://www.brevo.com/blog/send-transactional-emails-with-next-js-and-sendinblue/) is obviously out of date and needs to be rewritten and simplified...such a simple example doesn't need to be written using NEXT when there was no server side rendering being done...it doesn't need ReactJS as none of the components are reactive, and it doesn't even need Axios as there's fetch, which is native to the browser and simple enough to use.
