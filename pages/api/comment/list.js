import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  console.log(req.query);
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("comment")
    .find({
      parentId: new ObjectId(req.query),
    })
    .toArray();
  res.status(200).json(result);
}
