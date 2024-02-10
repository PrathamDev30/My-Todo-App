import mongoose from "mongoose"


export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://beatcode729:' + encodeURIComponent('Pratham@123') + '@cluster0.zmi51xy.mongodb.net/todo-list')
    console.log('Done Brooooooooooooooooooooo');
}