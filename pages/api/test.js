export default function handler(req, res) {
  if (req.method === "POST") {
    return res.status(200).json("done");
  } else if (req.method === "GET") {
    console.log(res);
  }
}
