export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    return res.status(200).json("done");
  } else if (req.method === "GET") {
    return res.status(200).json("d");
  }s
}
