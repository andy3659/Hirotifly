// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getBasicInfo } from "ytdl-core";
import { search } from "../../functions/youtube";
import { searchResult } from "../../interfaces/searchResult";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<searchResult>>
) {
  const r = await getBasicInfo("yuyPmBmcJSM");
  console.log(r);
  res.status(200).json([]);
}
