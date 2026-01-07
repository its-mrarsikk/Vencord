import definePlugin from "@utils/types";

export default definePlugin({
    name: "tianmim",
    description: "tianmim plugin",
    authors: [{ name: "tianmim", id: 1427196222875373726n }],
    start() {
        console.log("tianmimifying");
        const replaceText = (node: Node) => {
            // console.log("tianmimification invoked: ", node.nodeName);
            if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
                node.textContent = "tianmim";
            } else {
                node.childNodes.forEach(replaceText);
            }
        };

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => replaceText(node));
            });
        });

        replaceText(document.body);

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        (window as any).tianmim = observer;
    },

    stop() {
        if ((window as any).tianmim) {
            (window as any).tianmim.disconnect();
        }
    }
});
