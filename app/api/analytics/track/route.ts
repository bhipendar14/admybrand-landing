import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for demo purposes
// In production, use Redis, PostgreSQL, or a proper analytics service
let analyticsData = {
  pageViews: 0,
  uniqueVisitors: new Set(),
  conversions: 0,
  engagement: 0,
  campaigns: new Map(),
  realTimeUsers: 0
};

export async function POST(request: NextRequest) {
  try {
    const { event, userId, campaignId, data } = await request.json();

    if (!event) {
      return NextResponse.json({ error: 'Event is required' }, { status: 400 });
    }

    // Track unique visitors
    if (userId && !analyticsData.uniqueVisitors.has(userId)) {
      analyticsData.uniqueVisitors.add(userId);
    }

    // Update metrics based on event type
    switch (event) {
      case 'page_view':
        analyticsData.pageViews++;
        analyticsData.realTimeUsers++;
        break;
      
      case 'conversion':
        analyticsData.conversions++;
        break;
      
      case 'engagement':
        analyticsData.engagement++;
        break;
      
      case 'campaign_start':
        if (campaignId) {
          analyticsData.campaigns.set(campaignId, {
            id: campaignId,
            startTime: new Date().toISOString(),
            views: 0,
            clicks: 0,
            conversions: 0,
            ...data
          });
        }
        break;
      
      case 'campaign_view':
        if (campaignId && analyticsData.campaigns.has(campaignId)) {
          const campaign = analyticsData.campaigns.get(campaignId);
          campaign.views++;
          analyticsData.campaigns.set(campaignId, campaign);
        }
        break;
      
      case 'campaign_click':
        if (campaignId && analyticsData.campaigns.has(campaignId)) {
          const campaign = analyticsData.campaigns.get(campaignId);
          campaign.clicks++;
          analyticsData.campaigns.set(campaignId, campaign);
        }
        break;
      
      case 'campaign_conversion':
        if (campaignId && analyticsData.campaigns.has(campaignId)) {
          const campaign = analyticsData.campaigns.get(campaignId);
          campaign.conversions++;
          analyticsData.campaigns.set(campaignId, campaign);
        }
        break;
    }

    // Simulate real-time user decay
    setTimeout(() => {
      analyticsData.realTimeUsers = Math.max(0, analyticsData.realTimeUsers - 1);
    }, 300000); // 5 minutes

    return NextResponse.json({
      success: true,
      event,
      timestamp: new Date().toISOString(),
      currentMetrics: {
        pageViews: analyticsData.pageViews,
        uniqueVisitors: analyticsData.uniqueVisitors.size,
        conversions: analyticsData.conversions,
        engagement: analyticsData.engagement,
        realTimeUsers: analyticsData.realTimeUsers
      }
    });

  } catch (error) {
    console.error('Analytics Tracking Error:', error);
    return NextResponse.json(
      { error: 'Failed to track event' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Calculate conversion rate
    const conversionRate = analyticsData.pageViews > 0 
      ? (analyticsData.conversions / analyticsData.pageViews * 100).toFixed(1)
      : 0;

    // Calculate engagement rate
    const engagementRate = analyticsData.pageViews > 0
      ? (analyticsData.engagement / analyticsData.pageViews * 100).toFixed(1)
      : 0;

    return NextResponse.json({
      success: true,
      metrics: {
        pageViews: analyticsData.pageViews,
        uniqueVisitors: analyticsData.uniqueVisitors.size,
        conversions: analyticsData.conversions,
        engagement: analyticsData.engagement,
        realTimeUsers: analyticsData.realTimeUsers,
        conversionRate: parseFloat(conversionRate),
        engagementRate: parseFloat(engagementRate)
      },
      campaigns: Array.from(analyticsData.campaigns.values()),
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Analytics Get Error:', error);
    return NextResponse.json(
      { error: 'Failed to get analytics' },
      { status: 500 }
    );
  }
} 