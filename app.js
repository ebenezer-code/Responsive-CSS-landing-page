const btn = document.getElementById("btn")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    location.href = "about.html"
});











// const demo = document.querySelector(".demo")
// const learn = document.querySelector(".learn")



function User (fullName, courseNumber, gender, dept) {
    this.fullName = fullName
    this.courseNumber = courseNumber
    this.gender = gender
    this.dept = dept
    this.registerCourse = function () {
        console.log(`You have ${this.courseNumber} courses registered`)
    }
}

let user = new User("Ebenezer Noble", 2, "Male", "Computer Science");
var quil = new User("Quil Rivers", 3, "Male", "Accounting")
 console.log(user,quil);
console.log(new User);
var ourRequest = new Date();
console.log(ourRequest);


// var items = (name, age) => (
//    {name, age}
// )
// var newItems = items("sally", 26)
// console.log(newItems);

 function items (name, age) {
   this.name = name
   this.age = age
}
 var newItems = new items("sally", 26)
 console.log(newItems);

 var data = [
     {name: "me", person: 4},
     {name: "she", person: 5}
 ]
//  var newData = ["all", ...new Set(data.map((info) => info.name))]
//  console.log(newData);
function Beer(type) {
    this.type = type
    console.log(this.type);
}
Beer.prototype.growl = function() {
    console.log(`The ${this.type} growl`);
}
var panda = new Beer("panda")
var polar = new Beer("polar")
console.log(panda.growl(),polar.growl(),);


let input = new FormData()


// const app = "flash"
// const yello = ''

// const appState = {
//     [app]: "wrapper"
// }
// appState.yello = "yoo"
// console.log(appState);