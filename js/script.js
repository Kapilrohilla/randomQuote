let p = fetch('https://type.fit/api/quotes'); // big file approx 216.16kb size
p.then(r=>r.json())
.then(data=>{
    let count = 0;
    let generator = document.getElementById('generate');
    generator.addEventListener('click',()=>{
        // console.log(data[count].text,data[count].author)
        document.getElementById('quote').innerHTML = data[count].text;
        document.getElementById('author').innerText = data[count].author;
        // console.log(data[count].text,data[count].author)
        count +=1;
    })
})
.catch(error=>"Failed to fetch JSON data");
