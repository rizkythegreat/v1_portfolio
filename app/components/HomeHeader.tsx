import React from 'react';
import Link from 'next/link';
import { promises as fs } from 'fs';
import NavMenu from './NavMenu';
const HomeHeader = async () => {
  const socialmedia = await fs.readFile(process.cwd() + '/data/socialmedia.json', 'utf-8');
  const data = JSON.parse(socialmedia).sort((a: any, b: any) => {
    return b.id - a.id;
  });
  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <Link href="/">Rizky Rahman Salam</Link>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
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
          {data.map((item: any) => (
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
