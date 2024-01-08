function isAnaram(a,b){
    let word1 = a.toLowerCase().split('');
    let word2 = b.toLowerCase().split('');
    return word1.every(let => word2.includes(let));
};

console.log(isAnaram("The classroom","School master"));