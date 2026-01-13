'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function NavMenu() {
  const menus = [
    { link: '#about', name: 'About' },
    { link: '#experience', name: 'Experience' },
    { link: '#projects', name: 'Projects' }
  ];

  const [isMenuActive, setIsMenuActive] = useState('#about');

  useEffect(() => {
    const sectionIds = menus.map((menu) => menu.link.replace('#', ''));
    const observerOptions = {
      root: null,
      // rootMargin menentukan "garis batas" deteksi.
      // -20% dari atas dan -40% dari bawah memastikan section yang di tengah yang aktif.
      rootMargin: '-20% 0% -40% 0%',
      threshold: 0
    };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsMenuActive(`#${entry.target.id}`);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ul className="mt-16 w-max">
      {menus.map((item) => {
        const isActive = isMenuActive === item.link;

        return (
          <li key={item.link}>
            <Link
              onClick={() => setIsMenuActive(item.link)}
              className="group flex items-center py-3"
              href={item.link}>
              <span
                className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none 
                ${isActive ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'} 
                group-hover:w-16 group-hover:bg-slate-200`}></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors
                ${isActive ? 'text-slate-200' : 'text-slate-500'} 
                group-hover:text-slate-200`}>
                {item.name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavMenu;
