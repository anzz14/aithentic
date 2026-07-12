import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

export function BrandMark({
  className = "h-9 w-auto",
  priority = false,
  width = 360,
  height = 240,
}: BrandMarkProps) {
  return (
    <Image
      src="/d5f942e3-f32f-47a1-b0db-8536c9fac204.png"
      alt="Aithentic"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}