import express from 'express';
import { AdminRoutes } from '../modules/admin/Admin.routes';
import { AuthRoutes } from '../modules/auth/Auth.routes';
import { BlogsRoutes } from '../modules/blog/Blogs.routes';
import { BookingRoutes } from '../modules/booking/Booking.routes';
import { CartRoutes } from '../modules/cart/Cart.routes';
import { FeedbackRoutes } from '../modules/feedback/Feedback.routes';
import { NotificationRoutes } from '../modules/notification/Notification.routes';
import { PaymentRoutes } from '../modules/payment/Payment.routes';
import { ReviewRoutes } from '../modules/review/Review.routes';
import { PaintingRoutes } from '../modules/service/Painting.routes';
import { SubscribeRoutes } from '../modules/subscribe/Subscribe.routes';
import { SuperAdminRoutes } from '../modules/superAdmin/SuperAdmin.routes';
import { UserRoutes } from '../modules/user/User.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    routes: AuthRoutes,
  },
  {
    path: "/users",
    routes: UserRoutes,
  },
  {
    path: "/admins",
    routes: AdminRoutes,
  },
  {
    path: "/super-admins",
    routes: SuperAdminRoutes,
  },
  {
    path: "/services",
    routes: PaintingRoutes,
  },
  {
    path: "/carts",
    routes: CartRoutes,
  },
  {
    path: "/bookings",
    routes: BookingRoutes,
  },
  {
    path: "/payments",
    routes: PaymentRoutes,
  },
  {
    path: "/reviews",
    routes: ReviewRoutes,
  },
  {
    path: "/feedbacks",
    routes: FeedbackRoutes,
  },
  {
    path: "/notifications",
    routes: NotificationRoutes,
  },
  {
    path: "/blogs",
    routes: BlogsRoutes,
  },
  {
    path: "/subscribes",
    routes: SubscribeRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
