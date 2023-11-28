import { connectDB } from "@/util/database";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  //   console.log(result);

  return (
    <div className="list-bg">
      {result.map((item) => {
        return (
          <div className="list-item" key={item.id}>
            <a href={`/detail/${item._id}`}>
              <h4>{item.title}</h4>
            </a>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
}
