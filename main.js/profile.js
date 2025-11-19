let outerModal = document.getElementById("outer-modal")
let profile = document.getElementById("profile")
let form = document.getElementById("form")
let profileObj = JSON.parse(localStorage.getItem("profile") || "{}");
if (!profileObj.photoUrl) profileObj.photoUrl = "./assets/profile/user.svg";
if (!profileObj.firstName) profileObj.firstName = "пользователь";
if (!profileObj.lastName) profileObj.lastName = "";
if (!profileObj.phoneNumber) profileObj.phoneNumber = "";
let profileImg = document.getElementById("profile-img")
let profileName = document.getElementById("profile-name")


profileImg.src = profileObj.photoUrl;
profileName.textContent = profileObj.firstName



profile.addEventListener("click" , function() {
    outerModal.classList.remove("hidden")
})
outerModal.addEventListener("click" , function() {
    outerModal.classList.add("hidden")
})
 form.addEventListener("click" , function(e) {
    e.stopPropagation();
 })
 form.addEventListener("submit" ,function(e) {
    e.preventDefault();
    profileObj.photoUrl = e.target[0].value
    profileObj.firstName = e.target[1].value
    profileObj.lastName = e.target[2].value
    profileObj.phoneNumber = e.target[3].value
    localStorage.setItem("profile" , JSON.stringify(profileObj))
    profileImg.src = profileObj.photoUrl;
    profileName.textContent = profileObj.firstName;
    outerModal.classList.add("hidden")
 })