const mongoose= require('mongoose');

const eventFeedbackSchema = mongoose.Schema({
    eventName:{
        type:String,
        required:true
    },
    eventEmail:{
        type:String,
        required:true
    },
    eventMsg:{
        type:String,
        required:true
    },
    contactUserId : {
        type : mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
});

module.exports=mongoose.model('eventFeed',eventFeedbackSchema);
