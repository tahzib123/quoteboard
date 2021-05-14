import mongoose from "mongoose";
import {IPost} from "./types/app_types";
import {Post} from "./models/post_model";
const url: string = "mongodb://localhost:27017/mydb";


mongoose.connect(url, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected!");
  }
});


const addPost = async (post: IPost) => {
  const newPost = new Post(post);
  try{
    console.log(await newPost.save());
  }
  catch(e: any){
    console.log(e);
  }
}

const examplePost : IPost = new Post({
  title: "First Post",
  author: "Tahzib",
  content: "This is content",
})
addPost(examplePost);