

module.exports.getDate = getDate; // Gettign or exporting specific function by specifing function name after exports

function getDate() {


    let options = { weekday: 'long', month: 'long', day: 'numeric' };

    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);
    return day;

}


// // or we can write this function like this

// exports.getDate = function(){
//     let options = { weekday: 'long', month: 'long', day: 'numeric' };

//     let today = new Date();
//     let day = today.toLocaleDateString("en-US", options);
//     return day;
// }

