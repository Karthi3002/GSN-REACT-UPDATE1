
import React from 'react';

import {

  Handshake,
  Share2,
  BarChart2,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    className: 'headlineCard',
    title: 'Futuristic Networking, Rooted in Energy',
    highlight: true,
  },
  {
    icon: <Handshake size={28} color="#1A1A1A" />,
    title: 'AI-powered Matchmaking',
    description: 'Get introduced to people aligned with your goals',
  },
  {
    icon: <Share2 size={28} color="#1A1A1A" />,
    title: 'Referral Intelligence',
    description: 'Suggestions you didn’t even know you needed',
  },
  {
    icon: <BarChart2 size={28} color="#1A1A1A" />,
    title: 'Clarity Dashboard',
    description: 'Track referrals, growth, gratitude slips & nudges',
  },
  {
    icon: <CheckCircle size={28} color="#1A1A1A" />,
    title: 'Subtle Accountability',
    description: 'GSN gently keeps you consistent, without pressure',
  },
  {
    icon: <Sparkles size={28} color="#1A1A1A" />,
    title: 'Energy-Aligned Nudges',
    description: 'Weekly guidance that combines strategy + inner growth',
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">The Smart Side of GSN</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${feature.highlight ? 'highlight-card' : ''}`}
          >
            <div className="feature-icon">{feature.icon}</div>
            <div>
              <h3 className="feature-heading">{feature.title}</h3>
              {feature.description && <p className="feature-desc">{feature.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
