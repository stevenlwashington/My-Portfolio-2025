import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero 
      onViewImpact={() => console.log('View Impact clicked')}
      onAskAI={() => console.log('Ask AI Twin clicked')}
    />
  );
}
