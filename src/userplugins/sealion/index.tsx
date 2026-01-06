import definePlugin from "@utils/types";
import { createRoot } from "@webpack/common";
import { useState } from "@webpack/common";
import { useEffect } from "@webpack/common";
import IMAGE from "./image";
import AUDIO from "./audio";

let root: any = null;

const divStyle = {
    position: "fixed" as any,
    zIndex: 67676767,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
};

const imgStyle = {
    width: "100vw",
    height: "100vh",
    objectFit: "fill"
};

function Sealion() {
    const [render, setRender] = useState(false);
    console.log("sealion rendered");
    useEffect(() => {
        const interval = setInterval(() => {
            const rng = Math.trunc(Math.random() * 1000);
            console.log(rng);
            if (rng == 1) {
                setRender(true);
            } else {
                setRender(false);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return render ?
        <div style={{ ...divStyle }}>
            <img src={IMAGE} style={imgStyle as any} />
            <audio autoPlay src={AUDIO} style={{ display: "none" }} />
        </div> : null;
}


export default definePlugin({
    name: "sealion",
    description: "sealion",
    authors: [{ name: "arsikk", id: 9_10_21n }],
    start: () => {
        const container = document.createElement("div");
        container.id = "sealion-root";
        document.body.appendChild(container);

        root = createRoot(container);
        root.render(<Sealion />);
    },

    stop: () => {
        if (root) {
            root.unmount();
            document.getElementById("sealion-root")?.remove();
        }
    }
});
