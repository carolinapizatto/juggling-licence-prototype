var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/juggling-trick', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']

  // Check whether the variable matches a condition
  if (jugglingBalls == "3 or more"){
    // Send user to next page
    res.redirect('/juggling-trick')
  } else if (jugglingBalls == "2 or one"){
      // Send user to next page
      res.redirect('/juggling-trick')
  } else {
    // Send user to ineligible page
    res.redirect('/suggestions')
  }

})

router.post('/juggling-balls', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var over18 = req.session.data['over 18']

  // Check whether the variable matches a condition
  if (over18 == "Yes"){
    // Send user to next page
    res.redirect('/juggling-balls')

  } else if (over18 == "No"){
    // Send user to ineligible page
    res.redirect('/under-18')
  }

})
router.post('/join-centre', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var centre = req.session.data['centre']

  // Check whether the variable matches a condition
  if (centre == "Yes"){
    // Send user to next page
    res.redirect('/join-centre')

  } else if (centre == "No"){
    // Send user to ineligible page
    res.redirect('/start-centre')
  }

})
module.exports = router
