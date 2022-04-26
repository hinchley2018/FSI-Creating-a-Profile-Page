let container = document.querySelector('.js-generated.content')

//create the h1 for rizzo
let rizzoHeader = document.createElement("h1")
//set text content to rizzo
rizzoHeader.textContent = "Rizzo"

//how to add our rizzo header to the generated content???
container.append(rizzoHeader)

//make a logical group div for dog content
let dogContentDiv = document.createElement("div")
//todo; add dog-content class later
//how to add a class to this div?
dogContentDiv.setAttribute("class","dog-content")


//setup the image
let img = document.createElement("img")
img.setAttribute("src", "./assets/rizzo.jpg")
img.setAttribute("class", "dog-image")
dogContentDiv.append(img)

//create and append our dog details
let dogDetailsDiv = document.createElement("div")
//how to add a class to this div?
dogDetailsDiv.setAttribute("class","dog-details")


//setup the description h3
let descriptionHeader = document.createElement("h3")
descriptionHeader.textContent = "Description:"
dogDetailsDiv.append(descriptionHeader)

//setup the paragraph tag
let p = document.createElement("p")
p.textContent = `This gentle dog is aloof toward her owner, and never comes when called.
    She always acts as though any stranger she meets will harm her, and
    dislikes other animals.`
dogDetailsDiv.append(p)

//setup the feeding times
let feedingTimesHeader = document.createElement("h3")
feedingTimesHeader.textContent = "Feeding Times: "
dogDetailsDiv.append(feedingTimesHeader)

let feedingTimesUl = document.createElement("ul")
let feedingTimes = [
    "9:00 am",
    "12:00 pm",
    "5:00 pm",
]
//go thorough feeding times and create an li each time
for (let index = 0; index < feedingTimes.length; index++) {
    let li = document.createElement("li")
    li.textContent = feedingTimes[index]
    feedingTimesUl.append(li)
}
dogDetailsDiv.append(feedingTimesUl)

//then after all details added
dogContentDiv.append(dogDetailsDiv)

//finally append dog content after everyhing else is added
container.append(dogContentDiv)