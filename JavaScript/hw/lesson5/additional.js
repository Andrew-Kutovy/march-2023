// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minimal = (a, b, c) => console.log((a <= b && a <= c) ? a : (b <= a && b <= c) ? b : c);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maximal = (a, b, c) => console.log((a >= b && a >= c) ? a : (b >= a && b >= c) ? b : c);

// - створити функцію яка повертає найбільше число з масиву
let maxArr = arr => {let max = arr[0];
    for (let el of arr) if (el > max) max = el
    return max
}

// - створити функцію яка повертає найменьше число з масиву
let minOfArr = arr => {let min = arr[0];
    for (let el of arr) if (el < min) min = el
    return min
}

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sum = arr => {let sum = 0;
    for (let el of arr) sum += el;
    return sum;
}

// - Дано натуральное число n. Выведите все числа от 1 до n.
let forNum = num => {for (let i = 1; i <= num; i++) console.log(i);}

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let iterat = (a,b) => {
    if (a < b) { for (let i = a; i <= b; i++) console.log(i)
    } else  for (let i = a; i >=b; i--) console.log(i)
}

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let foo = (arr, i) => {let [val1, val2] = [arr[i], arr[i+1]];
    [arr[i], arr[i+1]] = [val2, val1]
    return arr
}

//Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let endNull = arr => {
    let newArr = []
    let nullArr = []
    for (let el of arr){
        if (el !== 0 ) newArr.push(el)
        else nullArr.push(el)
    }
    for (let nul of nullArr) newArr.push(nul)
    return newArr
}



