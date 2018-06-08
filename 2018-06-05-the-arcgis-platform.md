# June 5th: Esri in One Hour - The ArcGIS Platform with Jeremy Mirmelstein 

Josh set up a series of "Esri in One Hour" chats for me this summer to talk to people throughout the company about their work and about elements of the Esri ecosystem. I had my first one today, where I talked through the ArcGIS Platform with Jeremy. This served as my broad introduction into how all of the ArcGIS software interacts. 

## ArcGIS and Basic GIS Patterns 
**ArcGIS** is a generic term to describe the entire stack of Esri software, and does not translate to specifics about GIS. Generally, each industry has a different *pattern* for how they use GIS. A normal GIS progression is spatial analysis, where geographic points are converted into information. GIS *tools* solve spatial problems. ArcGIS has invented many of these tools to solve these spatial problems. 

Another common GIS progression is mapping and visualization in cartography. In this use pattern, good design and smart choices are usd to tell a story using visualization of spatial data. Here, maps are made to *hand off*, to fully say something using the data visualization. 

ArcGIS has existed before almost all other GIS tools, and continues to build tools and interfaces for GIS analysis and workflows. 

## Esri Business Model 
Esri is one of the 35 largest software companies in the world, and one of the most widely used software in government. Most Esri customers are buying a product: ArcGIS software. However, there are many options for how to do this, and the software configuratoins. 

### Esri Enterprise Agreements (EEAP) 
Customers can participate in the Esri Enterprise Advantage Program to access all software and support through a Technical Advisor, through the use of yearly credits. 

### Industry Bundles 
Esri develops Industry Bundles consisting of specific pieces of software, bundled according to industry. These bundles are offered for a lower rate.

### Individual Software/Services 
Customers can purchase liceses to invidual software and services. 

## Software and Services 
### ArcGIS Desktop
Traditionally, ArcGIS Desktop was the main softwaree offering. ArcGIS Desktop dealt with local data, and connected to a database for multi-user editing. Esri provides tools in the database that allows for geospatial data management and comparison for multi-user editability. In the past, the model below represented the workflow using ArcGIS Desktop in a company setting: data would be analyzed locally, and then exported through the ArcGIS server as a published service. ArcGIS Desktop can 

### Web Model - ArcGIS Online 
About 10 years ago, Esri recognized the power of an ArcGIS Online interface to empower users to use GIS as a web service. With ArcGIS Online, ArcGIS is a "software as a service," stored in the cloud. ArcGIS Online is now part of the platform, and offers a subset of services (feature and tiled). Importantly, ArcGIS Online cloud servers are still hosted in the US, which is occasionally a restriction for foreign entities using ArcGIS Online services vs. local services. ArcGIS Online is best used for accessible and collaborative analysis, user authentication, development of apps, and public-facing content. ArcGIS is automatically scalable, and updates are managemd by Esri teams, as this is a cloud offering. 

### ArcGIS Enterprise 
ArcGIS has been developed as a complete enterprise software architecture allowing for a similar user experience as ArcGIS Online, but in-house. ArcGIS Enterprise is commonly used by government entities, and large companies, and represents a broad implementation of the ArcGIS platform. ArcGIS Enterprise sets up a interface, including authentication and apps. A diagram of the architecture of ArcGIS Enterprise is shown below. 

ArcGIS Enterprise requires on-site installation and a base software deployment. These often take place with 3-day "jumpstarts" done by Platform Configuration Engineers. Configuration can also include custom configuration tuned to customer's server and data mangement needs, though customized solutions generally follow base configuration. 

Customers can commonly combine ArcGIS Enterprise and ArcGIS Online, to create workflows allowing for local editing and public sharing of their GIS content. 

| ArcGIS Enterprise | ArcGIS Online |
|-------------------|---------------|
| Manage yourself (commonly required for international organizations) | Esri manages infrastructure | 
| Internal system of record | Cloud server |
| Some services only available through enterprse | Support feature and tiled services |
| | Automatically scalable | 

### Future: Distributed GIS
This has yet to occur, but is the next step for GIS.

I have now been thrown into the deep end of understanding the elements of the ArcGIS platform. 
