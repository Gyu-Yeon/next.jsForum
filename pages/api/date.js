export default function handler(req, res) {
  if (req.method === "GET") {
    const time = Date();
    console.log(time);
    return res.status(200).json(time);
  }
}
