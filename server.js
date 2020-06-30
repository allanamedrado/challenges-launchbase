const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    const data = {
        avatar: "https://avatars1.githubusercontent.com/u/54155356?s=460&u=87d2b632afe93294f42a8c64cd96859afc3974db&v=4",
        name: "Allana Medrado",
        role: "Desenvolvedora Full-Stack",
        skills: "No momento estudando HTML, CSS, SASS, Javascript, Nodejs e Nunjucks."
    }

    return res.render("about", { about: data })
})

server.get("/portfolio", function(req, res){
    return res.render("portfolio", {items: videos})
})

server.get("/video", function(req, res) {  
    const id = req.query.id
    const video = videos.find(function(video){ 
        if (video.id == id) {
            return true
        }
        if (!video.id == id) {
            return res.send("Video not found!")
        }
    })

    return res.render("video", {item: video})
})

server.listen(5000, function() {
    console.log("server is running")
})