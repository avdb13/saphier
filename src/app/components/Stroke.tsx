const Stroke = () => (
  <svg className="intro stroke font-serif" viewBox="-40 -20 200 70">
    <text textAnchor="start" x="0" y="0" className="text text-stroke" clipPath="url(#text1)">val op</text>
    <text textAnchor="start" x="0" y="20" className="text text-stroke" clipPath="url(#text2)">met content die</text>
    <text textAnchor="start" x="0" y="40" className="text text-stroke" clipPath="url(#text3)">herinnerd wordt.</text>
    <text textAnchor="start" x="0" y="0" className="text text-stroke text-stroke-2" clipPath="url(#text1)">val op</text>
    <text textAnchor="start" x="0" y="20" className="text text-stroke text-stroke-2" clipPath="url(#text2)">met content die</text>
    <text textAnchor="start" x="0" y="40" className="text text-stroke text-stroke-2" clipPath="url(#text3)">herinnerd wordt.</text>
    <defs>
      <clipPath id="text1">
        <text textAnchor="start" x="0" y="0" className="text">val op</text>
      </clipPath>
      <clipPath id="text2">
        <text textAnchor="start" x="0" y="20" className="text">met content die</text>
      </clipPath>
      <clipPath id="text3">
        <text textAnchor="start" x="0" y="40" className="text">herinnerd wordt.</text>
      </clipPath>
      <linearGradient id="shape-gradient-a">
        <stop offset="0%" stopColor="var(--color-start)" />
        <stop offset="100%" stopColor="var(--color-stop)" />
      </linearGradient>
      <linearGradient id="shape-gradient-b">
        <stop offset="0%" stopColor="var(--color-stop)" />
        <stop offset="100%" stopColor="var(--color-start)" />
      </linearGradient>
      <linearGradient id="shape-gradient-c">
        <stop offset="0%" stopColor="var(--color-stop)" />
        <stop offset="50%" stopColor="var(--color-start)" />
        <stop offset="100%" stopColor="var(--color-stop)" />
      </linearGradient>
    </defs>
  </svg>
)

export default Stroke
