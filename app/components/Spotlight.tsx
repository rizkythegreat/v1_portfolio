import Script from "next/script";

const SpotLight = () => {
    const handleMouseMove = (e: any) => {
        const spotlight = document.getElementById("spotlight");
        if (spotlight) {
            spotlight.style.setProperty("--x", e.clientX + "px");
            spotlight.style.setProperty("--y", e.clientY + "px");
        }
    };

    return (
        <>
            <div
                id="spotlight"
                className="pointer-events-none fixed inset-0 z-30 transition duration-300"
            ></div>
            <Script id="handleSpotlight">
                {`window.addEventListener("mousemove", ${handleMouseMove})`}
            </Script>
        </>
    );
};

export default SpotLight;
