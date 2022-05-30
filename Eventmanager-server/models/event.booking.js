const mongoose= require('mongoose');

const eventBookingSchema = mongoose.Schema({
    eventTitle:{
        type:String,
        required:true
    },
    eventDesc:{
        type:String,
        required:true
    },
    eventGuest:{
        type:String,
        required:true
    },
    eventTpart:{
        type:String,
        required:true
    },
    eventStime:{
        type:String,
        required:true
    },
    eventEtime:{
        type:String,
        required:true
    },
    eventDate:{
        type:String,
        required:true
    },
    eventVenue:{
        type:String,
        required:true
    },
    isApproved:{
        type:String,
        required:false
    },
    contactUserId : {
        type : mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
});

module.exports=mongoose.model('event',eventBookingSchema);
