
import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/common';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { PaintingController } from './Painting.controller';
import { PaintingValidation } from './Painting.zod.validation';

const router = express.Router();

// Get all services
router.get('/all-services',
    auth( ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER ),
    PaintingController.getAllServices
);

// Get all Available services
router.get(
    '/all-available-services',
    PaintingController.getAllAvailableServices
);

// Get all Upcoming services
router.get(
    '/all-upcoming-services',
    PaintingController.getAllUpcomingServices
);

// Get service by id
router.get(
    '/:id',
    auth( ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER ),
    PaintingController.getServiceById
);

// Post service data to database
router.post(
    '/create-service',
    auth( ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN ),
    validateRequest( PaintingValidation.postValidation ),
    PaintingController.createService
);

// Update service by id
router.patch(
  "/update-service/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(PaintingValidation.updateValidation),
  PaintingController.updateServiceById
);

// Delete service by id
router.delete(
  "/delete-service/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  PaintingController.deleteServiceById
);

export const PaintingRoutes = router;
