class Button {
    constructor(width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }

    render() {
        let button = document.createElement('button');
        button.setAttribute('style', `background: ${this.background}; width: ${this.width}px; height: ${this.height}px;`);
        button.innerText = this.value;
        return button;
    }
}