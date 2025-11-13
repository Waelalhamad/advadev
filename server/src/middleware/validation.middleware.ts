import { Request, Response, NextFunction } from "express";

export const validateContactForm = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { name, email, phone } = req.body;

  // Check required fields
  if (!name || !email || !phone) {
    res.status(400).json({
      success: false,
      message: "Please provide name, email, and phone number",
    });
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({
      success: false,
      message: "Please provide a valid email address",
    });
    return;
  }

  // Validate name length
  if (name.trim().length < 2) {
    res.status(400).json({
      success: false,
      message: "Name must be at least 2 characters long",
    });
    return;
  }

  // Validate phone (basic check)
  if (phone.trim().length < 7) {
    res.status(400).json({
      success: false,
      message: "Please provide a valid phone number",
    });
    return;
  }

  next();
};
