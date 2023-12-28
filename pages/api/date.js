export default function handler(req, res) {
  if (req.method === "GET") {
    const time = Date();
    return res.status(200).json(time);
  }
}
