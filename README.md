# About this project

I was just scrolling throught twitch and found out some videos that allow twitch chat to control their games so i decided to allow the "non-coders" to make similar content by making this program open-source. 

**Have fun**

*Note: It would be appreciated if you are kind enough to join my [Discord](https://discord.gg/2HgRFEzw5v)*
# How to setup

1. Firstly open a terminal in the directory of the project

2. Run `npm i ` to install the dependencies.

3. Rename `example.config.json` to `config.json` and enter all the values as follow
```json
    channelname: "Name of you channel"
```
```json
    commands: {
        "message1": "key to press:",
        "message2": "key to press" // For as many commands you want repeat this format
    }
```
4. Run the program with `npm start`
