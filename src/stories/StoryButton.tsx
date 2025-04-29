import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

export function StoryButton({
  variant,
  size,
  asChild = false,
  ...props
}: Readonly<ComponentProps<typeof Button>>) {
  const [count, setCount] = useState(0);

  return (
    <Button
      onClick={() => setCount((count) => count + 1)}
      variant={variant}
      size={size}
      asChild={asChild}
      {...props}
    >
      <p>count is {count}</p>
    </Button>
  );
}
