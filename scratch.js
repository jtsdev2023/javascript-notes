function walkDOM1 (node) {
    console.log(node);
    node = node.firstChild;
    while (node) {
        walkDOM1(node);
        node = node.nextSibling;
    }
}

function walkDOM2 (node) {
    for (let i = 0; i < node.childNodes.lenght; i++) {
        console.log(node.childNodes[i]);
    }
}

