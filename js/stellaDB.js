// User Profiles
var year = 2015;
var userProfiles = [
  ["Tinna", "18", "Female", ["English", "Japanese"], "img/greyprofilepic.png", "01/01/1997", "Singapore", "Singapore", ["drama","cafehopping"], "Interested to find someone who can cafehop with"],
  ["Ted", "28", "Male", ["English", "French"], "img/greyprofilepic.png", "01/01/1987", "Singapore", "Singapore", ["drama","cafehopping"], "Interested to find someone who can cafehop with"],
  ["Makuro Tomosoke", "23", "Male", ["English", "Japanese"], "img/greyprofilepic.png", "01/01/1992", "Singapore", "Singapore", ["drama","cafehopping"], "Interested to find someone who can cafehop with"],
  ["Louise", "20", "Male", ["Japanese", "Korean"], "img/greyprofilepic.png", "01/01/1995", "Singapore", "Singapore", ["drama","cafehopping"], "Interested to find someone who can cafehop with"],
  ["Stella", "20", "Female", ["English", "Chinese"], "img/greyprofilepic.png", "01/01/1995", "Singapore", "Singapore", ["drama","cafehopping"], "Interested to find someone who can cafehop with"],
  ["John", "40", "Male", ["Malay", "Chinese"], "img/greyprofilepic.png", "01/01/1975", "Singapore", "Singapore", ["drama","cafehopping"], "Interested to find someone who can cafehop with"],
  ["Leo", "25", "Male", ["English", "Chinese", "Cantonese"], "img/greyprofilepic.png", "01/01/1997", "Singapore", "Singapore", ["drama","cafehopping"], "Interested to find someone who can cafehop with"],
  ["Shane", "25", "Male", ["English", "Hokkien"], "img/greyprofilepic.png", "01/01/1990", "Singapore", "Singapore", ["drama","cafehopping"], "Interested to find someone who can cafehop with"],
  ["Sora", "25", "Male", ["Hokkien","Japanese"], "img/greyprofilepic.png", "01/01/1990", "Singapore", "Singapore", ["drama","cafehopping"], "Interested to find someone who can cafehop with"],
  ["Timmy", "25", "Male", ["Cantonese", "Hokkien"], "img/greyprofilepic.png", "01/01/1990", "Singapore", "Singapore", ["drama","cafehopping"], "Interested to find someone who can cafehop with"]
];


// NOTIFICATION
var buddyRequest;

if (sessionStorage.getItem("buddyRequest")) {
    // Restore the contents of the text field
    buddyRequest = JSON.parse(sessionStorage.getItem("buddyRequest"));
} else {
    buddyRequest = [
        ["Tinna", 0],
        ["Ted", 1],
        ["John", 5],
        ["Makuro", 3],
        ["Leo", 6]
    ];
}

var newBuddiesList;

if (sessionStorage.getItem("newBuddiesList")) {
    // Restore the contents of the text field
    newBuddiesList = JSON.parse(sessionStorage.getItem("newBuddiesList"));
} else {
    newBuddiesList = [
        ["Shane has accepted your request", "2 Days Ago", 7],
        ["Timmy is now your buddy", "Yesterday", 9]

    ];
    // Insert smthing ["message", "Timing", userProfile id];]
}


var commUpdates = [
    ["Comm1", "img/greyprofilepic.png", "Someone Joined your Community"],
    ["Comm2", "img/greyprofilepic.png", "Someone added a new activity in XXX community"]
];




// CHAT
 //0 means user, 1 means friend
var commentSora;
if (sessionStorage.getItem("comment98")) {
    // Restore the contents of the text field
    commentSora = JSON.parse(sessionStorage.getItem("comment98"));
} else {
    commentSora = [
        [1, "Hi Timmy, I love cafehopping too! But im not familiar with the roads in Singapore hoping to make a friend to hang out with</br> I can help you with Jap and probably you bring me around Singapore? </br> Hope to hear from you soon."],
        [0, "Hi Sora, wow! You're from Japan! What are you doing here in Singapore?"]
    ];
}



var commentTinna;
if (sessionStorage.getItem("comment90")) {
    commentTinna = JSON.parse(sessionStorage.getItem("comment90"));

} else {
    commentTinna = [
        [0,"Hi Tinna, are you coming to the event later on tonight?"],
        [1,"Hi Timmy, yeah, but I'm not familiar with the location"],
        [0,"No worries, let's meet at City Hall MRT @ 5 later then!"],
        [1,"&#30906;&#20449;&#12375;&#12390;"]
    ];
}
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
        newBuddiesList.push([name+" is now your buddy", "Today", i]);
        sessionStorage.setItem('newBuddiesList',  JSON.stringify(newBuddiesList));

    } else {
        alert(name + "'s Buddy Request Rejected");
    }
    show();
}

