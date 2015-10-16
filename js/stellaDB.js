// User Profiles
var userProfiles = [
    ["Makuro Tomosoke", "23", "Male", ["English", "Japanese"], "img/makuro.jpg"],
    ["Tinna Bisset", "18", "Female", ["English", "French"], "img/redprofilepic.png"],
    ["Ted Hughes", "28", "Male", ["Japanese", "French"], "img/blueprofilepic.png"],
    ["Louise Hay", "20", "Male", ["Japanese", "Korean"], "img/greenprofilepic.png"],
    ["Stella Wong", "20", "Female", ["English", "Chinese"], "img/greyprofilepic.png"],
    ["John Tay", "40", "Male", ["Malay", "Chinese"], "img/redprofilepic.png"],
    ["Leo Dicaprio", "25", "Male", ["English", "Chinese", "Cantonese"], "img/blueprofilepic.png"],
    ["Shane Haper", "25", "Male", ["English", "Hokkien"], "img/greenprofilepic.png"],
    ["Sora Kazuma", "25", "Male", ["English", "Hokkien"], "img/greyprofilepic.png"],
    ["Timmy Goh Zy", "26", "Male", ["English", "Hokkien"], "img/timmygoh.jpg"]
];


// NOTIFICATION
var buddyRequest;

if (sessionStorage.getItem("buddyRequest")) {
    // Restore the contents of the text field
    buddyRequest = JSON.parse(sessionStorage.getItem("buddyRequest"));
} else {
    buddyRequest = [
        ["Sora Kazuma", 8],
        ["John Tay", 5],
        ["Ted Hughes", 2],
        ["Tinna Bisset", 1],
        ["Leo Dicaprio", 6]
    ];
}

var newBuddiesList;

if (sessionStorage.getItem("newBuddiesList")) {
    // Restore the contents of the text field
    newBuddiesList = JSON.parse(sessionStorage.getItem("newBuddiesList"));
} else {
    newBuddiesList = [
        ["Makuro has accepted your request", "Today", 0],
    ];
}


var commUpdates = [
    ["K-Drama Craze", "img/koreandrama.JPG", "Stella has just joined your community"],
    ["Japanese Cooks", "img/japanesefood.jpg", "Upcoming event: YummySushi is happening tonight"],
    ["Japanese Cooks", "img/japanesefood.jpg", "New event: TastTampopo is created by Stella"],
    ["Japanese Cooks", "img/japanesefood.jpg", "Tinna join your event Love 911 Movie Session"],
];

// CHAT
 //0 means user, 1 means friend
var commentSora  = [
    [1,"Hi Timmy, I am Sora, I am hoping to make a friend who speak Mandarin. I love anime and cooking too! </br> I can help you with Jap and probably you can bring me around Singapore? </br> Hope to hear from you soon."],
    [0,"Hi Sora, wow! You're from Japan! What are you doing here in Singapore?"]
];
var commentTinna = [
    [0,"Hi Makuro, I am Timmy. I am looking for a buddy to learn Japanese as I'll be going to study in Japan this January"],
    [1,"Hi Timmy, oh just nice I am looking for a person to teach me English and bring me around Singapore"],
    [0,"Are you free this weekend, let's go to eat at Lau Pa Sat"],
    [1,"&#30906;&#20449;&#12375;&#12390;"]
];
// Converter http://mylanguages.org/converter.php

// id chat with id, which chat array
var commentDB = [
    [9, 0,commentTinna],
    [9, 8,commentSora]
];



// Functions
// For buddy request and notification

function deleteNotification(i, request) {
    var name = buddyRequest[i][0];
    buddyRequest.splice(i, 1);
    sessionStorage.setItem('buddyRequest',  JSON.stringify(buddyRequest));

    if (request){
        alert(name + "'s Buddy Request Accepted" );
        if (newBuddiesList.length==3){
            newBuddiesList.shift();
        }
        newBuddiesList.push([name, "Today", i]);
        sessionStorage.setItem('newBuddiesList',  JSON.stringify(newBuddiesList));

    } else {
        alert(name + "'s Buddy Request Rejected");
    }
    show();
}

