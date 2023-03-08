// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { search } from "../../../functions/youtube";
import { searchResult } from "../../../interfaces/searchResult";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<searchResult[]>
) {
  const { videoId } = req.query as { videoId: string };
  const result = await search(videoId);
  res.status(200).json(result);
}
