import React from "react";

const Badge = ({ name }: { name: string }) => {
    return (
        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
            {name}
        </div>
    );
};

export default Badge;
