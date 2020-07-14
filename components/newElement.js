function newElement(type, classes, content, config = {}) {
    let oneElement = document.createElement(type)
    oneElement.innerText = content
    if (config.href) {
        oneElement.href = config.href
    }else if (config.src) {
        oneElement.src = config.src
    };
    classes.forEach(className => {
        oneElement.classList.add(className)
        
    });
    return oneElement
}
export {newElement}
