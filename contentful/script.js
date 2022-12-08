// var client = contentful.createClient({
//     space: 'o4z3qq75yqc3',
//     accessToken: 'MuqbxfbvDvLwFoLQT6WzHF2XfxyWcY2jj17UF46eRD8',
// });

// client.getEntries().then((entries) =>{

//     let blog = document.getElementById('blog');

//     entries.items.forEach((entry) => {
//         let html = `
//             <h1>${entry.fields.title}</h1>
//             <img class='blog-img' src='${entry.fields.image.fields.file.url}'>
//             <p>${entry.fields.body}</p>
//         `;
//         blog.innerHTML += html;
//     });
// });


    // another way:
        // console.log(entry);
        // let title = document.createElement('h1');
        // title.textContent = entry.fields.title;
        // blog.append(title);

        // let image = document.createElement('img');
        // image.src = entry.fields.image.fields.file.url;
        // image.classList.add('blog-img');
        // blog.append(image);

        // let body = document.createElement('p');
        // body.textContent = entry.fields.body;
        // blog.append(body
        

function flipbook(){
    fetch("https://heyzine.com/api1/oembed?url=https%3A//heyzine.com/flip-book/831856a0b7.html&format=json")
    .then(response => response.json())
    // .then(response =>)
    console.log(response);
}