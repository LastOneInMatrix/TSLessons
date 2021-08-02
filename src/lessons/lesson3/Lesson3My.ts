export const promise = new Promise<number>((resolve, reject) => {
    resolve(1)
});

promise
    .then((res) => {
        console.log(res, 'firstThen');
        return res * 2;
    })
    .then((res) => {
        console.log(res, 'secondThen');
        return res;
    })
    .then((result) => {
        return  new Promise<number>(resolve => {
            setTimeout(() => resolve(result*10), 5000);
        })

    })
    .then((res) => console.log('from new promise :' + res))


