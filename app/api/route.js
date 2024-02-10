import { ConnectDB } from "@/lib/Config/db";

// import { connect } from "mongoose";
import { NextResponse } from "next/server";
import TodoModel from "@/lib/Config/Models/TodoModel";

const LoadDB = async ()=>{
    await ConnectDB();
}
LoadDB();



export async function GET(request){
    const todos = await TodoModel.find({});
    return NextResponse.json({todos:todos})
}

export async function POST(request){

    const {title,description} = await request.json();

    await TodoModel.create({
        title,description
    })

    return NextResponse.json({msg:'Todo created'})
}


export async function DELETE(request){
    
    const mondoID = await request.nextUrl.searchParams.get('mongoID');
    await TodoModel.findByIdAndDelete(mondoID)
    

    return NextResponse.json({msg:'Deleted'})
}


export async function PUT(request){
    
    const mondoID = await request.nextUrl.searchParams.get('mongoID');
    await TodoModel.findByIdAndUpdate(mondoID,{
        $set:{
            isCompleted:true
        }
    })
    

    return NextResponse.json({msg:'Todo Completed'});
}