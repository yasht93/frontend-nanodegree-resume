/*
This is empty on purpose! Your code to build the resume will go here.
 */
//Yash Trivedi: Resume
//the javascript object notations for the resume
var bio = {
    "name": "Yash Trivedi",
    "role": "Systems Engineer",
    "contacts": {
        "mobile": "+919766822582",
        "email": "yasht93@live.com",
        "github": "yasht93",
        "twitter": "@yasht93",
        "location": "Surat, Gujarat, India"
    },
    "welcomeMessage": "A brief overview of the Soon to be Infoscion 'ME'!",
    "biopic": "images/yash.jpg",
    "skills": ["Web Development", "User Interface Design", "Swimming", "Playing the Synthesizer"]
};

var education = {
    "schools": [{
        "name": "Vishwakarma Institute of Information Technology",
        "location": "Kondhwa, Pune, Maharashtra",
        "degree": "Bachelor of Engineering",
        "majors": ["Information Technology"],
        "dates": "2016",
        "url": "http://www.viit.ac.in"
    }, {
        "name": "Delhi Publlic School",
        "location": "Piplod, Surat, Gujarat",
        "degree": "Higher Secondary Education",
        "majors": ["Science"],
        "dates": "2012",
        "url": "http://dpssurat.net"
    }],
    "onlineCourses": [{
        "title": "Front End Web Development",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://classroom.udacity.com/nanodegrees/nd001"
    }, {
        "title": "How to use Git and Github",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://classroom.udacity.com/courses/ud775"
    }]
};

var work = {
    "jobs": [{
        "employer": "Infosys",
        "title": "Systems Engineer",
        "dates": "2017-Future",
        "location": "Mysore, Karnataka",
        "description": "Job assigned as per domain which will probably be concerning Front end Web Development. Currently waiting for the date of joining the Global Education Center at Infosys, Mysore Campus, for training of the role of Systems engineer."
    }]
};

var projects = {
    "projects": [{
        "title": "Interactive Tabletop",
        "dates": "2016",
        "description": "This project is designed to improve the e-learning methodology for school-going children by providing a collaborative Tabletop solution.",
        "images": ["images/itabletop.jpg", "images/itabletop2.jpg"]
    }, {
        "title": " 'Silverfox' Wholesale Supermarket Management System",
        "dates": "2015",
        "description": "This project is designed to serve as a supermarket management system and to manage stocks, bills and clients of various Supermarket Systems.",
        "images": ["images/silverfox.jpg"]
    }, {
        "title": "Student Management System",
        "dates": "2012",
        "description": "Managing data of the students of a School in an efficient manner and has a scope of storing and managing the personal, transport, fees and attendance details of all the students of a school, along with basic details of the Users of the system( Teachers, Students, Parents and the Administrator)",
        "images": ["images/mgmtsys.jpg"]
    }]
};

//display functions for all the fields of the resume

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", "Yash Trivedi");
    var formattedRole = HTMLheaderRole.replace("%data%", "Systems Engineer");
    var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedbiopic);
    $("#header").append(formattedwelcomeMsg);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    for (var i = 0; i < formattedContactInfo.length; i++) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    }

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

};

bio.display();

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedworkLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

//function to display the INTERNATIONALIZED 'name'

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

//rest of the display functions

projects.display = function() {
    for (project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            for (var j = 0; j < education.schools[i].majors.length; j++) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
                $(".education-entry:last").append(formattedSchoolMajor);
            }
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (i = 0; i < education.onlineCourses.length; i++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
};

education.display();

//appending map locations on google map

$("#mapDiv").append(googleMap);