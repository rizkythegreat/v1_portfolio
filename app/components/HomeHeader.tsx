import React from 'react'
import Link from "next/link";
import { promises as fs } from "fs";
const HomeHeader = async () => {
    const socialmedia = await fs.readFile(
        process.cwd() + "/data/socialmedia.json",
        "utf-8"
    );
    const data = JSON.parse(socialmedia).sort((a: any, b: any) => {
        return b.id - a.id;
    });
    return (
        <>
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
            >
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl max-w-[15rem] md:max-w-sm">
                        <Link href="/">Rizky Rahman Salam</Link>
                    </h1>
                    <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                        Frontend Web Developer | React JS | Next JS
                    </h2>
                    <p className="mt-4 max-w-sm leading-normal">
                        I specialize in bridging the idea to exceptional and
                        accessible digital experiences.
                    </p>
                    <nav
                        className="nav hidden lg:block"
                        aria-label="In-page jump links"
                    >
                        <ul className="mt-16 w-max">
                            <li>
                                <Link
                                    className="group flex items-center py-3"
                                    href="#about"
                                >
                                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                        About
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="group flex items-center py-3"
                                    href="#experience"
                                >
                                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                        Experience
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="group flex items-center py-3"
                                    href="#projects"
                                >
                                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                        Projects
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <ul className="ml-1 mt-8 flex items-center"
                    aria-label="Social media">
                    {data.map((item: any) => (
                        <li className="mr-5 text-2xl" key={item.id}>
                            <a
                                href={item.url}
                                className='block hover:text-slate-200'
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className='sr-only'>{item.name}</span>
                                <i className={item.icon}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </header>
        </>
    )
}

export default HomeHeader