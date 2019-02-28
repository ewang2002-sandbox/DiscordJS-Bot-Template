# Bot Template: Introduction
Welcome to my bot template. This version of the template now includes extensive documentation, designed to help new developers learn how the basics work.
This README will cover information on how to set this bot up for public use, development tools, and more.

I will be referring to the Official DiscordJS Guide throughout this guide. The link to the Official DiscordJS guide can be found in the "Resources for DiscordJS" tab in the next section.

⚠ It is absolutely necessary that you know basic JavaScript. This is taken from the Official DiscordJS Guide (Linked below).
> Alright, making a bot is cool and all, but there are some prerequisites to it. To create a bot with discord.js, you should have a fairly decent grasp of JavaScript itself. While you can make a bot with very little JS and programming knowledge, trying to do so without understanding the language first will only hinder you. You may get stuck on many uncomplicated issues, struggle with solutions to incredibly easy problems, and all-in-all end up frustrated. Sounds pretty annoying if you ask me.

While copying and pasting code may work, you will struggle to understand how to fix basic errors and will probably pick up a bunch of bad practices. If you do not know JavaScript, please refer to the below resources first. Asking for help on a topic you do not understand will result in people ignoring your requests for help.

## Resources for JavaScript & NodeJS
CodeAcademy Online Course: https://www.codecademy.com/learn/javascript

Eloquent Javascript, Free Book: http://eloquentjavascript.net/

MDN's JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction

You Don't Know JS (Free Book Series): https://github.com/getify/You-Dont-Know-JS

Some Node: https://nodeschool.io/ https://www.codeschool.com/courses/real-time-web-with-node-js

Javascript References & Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

## Resources for DiscordJS
The Official DiscordJS Guide: https://discordjs.guide/#/

DiscordJS Documentation: https://discord.js.org/#/docs/main/stable/general/welcome

DiscordJS Support: https://discord.gg/bRCvFy9

# Setup
You must do a few things before you can actually work on this bot.
### Creating the Bot Application
1. Head over to `https://discordapp.com/developers/applications/` and click "Create an application."
2. Configure the bot's name, profile picture, and description.
3. Go to `Bot` and click `Add Bot`. Then, click `Yes, do it!` to the prompt.
4. Configure your bot's username. Ignore the icon - that has already been configured.
5. At the section labeled `Token`, click `Copy`. Keep this token in a safe place and **DO NOT GIVE THIS TOKEN TO OTHER PEOPLE.**
6. Go to the configuration file (/config/config.json). Replace "ENTER TOKEN HERE" with the token. Do not remove the quotes.

### Setting Up Your Developer's Environment
Unless otherwise said, all steps are required.

1. If you are on:
	- Windows or Mac: Download & install [NodeJS](https://nodejs.org/). You should have version 8.0.0 (or later) of NodeJS installed.
	- Linux: Refer to NodeJS's installation guide [here](https://nodejs.org/en/download/package-manager/). You should have version 8.0.0 (or later) of NodeJS installed.
2. Set up a workspace folder (project folder). If you're using the bot template, rename the folder to something of your desire.
3. Install all necessary modules via Command Prompt/Terminal
	- Open Command Prompt/Terminal
	- Linux: Ctrl + Alt + T
	- Mac: Terminal should suffice (COMMAND + Spacebar).
	- Windows: Open the bot folder, go to file explorer URL bar (the box containing the location of your current folder), remove all text and type `cmd`.
	- Installing Modules
	- If you're using the bot template, simply type `npm install` and NPM should do the rest.
	- If you're NOT using this template (i.e. making a new bot from scratch), install DiscordJS by typing in your terminal: `npm install discord.js`. Ignore the `npm warnings`. 
4. Install a code editor. I personally recommend [Visual Studio Code](https://code.visualstudio.com/). Another option I commonly see people use is [Atom](https://code.visualstudio.com/).
	- If you want to install a linter, refer to [here](https://discordjs.guide/preparations/setting-up-a-linter.html#installing-a-linter). 
5. That's it!

### Starting the Bot
If you are using this template: Starting the bot is easy. Just go to the root folder (where `index.js`) is located, open your terminal/Command Prompt there (refer to step 3), and type `node index.js`. If you're using Visual Studio Code, go to the Debug tab (the crossed-out bug) and click `Start Bot`

If you are not using this template, look for the main bot file (where the bot client is defined). Open your terminal/Command Prompt there (refer to step 3), and type `node <Name of file where bot client is defined>.js`.

# Need Support?
Refer to the [DiscordJS Documentation](https://discord.js.org/#/docs/main/stable/general/welcome) if you need help with DiscordJS.

If you need help with something related to JS as a whole, use a search engine (e.g. Google, Bing) to search the solution.

If you still need help with DiscordJS, join the official DiscordJS support server [here](https://discord.gg/bRCvFy9). The support team & members in general will try to help you. A friendly warning that the DiscordJS support team receives a **lot** of requests per day, so please try to make their lives easier.
- Instead of saying "my bot broke" or "i got an error" or "this won't work" (basically, instead of giving them nothing to work with), send a snippet of your code (or if it is a large chunk of code, use [Hastebin](https://www.hastebin.com)), explain your situation and include any relevant error messages, and explain what you did to attempt to resolve it.
- If you do not know JavaScript, the team will most likely direct you to a list of JS/NodeJS resources (the same resources I included above).

If you need help with DiscordJS or with JS in general, join Dev-Sandbox (where you will find me and other knowledgeable people) [here](https://discord.gg/6eBTTDM). Do note that we may not respond immediately.

# Credit
The bot template was derived from my main bot, TurkieBot. If you would like to invite TurkieBot and see this template used in action, invite him [here](https://discordapp.com/api/oauth2/authorize?client_id=438136375112368139&permissions=536341751&scope=bot).

Thanks to the members of Dev-Sandbox for helping me refine the template and giving me tips on its presentation.

# Conclusion
Thank you for reading through this bot template & guide. If you have feedback or constructive criticism, open a new Issue and leave it there. I will sort through it. You can also leave a pull request with any fixes or proposals to the guide.

If you use this bot template for your current bot and want to thank me, please do so by telling other people (especially those who want to learn to make a new bot and don't know where to start) about the bot template and include the GitHub link. :)

# Changelog
02/28/2019
- Documentation
- Organization of code.