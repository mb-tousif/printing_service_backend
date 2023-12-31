"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const signInValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: "Name is required",
        })
            .min(3)
            .max(255),
        email: zod_1.z
            .string({
            required_error: "Email is required",
        })
            .email(),
        password: zod_1.z
            .string({
            required_error: "Password is required",
        })
            .min(6)
            .max(255),
        gender: zod_1.z.enum(["Male", "Female", "Other"], {
            required_error: "Gender is required",
        }),
        role: zod_1.z
            .enum(["user", "admin", "super_admin"], {
            required_error: "Role is required",
        })
            .optional(),
        contact: zod_1.z.string({
            required_error: "Contact No is required",
        }),
        address: zod_1.z.string({
            required_error: "Address is required",
        }),
        imgUrl: zod_1.z.string().optional(),
    }),
});
const loginValidation = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: "Email is required",
        }),
        password: zod_1.z.string({
            required_error: "Password is required",
        }),
    }),
});
const refreshTokenZodSchema = zod_1.z.object({
    cookies: zod_1.z.object({
        refreshToken: zod_1.z.string({
            required_error: "Refresh Token is required",
        }),
    }),
});
const resetPasswordValidation = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: "Email is required",
        }),
        password: zod_1.z.string({
            required_error: "Password is required",
        }),
    }),
});
exports.AuthValidation = {
    signInValidation,
    loginValidation,
    refreshTokenZodSchema,
    resetPasswordValidation,
};
//# sourceMappingURL=Auth.zod.validation.js.map