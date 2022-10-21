const fortune = require('./db.json')


let globalId = 5




module.exports = {
    getFortunes: (req, res) => {
        res.status(200).send(fortune)
    }, 
    deleteFortune: (req, res) => {
        const deleteId = req.params.id
        let index = fortune.findIndex(element = element.id === +deleteId)
        fortune.splice(index, 1)
        res.status(200).send(fortune)
    },
    createFortune: (req, res) => {
        const {name, day, fortune, imageURL} = req.body

        let newFortune = {
            id: globalId,
            name,
            day,
            fortune,
            imageURL
        }

        fortune.push(newFortune)
        res.status(200).send(house)
        globalId++
    },
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }, 

    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A feather in the hand is better than a bird in the air.","A feather in the hand is better than a bird in the air.", "A friend asks only for your time not your money.", "A friend is a present you give yourself.", "A gambler not only will lose what he has, but also will lose what he doesnt have."];

        // choose random Fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },


}