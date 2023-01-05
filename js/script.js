const obj = [
    {
        q: 'ambuj bawligand hai ambuj bawliand tha aur rahega',
        c: 'Utkarsh Srivastava'
    },
    {
        q: 'Vikram padh bhai londiya baji me kuch nhi rakha',
        c: 'Kapil rohilla'
    },
    {
        q: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
        c: 'Martin Luther King Jr'
    },
    {
        q: 'The best time to plant a tree was 20 years ago. The second best time is now.',
        c: 'Chinese Provreb'
    },
    {
        q: 'Live as if you were to die tomorrow. Learn as if you were to live forever',
        c: 'Mahatma Gandhi'
    },
    {
        q: 'An individual is never greater than a nation, Nana. But Gandhi has started considering himself greater than the nation.',
        c: 'Nathuram Vinayak Godse'
    },
    {
        q: 'Vicky kaisa laga interview deke... Kyu bhai aah gye swad',
        c: 'Kapil Rohilla'
    }

];
let generator = document.getElementById('generate');
let blockquote = document.getElementsByTagName('blockquote')[0];
let quote = blockquote.children[0];
let cite = blockquote.children[1];
console.log(quote.innerText);
generator.addEventListener('click',() => {
    let random = Math.trunc(Math.random()* obj.length);
    if(obj[random].q == undefined){
        // console.log(random);
    }
    quote.innerText = obj[random].q;
    cite.innerText = obj[random].c;
    // console.log(obj[random].q)
})

