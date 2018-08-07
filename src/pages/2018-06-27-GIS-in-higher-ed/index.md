---
title: "GIS in Higher Education Workshop" 
date: "2018-06-27" 
---
I had expressed interest to Esther about both more engagement with ArcGIS in higher education, as well as my interest in getting more famliar with the software this summer. She followed up with me a couple of days with an invitation to a "GIS in Higher Education" workshop, which was to be a gathering of GIS faculty for a day-long workshop! I immediately agreed to drop-in to about 2/3 of the day-long workshop, only skipping a few sections I had already worked with so far. The following is a brief sketch of the day. 

## Introductions 
The most valuable part of this workshop, and why I felt so honored to be invited and able to attend, was the people that were there in the room together. Invitations to this workshop had been extended to faculty or people working with GIS in higher education settings. These people were commonly pioneers of GIS and huge advocates in the communities they were coming from, as GIS is still a relatively small and little know analysis area, even as the data has global impact and continuous relevance. Sadly, the workshop was not full (maybe because of summer...but tell your friends to come!), but we had a great group of people there in the room on a June day. 

A sampling of the individuals of this workshop: a librarian interested in GIS as a side project, and exposing her students at a community college to the ArcGIS licenses and resources that were available to them; a geography department faculty member from CU Boulder, Sarah Kelly, who teaches GIS classes and also engages in faculty mentorship and research; a woman who works for a living history museum in Colorado interested in using GIS for communicating immersive history. There were more inspiring attendees of this workshop, but those are the ones I talked to most intimately. 

## GIS Today 
The workshop started out with a short presentation on the current state of ArcGIS, focusing on a quick review of ArcGIS Pro. Similar to Jeremy's presentation to me about the ArcGIS Platform at the beginning of summer, this presentation had a couple of slides in the deck about the variety of ways users can engage with ArcGIS today: Desktop, client-server relationships such as ArcGIS Server, and Web GIS through ArcGIS Online. We also noted that ArcGIS Enterprise creates a Web GIS through a base deployment of Server and Portal. They also mentioned Distributed GIS, but left this open as a future area of growth and expansion of GIS analysis. 

One professor from CU, who I had just been introduced to, asked about an R bridge for statistical analysis, which transitioned into a short tangent on application analytics. We would continue discussing some easily-approachable analytics through Insights in a hands-on demo later on in the day. 

We transitioned back to talking about ArcGIS Enterprise base deployments, and expanded this to talk about add-ins that can roll together additions. The presenters noted that in our age of "big data," Esri software and infrastructure is being set up to handle massive throughput data, such as real-time Internet of Things data and sensor implementation. Esri is moving forward with the "5 V's of Big Data" (LINK THIS LINK THIS) (velocity, volume, value, variety, veracity) on the forefront of everyone's mind. I have already heard a lot of talk about scaling for **high volume**, **high velocity** data in every project we approach. I really appreciated a comment made by the presenters, seconded by the group we had gathered, that the geocommunity has always been on the forefront of huge amounts of data, from the very beginning. I'm just scratching the surface of this community, but I really do see and value this ever-expanding adoption of as many data streams as can possibly be gathered and combined for geoprocessing of data. 

In this part of the introductory presentation, new developments in ArcGIS were also shared with the group. Business Analyst was highlighted for its potential to add location intelligence such as US census data to business workflows, such as site selection. Apps for Office and Adobe Creative Cloud were also highlighted, to expose the group to the resources they now have available to extend ArcGIS functionality. 

## Insights Demo 
We went through a demo of the Insights application following this intro presentation and a quick break. Insights allows for easy exploratory data analysis, and generates quick and impressive data visualizations, which are interactive and related upon user interaction. Insights is a powerful application for accessible exploratory data analysis. This app was new to me, and it was great to be able to play around with the visuals that are generated so quickly to expose important data trends. This reminds me a lot of a dumbed-down R, where you can generate visuals with only a couple click of buttons, instead of short strings of R code. Insights also allows for sharing straight from the app! I think this has huge potential for encouraging accurate exploratory data analysis. 

## Lunch! 
At lunch I had a fun conversation with an individual who worked for an interactive history museum in southeastern Colorado. One of her goals was to create an offline map that could be hosted on an iPad at the entrance of the exhibit she was putting together to allow for user exploration. We thought through different ways this could be done with the JSAPI! 

