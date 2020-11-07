const t = new Test();
console.log(t.testProp = 'Hello');
console.log(t);

console.log('------------------------------------');

const test2 = new Test2();
console.log(test2.testProp = 'bbb');
console.log(test2);

console.log(test2.testProp = '');
console.log(test2);

console.log(test2.setTestProp(''));
console.log(test2);

console.log(test2.testProp);

console.log('------------------------------------');

const test3 = new Test3();
test3.testProp = 'ggggg';
console.log(test3);
console.log(test3.testProp);

console.log('------------------------------------');

const test4 = new Test4();
test4.testProp = 5;
console.log(test4.testProp);
console.log(test4.testValue);

test4.testProp = 11;
console.log(test4.testProp);
console.log(test4.testValue);
