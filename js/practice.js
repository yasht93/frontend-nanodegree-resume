/*$("#main").append("YASH TRIVEDI");
 var awesomeThoughts =("I am Yash and I am AWESOME!");

  var funThoughts = awesomeThoughts.replace("AWESOME","FUN!");

  $("#main").append(awesomeThoughts);

  $("#main").append(funThoughts);*/

 var formattedName = HTMLheaderName.replace("%data%","Yash Trivedi");
 var formattedRole = HTMLheaderRole.replace("%data%","Systems Engineer");

$("#header").append(formattedName);
$("#header").append(formattedRole);

/*var name = ["yash", "trivedi"];
$("#main").append(name.length);*/

/*var bio = {
            "name" : "Yash",
            "age" : "23",
            "Skills" : ["Front End", "Back End"]
        };

$("#main").append(bio.name);*/

/*$(document).click(function(loc) {
    var x= loc.pageX;
    var y= loc.pageY;

    logClicks(x,y);
});*/

function inName(name) {
    name =name.trim().split(" ");
    console.log(name);
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
    return name[0]+ " " +name[1];
}
$("#main").append(internationalizeButton);

/*    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
        $("#skills").append(formattedSkill);
    }*/


/*    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    for(i=0; i<formattedContactInfo; i++) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i])
    };*/

/*  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);

  $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedgithub);
    $("#topContacts").append(formattedtwitter);
    $("#topContacts").append(formattedlocation);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedgithub);
    $("#footerContacts").append(formattedtwitter);
    $("#footerContacts").append(formattedlocation);*/