const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs') 
app.engine('hypatia', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') 
app.set('view engine', 'hypatia') 

app.get('/', (req, res) => {
	res.render('template', { title: 'Hey', message: 'Hello people!', content: `Here's the poem 'Drunk as drunk' by Pablo Nerudo`})
  })
  
  app.get('/first-line', (req, res) => {
	res.render('template', { title: 'First Line', message: 'Drunk as drunk on turpentine From your open kisses', content: '(The first line of the poem)' })
  })
  
  app.get('/second-line', (req, res) => {
	res.render('template', { title: 'Second Line', message: 'Your wet body wedged,Between my wet body and the strake Of our boat that is made of flowers', content: '(The second line of the poem)' })
  })

  app.get('/third-line', (req, res) => {
    res.render('template', { title: 'Third Line', message: `Feasted, we guide it; our fingers Like tallows adorned with yellow metal -Over the sky's hot rim`, content: '(The third line of the poem)' })
    })

  app.get('/fourth-line', (req, res) => {
    res.render('template', { title: 'Fourth Line', message: `The day's last breath in our sails. Pinned by the sun between solstice And equinox, drowsy and tangled together`, content: '(The fourth line of the poem)' })
    })
  
  app.get('/fiveth-line', (req, res) => {
    res.render('template', { title: 'Fiveth Line', message: `We drifted for months and woke With the bitter taste of land on our lips`, content: '(The fiveth line of the poem)' })
    })
    
  app.get('/sixth-line', (req, res) => {
    res.render('template', { title: 'Sixth Line', message: `Eyelids all sticky`, content: '(The sixth line of the poem)' })
    })
    
  app.get('/seventh-line', (req, res) => {
    res.render('template', { title: 'Seventh Line', message: `and we longed for lime And the sound of a rope`, content: '(The seventh line of the poem)' })
    })

  app.get('/eighth-line', (req, res) => {
    res.render('template', { title: 'Eighth Line', message: `Lowering a bucket down its well`, content: '(The eighth line of the poem)' })
    })
  
  app.get('/nineth-line', (req, res) => {
    res.render('template', { title: 'Nineth Line', message: `Then, We came by night to the Fortunate Isles, And lay like fish
    Under the net of our kisses.`, content: '(The nineth line of the poem)' })
    })

// Tell the app to listen on port 3000
app.listen(port, function() {
 console.log('Listening on port 3000');
});

