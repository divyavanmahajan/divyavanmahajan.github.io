import { visit } from "unist-util-visit";

const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/**
 * Rehype plugin: for links to /ainews/YYYY/MM/slug, appends " (Mon YYYY)"
 * to the link text so source lists in briefings show dates.
 */
export function rehypeAinewsDates() {
    return function (tree) {
        visit(tree, "element", (node) => {
            if (node.tagName !== "a") return;
            const href = node.properties?.href;
            if (!href) return;
            const match = href.match(/\/ainews\/(\d{4})\/(\d{2})\//);
            if (!match) return;
            const year = parseInt(match[1]);
            const month = parseInt(match[2]) - 1;
            const dateStr = `${MONTHS[month]} ${year}`;
            // Append date to the last text node inside the <a>
            if (node.children && node.children.length > 0) {
                const last = node.children[node.children.length - 1];
                if (last.type === "text") {
                    last.value = `${last.value} (${dateStr})`;
                }
            }
        });
    };
}