I talked to another woman about south and central american historical and biological artifacts, on a tangent. She was talking about a nonprofit project she was hoping to support in Brazil, and the lack of funding currently to bring specimens from Brazil for analysis. I had been talking to one of my friends from Panama, recently, about the heavy restrictions on the removal of historical artifacts from Panama. I shared my limited knowledge on these restrictions in place in an effort to preserve local culture and heritage, but the issue of illegal exports, as well, and the controversy of the Smithsonian Tropical Research Institute gaining access to important cultural sites for study. I was wondering if she could support this Brazilian biological study initative remotely, through photography and maps! I have been interested in the potential for technology to make effective "digital twins" of rare specimens or sites, which allows sites to remain untouched in situ, but studied in depth through digital replication and analysis. We didn't come up with any clear paths forward for her project, but mentioned Sam Libby's work with nonprofits, discounted ArcGIS rates for nonprofits, and had a great conversation while we were at it. 

### Story Map 
Esther had me present my introduction Story Map to this whole group during our lunch break! I had not expected this, as this workshop was specifically for higher education faculty, not a student/intern like me. I did present, however, viewing my role as the student in a room full of educators, and trying to share what interested me and drew me to GIS in a way where they could maybe identify areas that would be appealing for their students similar to me! At the end of my presentation, I answered some great questions about public art in Boise, Idaho. I also got a great contact reference from the Grand Canyon Trust to share with my roommate Tai, who is an actual geography major, to help guide his mappping Honors thesis exploring the discourse around the Bears Ears National Monument. 

I really thank Esther for giving me this chance to share myself with this qualified group. I felt honored to have this spontaneous opportunity to present at such a great education workshop--thank you for listening! 

## Mobile Field Applications Demo 
After lunch, in a brownie and salad-induced stupor, we went through a Survey123 and Collector demonstration. This is the topic I had been most excited to learn about in this workshop. I had yet to work with any data collection, and have been wondering about surveying and collection. 

First, we went through a little presentation on the options for data collection apps: 
- Explorer: An app focused on collaboration 
- Workforce: Use to assign field work 
- Collector: Data collector 
- Survey123: Enhanced data collection, more in a functional form 
- Navigator: Team to team directions 
- Operations Dashboard: A great viewpoint into data 

A good workflow for using mobile field apps goes as follows: 
1. Plan: Plan the information that you need to gather, and/or give to teams. 
2. Coordinate: How will members in the field recieve work?
3. Navigate: Your own maps can go offline, as can Navigator directions 
4. Get data: Use Survey123 for a form-first approach, and Collector for a map-first approach. 
5. Monitor: An Operations Dashboard can be set up to monitor data as it comes in, real-time. 

We used Survey123 as our hands-on demo. Survey123 is a smartform builder, which can include form logic for better data collection. We spent a while going through building different questions in Survey123. Sadly, it was raining or hailing outside, so we did not get to go outside to geotag survey input points. This was actually much simpler than I thought it would be as a primary mode of data collection. Survey inputs can be geolocated automatically or through user input. Data collected from Survey123 can also be cached for offline collection, and will upload after finding a signal or through direct upload. Survey123 and Collector can be used in a variety of cases, from crowdsourcing any data in a community to collecting and displaying emergency preparedness data (our example), to surveying areas relevant to maintenance for a company. 

I recently heard of an awesome combination of survey data and real-time tracking. Real-time data of individuals on well pads and in transit were combined with maintenance survey results to check for wasted time and vastly improve efficiency and cut costs. Survey123 and Collector have a lot of potential for data collection, but I am also still interested in what more technical geographic surveying looks like--I'm going to try to find a way to do some of that this year, maybe with Engineers Without Borders just to know what this technical surveying looks like. 

## Resources 
Esther shared a lot of resources with us on a PDF page shared here! University students and students in general commonly have complete ArcGIS licenses available to them. She also highlighted some great GIS professional development user communities, licensing resources for young grads, and common areas that need GIS assistance, such as local government! I'm going to try to engage with these options and share them with my peers while I still have a university license this year! 

Thank you, Esther, for extending an invitation to this faculty workshop to me, the intern! 

## Update, 8/2
Sarah Kelly, the CU GIS Instructor, reached out to me today through Esther as a contact for either her GIS classes or CU Boulder's GIS Day event in November! She remembered me from my lunch presentation. I am so honored, and can't wait to see where this goes! Thanks again, Esther, Sarah, and Josh! 
