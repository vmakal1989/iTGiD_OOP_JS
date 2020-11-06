let l = new List(['one', 'two', 'three', 'four']);
document.querySelector('body').append(l.render());
let l2 = new List2(['one2', 'two2', 'three2', 'four2']);
document.querySelector('body').append(l2.render());
let l3 = new List3(['one3', 'two3', 'three3', 'four3'], ['text-center', 'bold', 'text-red']);
document.querySelector('body').append(l3.render());