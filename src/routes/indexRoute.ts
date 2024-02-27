import { Router } from "express";

// Importation des routes
import blogRoute from './blogRoute';
import authRoute from './authRoute';
import userRoute from './userRoute';
import commentRoute from './commentRoute';
import adminRoute from './adminRoute';

const router = Router();

// Routages
router.use('/blog', blogRoute);
router.use('/auth', authRoute);
router.use('/user', userRoute);
router.use('/comments', commentRoute);
router.use('/admin', adminRoute);

export default router;
