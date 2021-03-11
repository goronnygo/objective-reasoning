// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(ad){
    if (ad.userRole === 'ADMIN'){
        return true;
    }else{
        return false;
    }
}

function getEmail(email){
    return ((email.firstName.toLowerCase()) + '.' + (email.lastName.toLowerCase()) + '@codeimmersives.com');

}

function getPlaylistLength(song){
    return song.songs.length;
}

function getHardestHomework(arr){
    if (arr.length === 0){
        return "";
    }
    let lowest = arr[0];
    for (let i = 1; i < arr.length; i++){
        if(arr[i].averageScore < lowest.averageScore){
            lowest = arr[i]
        }
    }
    return lowest.name;
}

function createPhonebook(name,phone){
    let obj = {};
    for (let i = 0; i < name.length; i++){
        obj[name[i]] = phone[i];
    }
    return obj;
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};