const express = require('express')
const app = express()
const { Restaurant } = require('./models/index')
const { sequelize } = require('./db')

const port = 3000

//TODO: 

// Make a GET route using Express to handle the endpoint “restaurants”
app.get('/restaurants', async (req, res) => {
    const restaurants = await Restaurant.findAll({
        include: [{ 
          model: Menu, // Argument 1
          include: [{ 
            model: Item  // Argument 2
          }] 
        }]
      })
    res.send(restaurants);
})

app.listen(port, () => {
    sequelize.sync()
    console.log("App listening on port " + port)
})