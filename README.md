# discord-bot

## ARCHITECTURE

  User ----> Discord.com <-------> Bot Server (AWS)


## GETTING STARTED WITH CODING

## Installing
    npm init -y # Creates package.json
    npm install discord.js @discordjs/rest discord-api-types
    npm install typescript ts-node
 
 ## Running
 First set your NodeJS path:
    set path=%PATH%;"C:\Program Files\nodejs\"

To run:
   cd discord-bot
   cd src
   npx ts-node index.ts

Note: if you get this
```
 [Symbol(code)]: 'TOKEN_INVALID'
```
you will need to generate a new token

## REGISTERING THE BOT

- Create a bot using the Discord developer portal: discord.com\developer
- Click New Application and enter a name for the bot. Add an icon and description.

