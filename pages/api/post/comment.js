import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(JSON.parse(req.body));
    // console.log(req.body);
    const convertedReq = JSON.parse(req.body);
    const data = {
      comment: convertedReq.comment,
      parentId: new ObjectId(convertedReq.parent),
    };
    const db = (await connectDB).db("forum");
    const result = await db.collection("comment").insertOne(data);
    res.status(200).json("댓글작성완료");
  }
}
