import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Validation function
function validateContactForm(data: any) {
  const errors: string[] = []

  // Required fields validation
  if (!data.firstName || data.firstName.trim().length < 2) {
    errors.push('First name must be at least 2 characters long')
  }

  if (!data.lastName || data.lastName.trim().length < 2) {
    errors.push('Last name must be at least 2 characters long')
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Please provide a valid email address')
  }

  // Subject validation
  if (!data.subject || data.subject.trim().length < 5) {
    errors.push('Subject must be at least 5 characters long')
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long')
  }

  // Phone validation (optional but if provided, should be valid)
  if (data.phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    if (!phoneRegex.test(data.phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.push('Please provide a valid phone number')
    }
  }

  return errors
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, subject, message } = body

    // Validate form data
    const validationErrors = validateContactForm(body)
    
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed', 
          errors: validationErrors 
        },
        { status: 400 }
      )
    }

    // Check if email credentials are configured
    const hasEmailCredentials = process.env.EMAIL_USER && process.env.EMAIL_PASS

    if (!hasEmailCredentials) {
      // Demo mode - simulate successful email sending
      console.log('Demo mode: Contact form submission received', {
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toISOString()
      })

      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      return NextResponse.json(
        { 
          success: true, 
          message: 'Message sent successfully! (Demo mode - no actual email sent)',
          demo: true,
          submission: {
            firstName,
            lastName,
            email,
            phone,
            subject,
            message,
            timestamp: new Date().toISOString()
          }
        },
        { status: 200 }
      )
    }

    // Production mode - send actual emails
    console.log('Production mode: Sending email with credentials')

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'support@admybrand.ai', // You can change this to your preferred email
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>IP Address:</strong> ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'}</p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Send confirmation email to user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting ADmyBRAND',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Thank you for contacting us!
          </h2>
          
          <p style="line-height: 1.6; color: #555;">
            Dear ${firstName} ${lastName},
          </p>
          
          <p style="line-height: 1.6; color: #555;">
            Thank you for reaching out to ADmyBRAND. We have received your message and our team will get back to you as soon as possible.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Your Message Details</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #fff; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <p style="line-height: 1.6; color: #555;">
            We typically respond within 24 hours during business days. If you have an urgent inquiry, please don't hesitate to call us at +1 (555) 123-4567.
          </p>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #e9ecef; border-radius: 8px;">
            <h4 style="color: #333; margin-top: 0;">What's Next?</h4>
            <ul style="color: #555; line-height: 1.6;">
              <li>Our team will review your message</li>
              <li>We'll respond with detailed information or questions</li>
              <li>If needed, we'll schedule a call or demo</li>
            </ul>
          </div>
          
          <p style="line-height: 1.6; color: #555; margin-top: 20px;">
            Best regards,<br>
            The ADmyBRAND Team
          </p>
        </div>
      `,
    }

    await transporter.sendMail(confirmationMailOptions)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! We\'ll get back to you soon.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again later.' 
      },
      { status: 500 }
    )
  }
} 