
import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/common';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from '../auth/Auth.zod.validation';
import { AdminController } from './Admin.controller';

const router = express.Router();

router.post(
  "/create-all-user",
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(AuthValidation.signInValidation),
  AdminController.createAllUser
);

router.patch(
  "/update-user/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  AdminController.updateUserById
);

export const AdminRoutes = router;
