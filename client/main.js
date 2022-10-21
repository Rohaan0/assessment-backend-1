
const complimentBtn = document.querySelector("#complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const form = document.querySelector("form")
const fortunesContainer = document.querySelector("#fortunesContainer")

const baseURL = `http://localhost:4000/api/fortune`

const fortunesCallback = ({data: fortune}) => displayFortunes(fortune)
const errCallback = err => console.log(err.response.data)


const getAllFortunes = () => axios.get(baseURL).then(fortunesCallback).catch(errCallback)
const createFortune =  body => axios.post(baseURL, body).then(fortunesCallback).catch(errCallback)
const deleteFortune = id => axios.delete(`${baseURL}/${id}`).then(fortunesCallback).catch(errCallback)

function submitHandler(e){
    e.preventDefault()

    let name = document.querySelector('#name')
    let fortune = document.querySelector('#fortune')
    let imageURL = document.querySelector('#img')
    let day = document.querySelector('#day')

    let bodyObj = {
        name: name.value,
        fortune: fortune.value,
        day: day.value,
        imageURL: imageURL.value
    }
    createFortune(bodyObj)

    name.value = ''
    fortune.value = ''
    day.value = ''
    imageURL.value = ''


}



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getNewFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};







function createFortuneCard(fortune) {
    const fortuneCard = document.createElement('div')
    fortuneCard.classList.add('fortune-card')

    fortuneCard.innerHTML = `<img alt= "fortune cover image" src=${fortune.imageURL} " class="fortune-cover-image"/>
    <p class="name">${fortune.name}</p>
    <p class="day">${fortune.day}</p>
    <p class="fortune">${fortune.fortune}</p>
    <button onclick="deleteFortune(${fortune.id})">delete</button>">`

    fortunesContainer.appendChild(fortuneCard)
}



function displayFortunes(arr) {
    fortunesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createFortuneCard(arr[i])
    }
}


fortuneBtn.addEventListener('click', getNewFortune)
complimentBtn.addEventListener('click', getCompliment)

form.addEventListener('submit', submitHandler)


getAllFortunes()