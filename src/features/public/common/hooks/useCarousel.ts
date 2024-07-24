import { CarouselRef } from "antd/es/carousel";
import { createRef, RefObject } from "react";

export function useCarousel() {
  const carouselRef: RefObject<CarouselRef> = createRef<CarouselRef>();

  const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY < 0) {
      carouselRef.current?.prev();
    } else {
      carouselRef.current?.next();
    }
  };

  return { carouselRef, onWheel };
}
