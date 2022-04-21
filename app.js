const express = require('express'),
    ejs = require('ejs'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override')

const postController = require('./controllers/postController'),
    pageController = require('./controllers/pageControllers')

const path = require('path')

const app = express()

// Databse connection
mongoose
    .connect('mongodb://localhost/cleanblog-test-db')
    .then(() => console.log('database bağlantısı kuruldu'))

//VİEW ENGİNE SETUP
app.set('view engine', 'ejs')

//MİDDLEWARE
app.use(express.static(path.resolve(__dirname + '/public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method', { methods: ['GET', 'POST'] }))

//ROUTES
app.get('/', postController.getAllPost)
app.get('/post/:post_id', postController.getPostPage)
app.post('/add_post', postController.createPost)
app.get('/add_post', pageController.addPostPage)
app.get('/about', pageController.getAboutPage)
app.get('/post', pageController.getPostPage)
app.get('/post/edit/:post_id', postController.getEditPage)
app.put('/post/edit/:post_id', postController.updatePost)
app.delete('/post/delete/:post_id', postController.deletePost)

const port = 3000
app.listen(port, () => {
    console.log(`sunucu ${port} ile çalışıyor`)
})
