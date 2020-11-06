class List2 extends List {
    constructor(items, cssClass) {
        super(items);
        this.cssClass = cssClass;
    }

    render() {
        let ul = super.render();
        ul.classList.add(this.cssClass);
        return ul;
    }
}