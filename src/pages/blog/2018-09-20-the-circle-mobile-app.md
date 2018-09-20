---
templateKey: blog-post
title: The Circle Mobile App
date: 2015-11-18T23:53:43.306Z
excerpt: Proximity based interactive theater with Meteor.js and iBeacons
tags:
  - Meteor.js
  - bluetooth
  - iOS
  - Android
  - SJSU
---
## Dave Eggers' best selling novel, [The Circle](https://en.wikipedia.org/wiki/The_Circle_(Eggers_novel)), was brought to life by the San Jose State University Theater department.

The production encouraged attendees to explore the theater space and interact with actors who posed as employees of the fictional company Circle. In the novel, Circle employees constantly communicate via an app on their phones.  The app that [Henry Tran](http://qwook.github.io/) and myself created was just that.  Since the actors were too busy acting to send the messages themselves, the app recognized when a user was near a location in which a scene was taking place, and sent them a message from one of the actors in the scene.  Since multiple scenes occurred simultaneously, the application recognized users' locations through bluetooth iBeacons placed throughout the space. 

Attendees of the play used the app to experience their own unique story as they gained participation points and progressed through the night. We tracked their location and sent them push notifications based on their point ranking amongst other users, telling them what their next destination was.

![The actors playing Eamon Bailey and Mae Holland on the main stage.](/img/circle1.jpg)

_The actors playing Eamon Bailey and Mae Holland on the main stage._

We were approached by the play's director [Josh Marx](http://j-marx.com/) in late August 2015. He needed a mobile app that could talk to bluetooth iBeacons and react to users' location.  We took the job and built the application over a course of 2 months.  I learned so much.

### Challenges.

#### Building a cross-platform mobile application.

Building a mobile app is no small feat, and building two mobile apps is a huge undertaking. Thankfully,  Meteor comes with built in support for [Apache Cordova](https://cordova.apache.org/), a project that wraps your application in a web view and creates an interface between the native platform api and your application. What that meant is that we only had to write one application using HTML, CSS, and Javascript and then build it for many platforms.  Also, we were able to test locally in a web browser for making quick fixes and mocking UI. 

Oh, and did I mention _hot code push_?!  It allowed us to make small changes to the app and push them directly to their phones, bypassing the traditional code review process.  This came in handy when we had to make performance tuning changes between performances.

![User poll with live updates.](/img/circle3.jpg)

_Live updating user polls immerse the attendees in the experience._

#### Submitting an app to the App Store

Though the software engineering effort that went into building and supporting the app was huge, getting the app through the Apple app review process was immense.  Because Apple takes quality control seriously, they don't just let anybody submit an app to the store.  This was my first time submitting an application and I definitely underestimated the amount of documentation and details that were needed before an app would be OK'd.  The hardest part was the least technical; I had to make a 30 second video and gathering around 30 screen shots to display in the app store.

![Co-creator Henry and other attendees visiting Stanton in her office.](/img/circle4.jpg)

_Co-creator Henry and other attendees visiting Stanton in her office._

#### Tracking users with iBeacons

Points were awarded to users for experiencing a certain event, which we knew because their devices recognized an iBeacon nearby that was placed at the location of that event.  For example, in the above picture, Henry and others are in Stanton's office during Phase 3.  Their mobile devices recognize the iBeacon near by and knows that they are in Stanton's office during Phase 3.  When an admin triggers the end of a phase, users are awarded points based on the event that ocurred in their current location. The users then receive notifications and get a message from an employee that is related to the scene they just saw unfold.

Organizing and distributing iBeacons was difficult given that we were working with a fairly new product.  There were no unique identifiers on the beacons, and no easy way to figure out the beacon UUID (a 128 bit Universally Unique Identifier).  I had to painstakingly remove all of the batteries from the beacon enclosures, put one in at a time, and use a bluetooth scanner to retrieve the beacon UUIDs and label each one.  After that, it was a breeze to distribute the beacons.  We created a screen on the admin page that made it possible to register beacons with a location so that the production manager could do it.

#### Database Administration with MongoDB

We made some naive mistakes and assumptions at the speed of MongoDB on a small, cheap Linux server.  The NoSQL approach was the best choice because it allowed flexibility to iterate on our implementation quickly.  I gained some great insight in to creating document (NoSql version of a table) schemas and when nesting data was appropriate.  I tried to use the aggregation pipeline for calculating metrics from data, but it turned out that I was looking for a solution to a problem we didn't have.  A fetch statement turned out to be quicker and more simple than the aggregation.  Takeaway: KISS (keep it simple, stupid.)

### Conclusion

This was the largest single project I've worked on, both in scale, longevity, and responsibility.  I had a great time working on it, and learned a lot.  As a student, it gave me courage to tackle larger problems.  As a software engineer, I learned to talk to a project manager and make arguments for and against different ideas.  I also got to touch many different technologies and piece them together into a tangible deliverable.  It feels so great to finish and polish a legitimate product and see people interact with it.

Working with Henry is always great.  We have developed a repertoire and can work efficiently at breaking down problems into easily consumable steps.  We have teamed up at multiple hackathons including the Global Game Jam and the Leia 3D hackathon.
