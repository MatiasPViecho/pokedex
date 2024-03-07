'use client';
import { ReactElement, useRef, useState, MouseEvent } from 'react';
interface DraggableProps {
  rootClass?: string | undefined | null;
  children: ReactElement;
}
export const Draggable = ({ rootClass = '', children }: DraggableProps) => {
  const ourRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    scrollLeft: 0,
  });

  const handleDragStart = (e: MouseEvent) => {
    if (!ourRef.current) return;
    const slider = ourRef.current?.children[0] as HTMLElement;
    const startX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;
    mouseCoords.current = { startX, scrollLeft };
    setIsMouseDown(true);
  };
  const handleDragEnd = (e: MouseEvent) => {
    setIsMouseDown(false);
    if (!ourRef.current) return;
  };
  const handleDrag = (e: MouseEvent) => {
    if (!isMouseDown || !ourRef.current) return;
    const slider = ourRef.current?.children[0] as HTMLElement;
    const x = e.pageX - slider.offsetLeft;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
  };

  return (
    <div
      ref={ourRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      className={rootClass ? rootClass : ''}
    >
      {children}
    </div>
  );
};
