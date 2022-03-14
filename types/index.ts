import { NextApiRequest, NextApiResponse } from 'next';

export type NextApiRequestExtended = NextApiRequest & {
  token?: string;
};
