'use client';
import React from 'react';
import Link from 'next/link';
import NavMenu from './NavMenu';
// import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import { SocialMedia } from '@/utils/getData';
// import gsap from 'gsap';

interface HomeHeaderProps {
  socialData: SocialMedia[];
}

const HomeHeader = ({ socialData }: HomeHeaderProps) => {
  // useGSAP(() => {
  //   const nameSplit = new SplitText('.name', { type: 'chars, words' });
  //   const titleSplit = new SplitText('.title', { type: 'chars, words' });
  //   gsap.from(nameSplit.chars, {
  //     yPercent: 100,
  //     duration: 1,
  //     ease: 'expo.out',
  //     stagger: 0.05
  //   });
  //   gsap.from(titleSplit.chars, {
  //     yPercent: 100,
  //     duration: 1,
  //     ease: 'expo.out',
  //     stagger: 0.06,
  //     delay: 1
  //   });
  // }, []);
  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="name text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <Link href="/">Rizky Rahman Salam</Link>
          </h1>
          <h2 className="title mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Frontend Engineer
          </h2>
          <p className="mt-4 max-w-sm leading-normal">
            I specialize in bridging the idea to exceptional and accessible digital experiences.
          </p>
          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <NavMenu />
          </nav>
        </div>
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          {socialData.map((item: any) => (
            <li className="mr-5 text-2xl" key={item.id}>
              <a
                href={item.url}
                className="block hover:text-slate-200"
                target="_blank"
                rel="noreferrer">
                <span className="sr-only">{item.name}</span>
                <i className={item.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default HomeHeader;
