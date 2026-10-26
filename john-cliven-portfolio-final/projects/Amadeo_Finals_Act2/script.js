const message = document.getElementById("message")
const button = document.getElementById("loadBtn")
const button1 = document.getElementById("loadBtn1")
const message1 = document.getElementById("message1")
const profile = document.getElementById("profile")
const grades = document.getElementById("grades")
const schedule = document.getElementById("schedule")
message.style.color = "blue"

function showMessage(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Loading Image....")
        },2000)
    })
}


button1.addEventListener("click", function(){
    message.innerHTML = "Loading...."

    showMessage()
    .then(function(result){
        message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Loading Assets....")
            },2000)
        })

        .then(function(result){
            message.innerHTML = result

            return new Promise(function(resolve){
                setTimeout(function(){  
                    resolve("Welcome!")
                },2000)
            })
            .then(function(result){
                message.innerHTML = result
            })
        })
    })
})

button.addEventListener("click", function () {

    button.style.backgroundColor = "Red"
    button1.style.backgroundColor = "Red"
    message1.innerHTML = "Loading Dashboard...."
    profile.innerHTML = "Profile Waiting...."
    grades.innerHTML = "Grades Waiting...."
    schedule.innerHTML = "Schedules Waiting...."

    const profilePromise = new Promise(function (resolve) {

        setTimeout(function () {

            profile.innerHTML = "Profile: Loaded"

            resolve()
        }, 1000)

    })
    const gradesPromise = new Promise(function (resolve) {

        setTimeout(function () {

            grades.innerHTML = "Grades: Loaded"

            resolve()
        }, 2000)

    })
    const schedulePromise = new Promise(function (resolve) {

        setTimeout(function () {

            schedule.innerHTML = "Schedule: Loaded"

            resolve()
        }, 3000)
    })
    Promise.all([profilePromise, gradesPromise, schedulePromise])
        .then(function () {
            message1.innerHTML = "Dashboard Ready!"
        })
})

