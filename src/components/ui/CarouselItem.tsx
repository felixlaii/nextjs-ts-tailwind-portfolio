import React, { useState } from 'react';
import { CarouselCardProps } from '@/types/component-types';

export function CarouselItem({ index, activeIndex, children}: CarouselCardProps) {
    const [scaled, setScaled] = useState<Boolean>(false);

    const offset = (index - activeIndex) / 4;
    const direction = Math.sign(index - activeIndex);
    const absOffset = Math.abs(offset);
}