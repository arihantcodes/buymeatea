import mongoose from "mongoose";

export async function connect (){
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on('connected',() => {
            console.log('Mongodb connected succesfully')
        })
            connection.on('error',(err) =>{
                console.log('Mongodb not connected')
            })
    } catch (error) {
        console.log('somethingwent wrong' );
        console.log(error);
    }
}