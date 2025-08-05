import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Google AI only if API key is available
const genAI = process.env.GOOGLE_AI_API_KEY ? new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const { campaignData, metrics, goals } = await request.json();

    if (!campaignData) {
      return NextResponse.json({ error: 'Campaign data is required' }, { status: 400 });
    }

    // If no Google AI API key is configured, return demo analysis
    if (!genAI) {
      const demoAnalysis = getDemoAnalysis(campaignData, metrics, goals);
      return NextResponse.json({
        success: true,
        analysis: demoAnalysis,
        timestamp: new Date().toISOString(),
        demo: true
      });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
    Analyze this marketing campaign data and provide strategic insights:
    
    Campaign Data: ${JSON.stringify(campaignData)}
    Current Metrics: ${JSON.stringify(metrics)}
    Goals: ${JSON.stringify(goals)}
    
    Please provide:
    1. Performance analysis
    2. Key insights and trends
    3. Optimization recommendations
    4. ROI projections
    5. Risk assessment
    
    Format the response as JSON with the following structure:
    {
      "performance": "analysis text",
      "insights": ["insight1", "insight2", "insight3"],
      "recommendations": ["rec1", "rec2", "rec3"],
      "roiProjection": "projection text",
      "riskLevel": "low/medium/high",
      "riskFactors": ["risk1", "risk2"],
      "nextSteps": ["step1", "step2", "step3"]
    }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Try to parse JSON from the response
    let analysis;
    try {
      // Extract JSON from the response (AI might wrap it in markdown)
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      analysis = jsonMatch ? JSON.parse(jsonMatch[0]) : {
        performance: text,
        insights: ["Analysis completed"],
        recommendations: ["Review the detailed analysis above"],
        roiProjection: "Based on current trends",
        riskLevel: "medium",
        riskFactors: ["Standard market risks"],
        nextSteps: ["Implement recommended optimizations"]
      };
    } catch (parseError) {
      analysis = {
        performance: text,
        insights: ["Analysis completed"],
        recommendations: ["Review the detailed analysis above"],
        roiProjection: "Based on current trends",
        riskLevel: "medium",
        riskFactors: ["Standard market risks"],
        nextSteps: ["Implement recommended optimizations"]
      };
    }

    return NextResponse.json({
      success: true,
      analysis,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('AI Campaign Analysis Error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze campaign' },
      { status: 500 }
    );
  }
}

// Demo analysis for when API key is not available
function getDemoAnalysis(campaignData: any, metrics: any, goals: any) {
  return {
    performance: "Your campaign is showing strong performance with a 15% increase in engagement and 23% improvement in conversion rates. The ROI is currently at 2.8x, which is above industry average.",
    insights: [
      "Email campaigns are performing 40% better than social media ads",
      "Mobile users show 3x higher engagement rates",
      "Peak engagement occurs between 2-4 PM on weekdays"
    ],
    recommendations: [
      "Increase budget allocation to email campaigns by 25%",
      "Optimize for mobile-first content delivery",
      "Schedule posts during peak engagement hours"
    ],
    roiProjection: "Based on current trends, we project a 35% increase in ROI over the next quarter if optimizations are implemented.",
    riskLevel: "low",
    riskFactors: [
      "Seasonal fluctuations in Q4",
      "Potential algorithm changes on social platforms"
    ],
    nextSteps: [
      "Implement A/B testing for email subject lines",
      "Set up automated mobile optimization",
      "Monitor competitor activity and adjust strategy"
    ]
  };
} 