import express from 'express';
import { mockDataArray } from './mockdata';

const router = express.Router();
router.route('/everything').get((req, res) => {
  const pageSize = Number(req.query['page_size']) || 30;
  res.json(mockDataArray.slice(0, pageSize));
});
router.route('/everything/:id').get((req, res) => {
  const id = req.params.id;
  const single = mockDataArray.find((it) => it.source.id === +id);
  if (!single) {
    return res.status(200).json({ message: 'News not found' });
  }
  return res.json(single);
});
export { router as serverRouter };
