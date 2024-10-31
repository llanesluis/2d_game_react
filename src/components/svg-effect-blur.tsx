export default function SVGEffectBlur() {
  return (
    <svg width="0" height="0" aria-hidden="true">
      <filter id="blur" y="-50%" x="-50%" width="200%" height="200%">
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="6"
          result="blurred"
        ></feGaussianBlur>

        <feColorMatrix in="blurred" type="saturate" values="3"></feColorMatrix>

        <feComposite in="SourceGraphic" operator="over"></feComposite>
      </filter>
    </svg>
  );
}
