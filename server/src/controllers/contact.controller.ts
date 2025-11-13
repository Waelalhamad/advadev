import { Request, Response } from "express";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
}

export const submitContactForm = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, service, message }: ContactFormData = req.body;

    // Log the contact form submission (In production, you would save to database or send email)
    console.log("\n📧 New Contact Form Submission:");
    console.log("================================");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Service: ${service || "Not specified"}`);
    console.log(`Message: ${message || "No message provided"}`);
    console.log("================================\n");

    // TODO: Implement email sending or database storage
    // For now, we'll just return a success response

    // Simulate a slight delay to mimic real processing
    await new Promise(resolve => setTimeout(resolve, 500));

    res.status(200).json({
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
      data: {
        name,
        email,
        submittedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process your request. Please try again later.",
    });
  }
};
