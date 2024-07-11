export default function NoiseFrame() {
  return (
    <svg className="noise">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0 .2" numOctaves="3">
          <animate
            id="noiseAnimate"
            attributeName="baseFrequency"
            attributeType="XML"
            values="5;10;5"
            keyTimes="0;.5;1"
            begin="0s"
            dur=".1s"
            repeatCount="indefinite"
          />
        </feTurbulence>
      </filter>

      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
}
