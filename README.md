# This project is for Painting Booking and Management Service

## Description
<p>This <em>Painting Booking and Management Service</em> is a backend project by Node.js, Express.js, and Prisma ORM. It is a comprehensive online platform backend that allows users to book services and manage their cart, bookings, notifications, payments.</p>

### This project [Live Site](https://printing-service-ltd.vercel.app/)

### Features

- [x] Implemented CRUD operations
- [x] Used Authentication and Authorization
- [x] Handled Pagination and Filtering
- [x] Process data by $transaction for logical groups of processing data in Postgres that needs to encapsulate several operations.
- [x] Validate data by Zod
- [x] Secured authentication by JWT
- [x] Password encrypted by Bcrypt
- [x] For ORM coded by Prisma 
- [x] Typescript for type checking

### Technologies Used

- [x] Express.js
- [x] Typescript
- [x] PostgresSQL
- [x] Prisma
- [x] Zod
- [x] JWT
- [x] Bcrypt

### Entity Relationship Diagram

<p>
<img src="./ERD.svg" align="center" width="100%" height="100%" style="border-radius: 30px;">
</p>

#### API Endpoints

#### User

- [x] Create User `POST /api/v1/auth/signup` [ Only User ]
- [x] Login User `POST /api/v1/auth/login` [ All users ]
- [x] Reset User Password `POST /api/v1/auth/reset-password` [ Public Api ]
- [x] User Refresh Token `POST /api/v1/auth/refresh-token` [ All users ]
- [x] Get All Users `GET /api/v1/users/all-users` [ Only Admin and Super Admin ]
- [x] Get User By Id `GET /api/v1/users/profile/:id` [ Only exact user ]
- [x] Update User By Id `PATCH /api/v1/users/update-profile/:id` [ Only exact user ]
- [x] Delete User By Id `DELETE /api/v1/users/delete-profile/:id` [ Only Admin and Super Admin ]

#### Admin

