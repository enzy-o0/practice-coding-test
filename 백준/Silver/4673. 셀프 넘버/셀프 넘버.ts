let creator = {};

for (let i = 1; i <= 10000; i++) {
    let num = i + i.toString().split("").reduce((cur, acc) => cur + parseInt(acc), 0);
    creator[num] = true;
}

for (let i = 1; i <= 10000; i++) {
    if (!creator[i]) {
        console.log(i);   
    }
}