import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  let db = (await connectDB).db("forum");
  let result = db.collection("login").find().toArray();

  if (req.method === "POST") {
    console.log(result);
    console.log(req.body);
  }
}
