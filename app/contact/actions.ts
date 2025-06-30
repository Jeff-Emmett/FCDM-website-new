"use server"

import { redirect } from "next/navigation"

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const company = formData.get("company") as string
  const message = formData.get("message") as string

  // Email configuration
  const recipientEmail = "info@fullcircledigitalmarketing.ca"

  // Create email content
  const emailSubject = `New Contact Form Submission from ${name}`
  const emailBody = `
    New contact form submission from your website:
    
    Name: ${name}
    Email: ${email}
    Phone: ${phone || "Not provided"}
    Company: ${company || "Not provided"}
    
    Message:
    ${message}
    
    ---
    This message was sent from the Full Circle Digital Marketing contact form.
  `

  try {
    // In a real implementation, you would use a service like Resend, SendGrid, or similar
    // For now, we'll simulate the email sending
    console.log("Sending email to:", recipientEmail)
    console.log("Subject:", emailSubject)
    console.log("Body:", emailBody)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In production, you would implement actual email sending here:
    /*
    await resend.emails.send({
      from: 'noreply@fullcircledigitalmarketing.ca',
      to: recipientEmail,
      subject: emailSubject,
      text: emailBody,
      replyTo: email,
    })
    */

    console.log("Email sent successfully!")
  } catch (error) {
    console.error("Failed to send email:", error)
    throw new Error("Failed to send message. Please try again.")
  }

  // Redirect to a thank you page or back to contact with success message
  redirect("/contact?success=true")
}
