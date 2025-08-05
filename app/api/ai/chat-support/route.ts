import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI only if API key is available
const openai = process.env.OPENAI_API_KEY ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}) : null;

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [], userId } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // If no OpenAI API key is configured, return demo response
    if (!openai) {
      const demoResponse = getDemoChatResponse(message);
      return NextResponse.json({
        success: true,
        response: demoResponse,
        timestamp: new Date().toISOString(),
        userId,
        demo: true
      });
    }

    const systemPrompt = `You are an expert customer support representative for ADmyBRAND AI Suite, an AI-powered marketing platform. 
    
    Key features of ADmyBRAND AI Suite:
    - AI-powered content generation for social media, emails, and ads
    - Smart campaign optimization and analytics
    - Automated audience targeting
    - Real-time performance tracking
    - Integration with 100+ marketing tools
    
    Your role is to:
    1. Help customers understand our platform features
    2. Provide technical support and troubleshooting
    3. Guide users through setup and onboarding
    4. Answer questions about pricing and plans
    5. Offer best practices for marketing campaigns
    
    Be friendly, professional, and helpful. Keep responses concise but informative.`;

    const messages = [
      { role: "system", content: systemPrompt },
      ...conversationHistory,
      { role: "user", content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages,
      max_tokens: 300,
      temperature: 0.7,
    });

    const aiResponse = completion.choices[0]?.message?.content || 'I apologize, but I\'m having trouble processing your request right now. Please try again or contact our support team.';

    return NextResponse.json({
      success: true,
      response: aiResponse,
      timestamp: new Date().toISOString(),
      userId
    });

  } catch (error) {
    console.error('AI Chat Support Error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
}

// Demo chat responses for when API key is not available
function getDemoChatResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
    return "Our pricing starts at $29/month for the Starter plan, $99/month for Professional, and $299/month for Enterprise. All plans include our core AI features with different usage limits. Would you like me to help you choose the right plan for your needs?";
  }
  
  if (lowerMessage.includes('feature') || lowerMessage.includes('what can') || lowerMessage.includes('capabilities')) {
    return "ADmyBRAND AI Suite offers AI-powered content generation, smart campaign optimization, automated audience targeting, real-time analytics, and integration with 100+ marketing tools. Our platform helps you create, optimize, and scale your marketing campaigns efficiently.";
  }
  
  if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('contact')) {
    return "We offer 24/7 support through live chat, email (support@admybrand.ai), and phone (+1-555-123-4567). Our average response time is under 2 hours. How can I assist you today?";
  }
  
  if (lowerMessage.includes('setup') || lowerMessage.includes('onboarding') || lowerMessage.includes('get started')) {
    return "Getting started is easy! Sign up for a free trial, connect your existing marketing tools, and our AI will analyze your current campaigns to provide personalized recommendations. Our onboarding process takes about 15 minutes.";
  }
  
  if (lowerMessage.includes('integration') || lowerMessage.includes('connect')) {
    return "We integrate with popular platforms like Mailchimp, HubSpot, Google Ads, Facebook Ads, LinkedIn, Twitter, and many more. Our API also allows custom integrations. Which platforms are you currently using?";
  }
  
  return "Thank you for your message! I'm here to help you with any questions about ADmyBRAND AI Suite. You can ask me about features, pricing, setup, integrations, or any other aspect of our platform. How can I assist you today?";
} 