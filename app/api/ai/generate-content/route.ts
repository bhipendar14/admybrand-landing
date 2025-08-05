import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI only if API key is available
const openai = process.env.OPENAI_API_KEY ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}) : null;

export async function POST(request: NextRequest) {
  try {
    const { prompt, type, brandVoice, targetAudience } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // If no OpenAI API key is configured, return demo content
    if (!openai) {
      const demoContent = getDemoContent(prompt, type, brandVoice, targetAudience);
      return NextResponse.json({
        success: true,
        content: demoContent,
        type,
        timestamp: new Date().toISOString(),
        demo: true
      });
    }

    let systemPrompt = '';
    let userPrompt = '';

    switch (type) {
      case 'social_media':
        systemPrompt = `You are an expert marketing copywriter specializing in social media content. 
        Create engaging, viral-worthy content that aligns with the brand voice: ${brandVoice || 'professional yet friendly'}.
        Target audience: ${targetAudience || 'general consumers'}.`;
        userPrompt = `Create a compelling social media post about: ${prompt}`;
        break;
      
      case 'email':
        systemPrompt = `You are an expert email marketing copywriter. 
        Create high-converting email content that drives action.
        Brand voice: ${brandVoice || 'professional yet friendly'}.
        Target audience: ${targetAudience || 'general consumers'}.`;
        userPrompt = `Write an email about: ${prompt}`;
        break;
      
      case 'ad_copy':
        systemPrompt = `You are an expert advertising copywriter. 
        Create compelling ad copy that drives conversions.
        Brand voice: ${brandVoice || 'professional yet friendly'}.
        Target audience: ${targetAudience || 'general consumers'}.`;
        userPrompt = `Create ad copy for: ${prompt}`;
        break;
      
      default:
        systemPrompt = `You are an expert marketing copywriter. 
        Create compelling marketing content.
        Brand voice: ${brandVoice || 'professional yet friendly'}.
        Target audience: ${targetAudience || 'general consumers'}.`;
        userPrompt = `Create marketing content about: ${prompt}`;
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const generatedContent = completion.choices[0]?.message?.content || '';

    return NextResponse.json({
      success: true,
      content: generatedContent,
      type,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('AI Content Generation Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}

// Demo content generator for when API key is not available
function getDemoContent(prompt: string, type: string, brandVoice: string, targetAudience: string): string {
  const demoTemplates = {
    social_media: [
      `🚀 Exciting news! We're revolutionizing the way businesses approach ${prompt}. Our cutting-edge solutions are designed to help you achieve remarkable results while staying ahead of the competition. #Innovation #Growth #Success`,
      `💡 Did you know that ${prompt} can transform your business outcomes? We've helped thousands of companies unlock their potential and drive unprecedented growth. Ready to join them? #BusinessGrowth #Transformation`,
      `🎯 Looking to elevate your ${prompt} strategy? Our proven approach combines innovation with results-driven methodology. Let's make your goals a reality! #Strategy #Results #Excellence`
    ],
    email: [
      `Subject: Transform Your ${prompt} Strategy Today\n\nDear Valued Partner,\n\nWe're excited to share how our innovative approach to ${prompt} can revolutionize your business outcomes.\n\nOur team has developed cutting-edge solutions that combine proven methodologies with the latest industry insights.\n\nReady to discover the difference? Let's connect and explore how we can help you achieve your goals.\n\nBest regards,\nThe ADmyBRAND Team`,
      `Subject: Unlock Your ${prompt} Potential\n\nHello there!\n\nWe've noticed you're looking to enhance your ${prompt} capabilities. Our comprehensive solutions are designed to deliver measurable results.\n\nFrom strategy development to implementation, we're here to support your success every step of the way.\n\nLet's discuss how we can help you reach new heights.\n\nWarm regards,\nYour Success Partner`
    ],
    ad_copy: [
      `Transform Your ${prompt} Today!\n\n🚀 Proven Results • 💡 Expert Strategy • 📈 Measurable Growth\n\nJoin thousands of successful businesses who've revolutionized their approach. Limited time offer - act now!`,
      `Revolutionary ${prompt} Solutions\n\n⚡ Fast Implementation • 🎯 Targeted Results • 💰 ROI Guaranteed\n\nDon't let your competition get ahead. Start your transformation today!`,
      `Unlock Your ${prompt} Potential\n\n🔥 Industry-Leading Technology • 📊 Data-Driven Insights • 🏆 Award-Winning Approach\n\nExperience the difference that makes all the difference.`
    ]
  };

  const templates = demoTemplates[type as keyof typeof demoTemplates] || demoTemplates.social_media;
  const randomIndex = Math.floor(Math.random() * templates.length);
  return templates[randomIndex];
} 