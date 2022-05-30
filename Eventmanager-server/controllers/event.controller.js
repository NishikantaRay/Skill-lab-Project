const contact = require('../models/event.booking');
const canteen=require('../models/event.canteen');
const feedback=require('../models/event.feedback');
const Joi = require('joi');

// Get the bookings from the database
exports.getEventBookinglist = async(req, res)=> {
    try {
        const contacts = await contact.find().populate('contactUserId');
        if(contacts.length!==0){
            console.log(contacts)
            res.status(200).json({
                message:"EventList fetched successfully",
                contactData:contacts
            })
        }else{
            res.status(404).json({
                message:"Not found",
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
    
}

// Add new event to the database

exports.addEventBooking=async(req,res)=>{
    console.log(req.body);
    const contactObj =Joi.object({
        eventTitle : Joi.string().required().min(3).alphanum(),
        eventDesc : Joi.string().required(),
        eventGuest : Joi.string().required(),
        eventTpart : Joi.string().required(),
        eventStime : Joi.string().required(),
        eventEtime : Joi.string().required(),
        eventDate : Joi.string().required(),
        eventVenue : Joi.string().required(),
        isApproved:Joi.required(),
        contactUserId : Joi.string()
    })
    try {
        const eventfield = await contactObj.validateAsync(req.body);
        const contacts = new contact(eventfield);
        console.log(contacts);
        await contacts.save();
        res.status(200).json({
            message:"New Event Added successfully" ,
            contactData:contacts
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
}

// add canteen list
exports.addEventCanteen=async(req,res)=>{
    console.log(req.body);
    const contactObj =Joi.object({
        eventTitle : Joi.string().required().min(3).alphanum(),
        eventTpart : Joi.string().required(),
        eventFchoice : Joi.string().required(),
        eventMenu : Joi.string().required(),
        eventMenuDetails : Joi.string().required(),
        isApproved : Joi.required(),
        contactUserId : Joi.string()
    })
    try {
        const eventfield = await contactObj.validateAsync(req.body);
        const contacts = new canteen(eventfield);
        console.log(contacts);
        await contacts.save();
        res.status(200).json({
            message:"New Canteen details Added successfully" ,
            contactData:contacts
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
}
exports.addEventFeedback=async(req,res)=>{
    console.log(req.body);
    const contactObj =Joi.object({
        eventName : Joi.string().required().min(3).alphanum(),
        eventEmail : Joi.string().email().required(),
        eventMsg : Joi.string().required(),
    })
    try {
        const contactfield = await contactObj.validateAsync(req.body);
        const contacts = new feedback(contactfield);
        console.log(contacts);
        await contacts.save();
        res.status(200).json({
            message:"contact feedback Added successfully" ,
            contactData:contacts
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
}
// Update a event list by id

exports.updateEventBookingById=async(req,res)=>{
    const id = req.params.id;
    console.log(id);
   
    try {
        const updatedcontact = await contact.updateOne({_id : id}, {$set : {"isApproved" : "Approved"}});
        // console.log(updatedcontact);    
        if(updatedcontact!=null){
            res.status(200).json({
                message:"Event updated successfully",
                updatedcontact:updatedcontact
            })
        }else{
            res.status(400).json({
                message:"Event did'nt updated successfully/ID not found"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }  
}

exports.updateEventCanteenById=async(req,res)=>{
    const id = req.params.id;
    console.log(id);
   
    try {
        const updatedcontact = await canteen.updateOne({_id : id}, {$set : {"isApproved" : "Approved"}});
        // console.log(updatedcontact);    
        if(updatedcontact!=null){
            res.status(200).json({
                message:"Event updated successfully",
                updatedcontact:updatedcontact
            })
        }else{
            res.status(400).json({
                message:"Event did'nt updated successfully/ID not found"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }  
}

// Delete a event list by id

exports.deleteEventbookingById=async(req, res)=>{
    const id = req.params.id;
    try {
        const deletedContact = await contact.findByIdAndDelete(id);
        if(deletedContact==null){
            res.status(400).json({
                message:"event did'nt deleted  successfully/ID not found"
            })
        }else{
            res.status(200).json({
                message:"event deleted successfully",
                deletedContact:deletedContact
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
}


exports.getEventData=async (req,res)=>{
    try {
        const user =await contact.find();
        console.log(user);
        if(user.length!==0){
            console.log(user);
            res.status(200).json({
                message:"EventList fetched successfully",
                contactData:user
            })
        }else{
            res.status(400).json({
                message:"Not found",
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
}

exports.getEventCanteenData=async (req,res)=>{
    try {
        const user =await canteen.find();
        console.log(user);
        if(user.length!==0){
            console.log(user);
            res.status(200).json({
                message:"CanteenList fetched successfully",
                canteenData:user
            })
        }else{
            res.status(400).json({
                message:"Not found",
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
}