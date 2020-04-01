import { Request, Response } from 'express';

import bitpayRates from "bitpay-rates";

export const getAll = async (req: Request, res: Response) => {
  const allRates = await bitpayRates.get();
  res.json(allRates);
};

export const getOne = async (req: Request, res: Response) => {
  const oneRate = await bitpayRates.get(req.params.code);
  res.json(oneRate);
};
