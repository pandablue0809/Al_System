const SplitTextToChars = (textNode: Node): HTMLCollection => {
    // Ensure that the node is an HTMLElement to access textContent and other properties
    if (!(textNode instanceof HTMLElement)) {
        throw new Error("The provided node is not an HTMLElement.");
    }

    const textContent = textNode.textContent;
    const textSplit = textContent?.split("");

    const frag = document.createDocumentFragment();
    textSplit?.forEach((letter, i) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.cssText = `${letter === " " ? "min-width: 1rem;" : ""}; z-index: ${textSplit.length - i}; position: relative; display: inline-block;`;
        frag.appendChild(span);
    });
    textNode.textContent = "";
    textNode.appendChild(frag);

    // Assuming textNode is of type HTMLElement as checked above,
    // its children would be of type HTMLCollection
    return textNode.children;
}

export default SplitTextToChars;