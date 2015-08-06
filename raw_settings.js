// Related Question: http://stackoverflow.com/questions/31845720/node-js-xml-to-json-objects
//
// In Node, I'm trying to migrate an XML structure into JSON, which would allow me to 
// access specific nodes without arrays, but guess issue is common for all ECMA related languages
//
// Basically I'm looking for a way of doing this:
//
// var siteSettings = configuration.settings.siteSettings
// var site1 = siteSettings[0];
// var site1Name = site1.name;
// where the XML is this
//---------------------------
// <configuration>
//   <settings>
//     <siteSettings>
//       <siteSetting name="site1" path="path1"/>
//       <siteSetting name="site2" path="path2"/>
//     <siteSettings>
//   </settings>
//   <modules>
//     <module name="module1" action="action1">
//     <module name="module2" action="action2">
//   </modules>
// </configuration>
//----------------------------
//
// However, the XML parser modules I found does something like this (pseudo):
//
// configuration:{
//   settings:
//     [siteSettings:
//       [siteSetting: {name: "site1", path: "path1"}, 
//        siteSetting: {name: "site2", path: "path2"}]};
//
// What do you reccommend - am I even on right track?  

// Example parsed XML
var xml = {
  configuration: {
    settings: [{
      siteSettings: [{
          siteSetting: {name: "site1", path: "path1"}
        },{
          siteSetting: {name: "site2", path: "path2"}
        }
      ]
    }]
  }
};


var rawSiteSettings = xml.configuration.settings[0].siteSettings;
var siteSettings = [];

// Normalize siteSettings from XML
for(var i=0; i<rawSiteSettings.length; i++){
  siteSettings.push(rawSiteSettings[i].siteSetting);
}

console.log(siteSettings); // this would equal [{name:"site1"}, {name:"site2"} ect...]

// Helper to search object by value
var getPropertyByName = function(data, value){
  for(var prop in data){
    if(data.hasOwnProperty(prop)){
      if(data[prop].name === value){
        return data[prop];
      }
    }
  }
};

var firstSite = getPropertyByName(siteSettings, "site1");
var firstSiteName = firstSite.name;
var firstSitePath = firstSite.path;

console.log('Name: ' + firstSiteName); // site1
console.log('Site Path: ' + firstSitePath); // path1
