// ver. 1
// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100 * i);
// }

// ver. 2
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        i++;
        console.log(i - 11);
    }, 100 * i);
}