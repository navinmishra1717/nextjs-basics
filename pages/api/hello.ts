// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// import Cors from 'cors';

type Data = {
  name: string;
};

// Initialize the cors middleware
// const cors = Cors({
//   methods: ['GET', 'HEAD'],
// });

// function runMiddleware(
//   req: NextApiRequest,
//   res: NextApiResponse,
//   fn: any
// ): Promise<void> {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (err?: Error) => {
//       if (err) return reject(err);
//       return resolve();
//     });
//   });
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' });
}
