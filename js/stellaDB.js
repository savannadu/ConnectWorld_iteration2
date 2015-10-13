
// NOTIFICATION

if (sessionStorage.getItem("buddyRequest")) {
    // Restore the contents of the text field
    var buddyRequest = JSON.parse(sessionStorage.getItem("buddyRequest"));
} else {
    var buddyRequest = [
        ["Amy", "img/greyprofilepic.png"],
        ["John", "img/greyprofilepic.png"],
        ["Harry", "img/greyprofilepic.png"],
        ["Amanda", "img/greyprofilepic.png"],
        ["Leo", "img/greyprofilepic.png"]
    ];
}

if (sessionStorage.getItem("newBuddiesList")) {
    // Restore the contents of the text field
    var newBuddiesList = JSON.parse(sessionStorage.getItem("newBuddiesList"));
} else {
    var newBuddiesList = [
        ["Shane", "img/greyprofilepic.png", "2 Days Ago"],
        ["May", "img/greyprofilepic.png", "Yesterday"]
    ];
}


var commUpdates = [
    ["Comm1", "img/greyprofilepic.png", "Someone Joined your Community"],
    ["Comm2", "img/greyprofilepic.png", "Someone added a new activity in XXX community"]
];

// CHAT
 //0 means user, 1 means friend
var commentSora  = [
    [1,"Hi Timmy, I love cafehopping too! But im not familiar with the roads in Singapore hoping to make a friend to hang out with</br> I can help you with Jap and probably you bring me around Singapore? </br> Hope to hear from you soon."],
    [0,"Hi Sora, wow! You're from Japan! What are you doing here in Singapore?"]
];
var commentBuddy = [
    [0,"Hi XXX are you coming to the event later on tonight?"],
    [1,"Hi Timmy, yeah, but I'm not familiar with the location"]
];

var commentDB = [
    ["XiaoMing","img/greyprofilepic.png",commentBuddy],
    ["Sora","img/redprofilepic.png",commentSora]
];



// Functions
// For buddy request and notification

function deleteNotification(i, request) {
    var name = buddyRequest[i][0];
    var image = buddyRequest[i][1];
    buddyRequest.splice(i, 1);
    sessionStorage.setItem('buddyRequest',  JSON.stringify(buddyRequest));

    if (request){
        alert(name + "'s Buddy Request Accepted" );
        if (newBuddiesList.length==3){
            newBuddiesList.shift();
        }
        newBuddiesList.push([name, image, "Today"]);
        sessionStorage.setItem('newBuddiesList',  JSON.stringify(newBuddiesList));

    } else {
        alert(name + "'s Buddy Request Rejected");
    }
    show();
}

