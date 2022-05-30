const express = require('express');
const router =express.Router();
const xauth = require("../middleware/auth");
const eventController=require('../controllers/event.controller');

// Get the contacts from the database

router.get('/eventbookinglist',eventController.getEventBookinglist);
router.get('/eventlist',eventController.getEventData);
router.get('/canteenlist',eventController.getEventCanteenData);
// Add new contacts to the database

router.post("/addEventbooking",eventController.addEventBooking);

router.post("/addCanteenbooking",eventController.addEventCanteen);

router.post("/addFeed",eventController.addEventFeedback);
// Update a contact list by id

router.put("/updateEvent/:id",eventController.updateEventBookingById);
router.put("/updatecanteen/:id",eventController.updateEventCanteenById);
// Delete a contact list by id

router.delete('/delete/:id',eventController.deleteEventbookingById)





module.exports=router;