import React from "react";
import Badge from "./Badge";

type ExperienceCardProps = {
    title: string;
    position: string;
    start: string;
    end: string;
    description: string;
    link: string | undefined;
    skills: string[];
};

const ExperienceCard = ({
    title,
    position,
    start,
    end,
    description,
    link,
    skills,
}: ExperienceCardProps) => {
    return (
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                aria-label={`${start} to ${end}`}
            >
                {start} {start !== end ? `- ${end}` : ""}
            </header>
            <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                        <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base"
                            href={link ?? "#!"}
                            target={link ? "_blank" : "_self"}
                            rel="noreferrer"
                            aria-label="`${position} at ${title}`"
                        >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span className="inline-flex gap-2 items-center">
                                {title}
                                {link && (
                                    <i className="fa-solid fa-up-right-from-square inline-block h-2.5 w-2.5 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px"></i>
                                )}
                            </span>
                        </a>
                    </div>
                    <div>
                        <div className="text-slate-500" aria-hidden="true">
                            {position}
                        </div>
                    </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">{description}</p>
                <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                >
                    {skills.map((skill, index) => (
                        <li className="mr-1.5 mt-2" key={index}>
                            <Badge name={skill} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCard;
