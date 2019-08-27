// Random list of people standing in queue
// Pair of integers (h, k) where h is height and k is amount of people standing in front with >= height
// https://leetcode.com/problems/queue-reconstruction-by-height/

var reconstructQueue = function(people) {
    function sortPeople(a, b) {
        if (a[0] !== b[0]) {
            return b[0] - a[0];
        } else {
            return a[1] - b[1]
        }
    }
    
    people.sort(sortPeople);
    let result = [];
    
    for (let i = 0; i < people.length; i++) {
        result.splice(people[i][1], 0, people[i]);
    }
    return result;
    
};