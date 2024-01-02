import { connectDB } from "@/util/database.js";

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  
  return (
    <div>
      <p>안녕</p>
    </div>
  );
}
