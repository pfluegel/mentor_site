!function(){function e(){var e={},t=[{title:"Software","class":"ion-ios-monitor-outline",template:"software"},{title:"Design","class":"ion-paintbrush",template:"design"},{title:"Business","class":"ion-person",template:"business"},{title:"Construction","class":"ion-hammer",template:"construction"},{title:"Acting","class":"ion-film-marker",template:"acting"},{title:"Photography","class":"ion-camera",template:"photography"}],a=[{name:"John O'Connor",image:"/assets/images/john-oConnor.jpg",subjects:"Javascript, HTML, CSS, Angular, Java, C#",years:"20",template:"connor"},{name:"Phil Fluegel",image:"/assets/images/phil.jpg",subjects:"Javascript, HTML, CSS, Angular",years:"1",template:"phil",calendy:"<div class='calendly-inline-widget' data-url='https://calendly.com/pfluegelcx' style='min-width:320px;height:580px;'></div>"},{name:"Amy Smith",image:"/assets/images/amy.jpg",subjects:"Ruby, Ruby on Rails",years:"7",template:"adam"}];return e.getTopics=function(){return t},e.getMentor=function(){return a},e}angular.module("mentorSite").factory("Fixtures",e)}();