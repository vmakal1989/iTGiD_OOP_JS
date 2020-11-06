class List {
    constructor(items) {
        this.items = items;
    }

    render() {
        let ul = document.createElement('ul');
        for (let i of this.items) {
            ul.innerHTML += `<li>${i}</li>`;
        }
        return ul;
    }
}