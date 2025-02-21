import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      className={cn('w-[60%]', className)}
      defaultValue={[50]}
      max={100}
      step={1}
      {...props}
    />
  );
}
