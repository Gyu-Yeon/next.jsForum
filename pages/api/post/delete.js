import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    console.log(req.body);
    const db = (await connectDB).db("forum");
    // const result = await db.collection("post").deleteOne({ _id: 123 });
    res.status(200).json("complete");
  }
}
