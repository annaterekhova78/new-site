/*let names = ['I', 'F', 'T', 'R', 'H',];
for (i = 0; i < names.length; i++) {
    console.log(names[i] + ' text');
}*/

/*let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
        console.log(nums[i]);
    } else {
        console.log(nums[i]  + "Нечетное число");
    }

}*/

/*let a = document.createElement('div');
let b = document.createElement('div');
let c = document.createElement('div');
let body = document.body;
body.append(a);
body.append(b);
body.append(c);
a.classList.add('a');
b.classList.add('a');
c.classList.add('a');
let el = document.querySelectorAll('.a');
console.log(el);
for (i = 0; i < el.length; i++) {
    el[i].style.width = "100px";
    el[i].style.height = "100px";
    el[i].style.backgroundColor = "red";
}*/

/*let arr = [];
for (let i = 1; i < 15; i++) {
    if (i % 2 != 0) {
        arr.push(i);
    }
   
}
console.log(arr);*/

//Цикл for
let a_1 = [2, 5, 7, 9, 12, 15];
let sum_1 = 0;
for (i = 0; i < a_1.length; i++) {
    sum_1 = sum_1 + a_1[i];
 }
console.log(sum_1);


//Цикл while
let a_2 = [2, 5, 7, 9, 12, 15]
let res_2 = 0;
let nub_2 = 0;
while(nub_2 < a_2.length) {
    res_2 = res_2 + a_2[nub_2]
    nub_2++;
}
console.log(res_2);