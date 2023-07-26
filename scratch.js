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

function walkDOM3 (node) {
    if (node.hasChildNodes()) {
        for (let i = 0; i < node.childNodes.length; i++) {
            console.log("Has child nodes");
            console.log(node.childNodes[i]);
        }
    } else {
        console.log("No child nodes");
        console.log(node);
    }
}

