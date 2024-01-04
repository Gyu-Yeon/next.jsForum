import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";

export default async function Edit(props) {
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  await db
    .collection(컬렉션명)
    .updateOne({ 수정할게시물정보 }, { $set: { 수정할내용 } });
  return (
    <div className="write">
      <form action="어쩌구" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
