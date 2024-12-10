import { cn } from "../../utils/twMerge";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-700/20", className)}
      {...props}
    />
  );
}

export { Skeleton };