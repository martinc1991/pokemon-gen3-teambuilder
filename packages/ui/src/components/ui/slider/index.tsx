import { cn } from '@/lib/utils';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>>(
  ({ className, ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn('relative flex w-full touch-none select-none items-center hover:cursor-pointer', className)}
      {...props}
    >
      <SliderPrimitive.Track className='relative h-1.5 w-full grow overflow-hidden rounded-full bg-border'>
        <SliderPrimitive.Range className={cn('absolute h-full bg-primary', props.disabled && 'bg-border')} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(
          'block w-4 h-4 transition-colors border rounded-full shadow border-primary bg-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
          props.disabled && 'border-border bg-border'
        )}
      />
    </SliderPrimitive.Root>
  )
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
