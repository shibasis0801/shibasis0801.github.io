export const print = (message) => console.log(`${message} ${(new Date()).toString()}`)

export const View = {
    li(textContent) {
        const li = document.createElement('li');
        const textNode = document.createTextNode(textContent);

        li.classList.add("list-group-item");

        li.appendChild(textNode);
        return li;
    }
}
