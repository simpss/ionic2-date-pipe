## To reproduce date pipe issue
Make sure you're on an OSX computer and have an ionic environment set up including ionic, cordova, xcode and xcode command line tools.

0. run `npm install`
0. run `npm run package-ios-release`

This will finish and open up the ionic generated xcode project.

0. deploy the app to a device/simulator. You might need to change the bundle identifier and the team.
0. click Set Date on the opened app. As you can see it picks the current date
0. Click `Show Piped Date` as you can see it doesn't show up. And an error appears on the xcode console. `ERROR: error JSON.stringify()ing argument: TypeError: JSON.stringify cannot serialize cyclic structures.`
