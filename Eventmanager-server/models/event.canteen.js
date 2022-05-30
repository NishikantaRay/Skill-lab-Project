const mongoose= require('mongoose');

const eventCanteenBookingSchema = mongoose.Schema({
    eventTitle:{
        type:String,
        required:true
    },
    eventTpart:{
        type:String,
        required:true
    },
    eventFchoice:{
        type:String,
        required:true
    },
    eventMenu:{
        type:String,
        required:true
    },
    eventMenuDetails:{
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

module.exports=mongoose.model('eventCant',eventCanteenBookingSchema);
