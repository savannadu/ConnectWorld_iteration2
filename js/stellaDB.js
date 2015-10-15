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

if (sessionStorage.getItem("buddyRequestDB")) {
    // Restore the contents of the text field
    buddyRequest = JSON.parse(sessionStorage.getItem("buddyRequestDB"));
} else {
    buddyRequest = [
        ["John", 5],
        ["Tinna", 0],
        ["Ted", 1],
        ["Leo", 6]
    ];
}

var newBuddiesList;

if (sessionStorage.getItem("newBuddiesList")) {
    // Restore the contents of the text field
    newBuddiesList = JSON.parse(sessionStorage.getItem("newBuddiesList"));
} else {
    newBuddiesList = [
        ["Makuro has accepted your request", 2],
        ["Louise", 3]

    ];
    // Insert smthing ["message", "Timing", userProfile id];]
}




// Event Name, Event stuffs...
var Events = [
  ["YamySushi","add on here"],
  ["TastTampopo","add on here"]
];
var EventList = [
    [0,1]
];
// Group Info,  Members List, event list
var commList = [
    ["K-Drama Craze", "img/greyprofilepic.png", "Group Info", " Members List", ""],
    ["Japanese Cooks", "img/japanesefood.jpg", "Group Info", " Members List", 0]
];

// comm list, hyperlink, notes
var commUpdates = [
    [0, "#", "Event Update: <a href=\"index.html#/profile?id=3\">@Louise</a> has joined @Love911MovieSession"],
    [0, "#", "New event <a href=\"\">@movieMarathonTonight</a> was added to your community"],
    [0, "index.html#/japaneseCooks", "<a href=\"index.html#/profile?id=4\">@stella</a> has joined your community"],
    [1, "index.html#/japaneseCooks", "Japanese Cooks has an upcoming event <a href=\"index.html#/japaneseCooks\">@YammySushi Tonight</a>"],
    [1, "index.html#/japaneseCooks", "New event  <a href=\"index.html#/japaneseCooks\">@TasttTampopo</a> was added in Japanese Cooks"],
    [0, "#", "Event Update: <a href=\"index.html#/profile?id=4\">@stella</a> has joined @Love911MovieSession"]
];




// CHAT
/*
To create session to Store an empty array into commentDB
        Example 9 is the user, 0 is the person they click "Chat with"
        var addChat = [9, 0,Array.new(0)],  <------ EDIT
        commentDB.push(addChat);

        var chatName = "comment" + commentDB[buddyid][0]+ commentDB[buddyid][1];
        sessionStorage.setItem('chatName',  JSON.stringify(commentDB[commentDB.length-1][2]));

*/

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

function deleteNotification(x, i, request) {
    var name = userProfiles[i][0];
    buddyRequest.splice(x, 1);
    sessionStorage.setItem('buddyRequestDB',  JSON.stringify(buddyRequest));

    if (request){
        alert(name + "'s Buddy Request Accepted" );
        if (newBuddiesList.length==3){
            newBuddiesList.shift();
        }
        newBuddiesList.push([name, i]);
        sessionStorage.setItem('newBuddiesList',  JSON.stringify(newBuddiesList));

    } else {
        alert(name + "'s Buddy Request Rejected");
    }
    show();
}

