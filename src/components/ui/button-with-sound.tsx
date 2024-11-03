import useSound from "use-sound";

export default function ButtonWithSound({
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const [playClickSound] = useSound("/assets/sounds/click_1.mp3", {
    volume: 2,
  });
  return (
    <button
      onClick={(e) => {
        playClickSound();
        onClick?.(e);
      }}
      {...props}
    />
  );
}
