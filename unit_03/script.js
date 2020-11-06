const button1 = new Button(100, 50, 'red', 'click me');
document.querySelector('body').append(button1.render());
const button2 = new ModernButton(100, 50, 'green', 'click me', 5);
document.querySelector('body').append(button2.render());
