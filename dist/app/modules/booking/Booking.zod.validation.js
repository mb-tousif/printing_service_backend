"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidation = void 0;
const zod_1 = require("zod");
const postValidation = zod_1.z.object({
    body: zod_1.z.object({
        serviceId: zod_1.z.string().uuid(),
        status: zod_1.z.enum(["Pending", "Confirmed", "Rejected", "Completed"], {
            required_error: "Status is required",
        }).optional(),
        paymentStatus: zod_1.z.enum(["Pending", "Partially Paid", "Paid"], {
            required_error: "Payment Status is required",
        }).optional(),
    }),
});
const updateValidation = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().uuid().optional(),
        serviceId: zod_1.z.string().uuid().optional(),
        status: zod_1.z
            .enum(["Pending", "Confirmed", "Rejected", "Completed", "Cancelled"], {
            required_error: "Status is required",
        })
            .optional(),
        paymentStatus: zod_1.z
            .enum(["Pending", "Partially Paid", "Paid"], {
            required_error: "Payment Status is required",
        })
            .optional(),
    }),
});
const changeBookingStatusByUser = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z.enum(["Pending", "Confirmed", "Cancelled"], {
            required_error: "Status is required",
        }),
    }),
});
const changeBookingStatusByManagement = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z.enum(["Rejected", "Delivered", "Completed"], {
            required_error: "Status is required",
        }),
    }),
});
exports.BookingValidation = {
    postValidation,
    updateValidation,
    changeBookingStatusByUser,
    changeBookingStatusByManagement,
};
//# sourceMappingURL=Booking.zod.validation.js.map