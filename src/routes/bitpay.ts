import {Router} from 'express';
const router: Router = Router();

import { getAll, getOne } from "../controllers/bitpay.controller";

router.get('/rates/:code', getOne);
router.get('/rates', getAll);

export default router;