import type { NextApiRequest, NextApiResponse } from 'next';


async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const posts = await prisma.post.findMany({
  //   where: { published: true },
  //   include: {
  //     author: {
  //       select: {
  //         name: true,
  //       },
  //     },
  //   },
  // });
  // console.log(posts, '1111111111');
  res.status(200).json({});
}

export default handler;