- [x] Create All User `POST /api/v1/admins/create-all-user` [ Only Super Admin ]
- [x] Update User By Id `PATCH /api/v1/admins/update-user/:id` [ Only Admin can update any user for it's permission field ]

#### Super Admin

- [x] Update User By Id `PATCH /api/v1/super-admins/update-user/:id` [ Super Admin can update any user data without password ]

#### Painting Service

- [x] Create Service `POST /api/v1/services/create-service` [ Only Admin and Super Admin ]
- [x] Get Service By Id `GET /api/v1/services/:id` [ All users ]
- [x] Update Service By Id `PATCH /api/v1/services/update-service/:id` [ Only Admin and Super Admin ]
- [x] Delete Service By Id `DELETE /api/v1/services/delete-service/:id` [ Only Admin and Super Admin ]
- [x] Get All Services `GET /api/v1/services/all-services` [ All users ]
- [x] Get ALL Available Services `GET /api/v1/services/all-available-services` [ Public Api ]
- [x] Get ALL Upcoming Services `GET /api/v1/services/all-upcoming-services` [ Public Api ]

#### Cart

- [x] Create Cart `POST /api/v1/carts/create-cart` [ Only User ]
- [x] Get All Carts `GET /api/v1/carts/all-carts` [ Only Admin and Super Admin ]
- [x] Get Cart By Id `GET /api/v1/carts/:id` [ All users ]
- [x] Update Cart By Id `PATCH /api/v1/carts/update-cart/:id` [ Only Admin and Super Admin ]
- [x] Delete Cart By Id `DELETE /api/v1/carts/delete-cart/:id` [ All users ]

#### Booking

- [x] Create Booking `POST /api/v1/bookings/create-booking` [ Only User ]
- [x] Get All Bookings `GET /api/v1/bookings/all-bookings` [ Only Admin and Super Admin ]
- [x] Get Booking By Id `GET /api/v1/bookings/:id` [ All users ]
- [x] Update Booking By Id `PATCH /api/v1/bookings/update-booking/:id` [ Only Admin and Super Admin ]
- [x] Delete Booking By Id `DELETE /api/v1/bookings/delete-booking/:id` [ All users ]
- [x] Update Booking Status By Id `PATCH /api/v1/bookings/update-booking-status-by-user/:id` [ Only User ]
- [x] Update Booking Status By Id `PATCH /api/v1/bookings/update-booking-status-by-management/:id` [ Only Admin and Super Admin ]

#### Schedule

- [x] Create Schedule `POST /api/v1/schedules/create-schedule` [ All users ]
- [x] Get All Schedules `GET /api/v1/schedules/all-schedules` [ Only Admin and Super Admin ]
- [x] Get Schedule By Id `GET /api/v1/schedules/:id` [ All users ]
- [x] Update Schedule By Id `PATCH /api/v1/schedules/update-schedule/:id` [ Only Admin and Super Admin ]
- [x] Delete Schedule By Id `DELETE /api/v1/schedules/delete-schedule/:id` [ Only Admin and Super Admin ]

#### Review and Rating

- [x] Create Review `POST /api/v1/reviews/create-review` [ Only User ]
- [x] Get All Reviews `GET /api/v1/reviews/all-reviews` [ All users ]
- [x] Get Review By Id `GET /api/v1/reviews/:id` [ Public Api ]
- [x] Update Review By Id `PATCH /api/v1/reviews/update-review/:id` [ Only Admin and Super Admin ]
- [x] Delete Review By Id `DELETE /api/v1/reviews/delete-review/:id` [ Only Admin and Super Admin ]

#### Notification

- [x] Create Notification `POST /api/v1/notifications/create-notification` [ Only Admin and Super Admin ]
- [x] Get All Notifications `GET /api/v1/notifications/all-notifications` [ All users ]
- [x] Get Notification By Id `GET /api/v1/notifications/:id` [ All users ]
- [x] Update Notification By Id `PATCH /api/v1/notifications/update-notification/:id` [ Only Admin and Super Admin ]
- [x] Delete Notification By Id `DELETE /api/v1/notifications/delete-notification/:id` [ Only Admin and Super Admin ]

#### Feedback

- [x] Create Feedback `POST /api/v1/feedbacks/create-feedback` [ Only User ]
- [x] Get All Feedbacks `GET /api/v1/feedbacks/all-feedbacks` [ Public Api ]
- [x] Get Feedback By Id `GET /api/v1/feedbacks/:id` [ All users ]
- [x] Update Feedback By Id `PATCH /api/v1/feedbacks/update-feedback/:id` [ All users ]
- [x] Delete Feedback By Id `DELETE /api/v1/feedbacks/delete-feedback/:id` [ All users ]

#### Blog

- [x] Create Blog `POST /api/v1/blogs/create-blog` [ Only Admin and Super Admin ]
- [x] Get All Blogs `GET /api/v1/blogs/all-blogs` [ Public Api ]
- [x] Get Blog By Id `GET /api/v1/blogs/:id` [ All users ]
- [x] Update Blog By Id `PATCH /api/v1/blogs/update-blog/:id` [ Only Admin and Super Admin ]
- [x] Delete Blog By Id `DELETE /api/v1/blogs/delete-blog/:id` [ Only Admin and Super Admin ]

#### Payment

- [x] Create Payment `POST /api/v1/payments/create-payment` [ Only User ]
- [x] Get All Payments `GET /api/v1/payments/all-payments` [ Only Admin and Super Admin ]
- [x] Get Payment By Id `GET /api/v1/payments/:id` [ All users ]
- [x] Update Payment By Id `PATCH /api/v1/payments/update-payment/:id` [ Only Admin and Super Admin ]
- [x] Delete Payment By Id `DELETE /api/v1/payments/delete-payment/:id` [ Only Admin and Super Admin ]

#### Subscription

- [x] Create Subscription `POST /api/v1/subscribes/create-subscribe` [ Public Api ]
- [x] Get All Subscriptions `GET /api/v1/subscribes/all-subscribes` [ Only Admin and Super Admin ]
- [x] Delete Subscription By Id `DELETE /api/v1/subscribes/:id` [ Only Admin and Super Admin ]

Happy coding!