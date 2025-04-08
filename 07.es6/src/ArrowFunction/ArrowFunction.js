function ArrowFun() {
    const func1 = function(a, b) {
        return a+b;
    }
    console.log(`func1 : ${func1(3, 4)}`);
//    console.log('func1 : ', func1(3, 4));

    const func2 = (a, b) => {
        return a+b;
    }
    const func3 = (a, b) => a+b;
    console.log(`func3 : ${func3(1,2)}`);

    // 매개변수가 1개일 때 소괄호() 생략가능
    const func4 = a => a+5
    console.log(`func4 : ${func4(7)}`);

    const func5 = (num) => {
        return function(value) {
            return num + value;
        }
    }
    // func 5를 축약
    const func6 = num => value => num+value;

    let func5Num = func5(5);
    let result = func5Num(7);
    console.log(`func5Num : ${func5Num}`);
    console.log(`result : ${result}`);

    result = func5(3)(4);
    console.log(`result : ${result}`);

    const func7 = num => value => num + value;
    console.log(`fucn6 : ${func7(1)(2)}`);
    
}
export default ArrowFun;