import ProjectCard from "@/app/components/ProjectCard";
import Link from "next/link";
import { promises as fs } from "fs";

const HomeProject = async () => {
    const projects = await fs.readFile(
        process.cwd() + "/data/projects.json",
        "utf-8"
    );
    const data = JSON.parse(projects).sort((a: any, b: any) => {
        return b.id - a.id;
    });

    return (
        <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Selected projects"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Projects
                </h2>
            </div>
            <div>
                <ul className="group/list">
                    {data.map(
                        (item: any) =>
                            item.selected && (
                                <li className="mb-12" key={item.id}>
                                    <ProjectCard
                                        title={item.title}
                                        link={item.link}
                                        description={item.description}
                                        techStack={item.techStack}
                                        image={item.image}
                                        selected={item.selected}
                                        github={item.github}
                                    />
                                </li>
                            )
                    )}
                </ul>


            </div>
        </section>
    );
};

export default HomeProject;
