class List3 extends List {
    constructor(items, cssClass) {
        super(items);
        this.cssClass = cssClass;
    }
    render() {
        let ul = super.render();
        for(let i of this.cssClass) {
            ul.classList.add(i);
        }
        return ul;
    }
}