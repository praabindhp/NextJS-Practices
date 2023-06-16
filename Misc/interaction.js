const a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("a");
    }, 1000);
    });

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("b");
        }, 1000);
    });
}

function c() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error);
        }, 1000);
    });
}