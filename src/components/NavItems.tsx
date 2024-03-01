'use client';
import { PRODUCT_CATEGORIES } from '@/config';
import React from 'react';
import NavItem from './NavItem';

interface NavItems {}

const NavItems: React.FC<NavItems> = ({}) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const isAnyOpen = activeIndex !== null;
  const navRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };
        const isOpen = i === activeIndex;
        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isAnyOpen={isAnyOpen}
            key={category.value}
            isOpen={isOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
