import Order from "../../../models/Order";
import dbConnect from "../../../util/mongo";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  //connect to the db
  await dbConnect();

  if (method === "GET") {
    try {
        const order = await Order.findById(id);
        res.status(200).json(order)
    } catch (err) {
      console.log(err);
    }
  }
  if (method === "PUT") {
  }
  if (method === "DELETE") {
  }
};

export default handler;
