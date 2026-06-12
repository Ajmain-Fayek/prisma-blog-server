import { Request, Response, NextFunction } from "express";
import { auth } from "../lib/auth";
import { UserRole, UserStatus } from "../enum";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        name: string;
        email: string;
        role: string;
        status: string;
        emailVerified: boolean;
      };
    }
  }
}

export const authenticate = (...roles: UserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const headers = req.headers;
    console.log(headers);
    const session = await auth.api.getSession({ headers });
    if (!session) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized session",
      });
    }

    const { user } = session;

    req.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      emailVerified: user.emailVerified,
      role: user.role!,
      status: user.status!,
    };

    if (req.user.status === UserStatus.BLOCKED || req.user.status === UserStatus.BLOCKED) {
      return res.status(403).json({
        success: false,
        message: "Invalide account status",
      });
    }

    if (roles.length && !roles.includes(req.user.role as UserRole)) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized role",
      });
    }

    console.log(req.user);
    next();
  };
};
