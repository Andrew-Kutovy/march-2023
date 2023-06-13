const userId = new URL(location.href).searchParams.get('userId');
const block = document.getElementsByClassName('wrap')[0];
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
        const ul = document.createElement('ul');
        recursiveBuild(user, ul);

        const but = document.createElement('button');
        but.innerText = 'posts of current user';
        block.append(ul, but);

        // !!! must consider to add ability to show/hide for posts
        but.addEventListener('click', function getPost() {
            postable()
            this.removeEventListener('click', getPost)
        })

    });
function liCreator(key, value, parent) {
    const li = document.createElement('li');
    li.innerHTML = `<b>${key}:</b> ${value}`;
    parent.appendChild(li);
}
function ulBuilder(key, object, parent) {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    li.innerHTML = `<b>${key}:</b>`;
    parent.appendChild(li);
    li.appendChild(ul);
    recursiveBuild(object, ul);
}
function recursiveBuild(object, parent) {
    for (const key in object) {
        typeof object[key] === 'object' ? ulBuilder(key, object[key], parent) : liCreator(key, object[key], parent)
    }
}
function postable() {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(res => res.json())
        .then(posts => {
            let postTitleList = document.createElement('ul')
            block.appendChild(postTitleList)

            for (let post of posts){
                let postId = post.id
                let postTitle = document.createElement('li')
                postTitle.textContent = post.title
                postTitleList.appendChild(postTitle)
                let but = document.createElement('button')
                but.textContent = 'view details'
                postTitle.appendChild(but)

                but.addEventListener('click', function () {
                    location.href = `post-details.html?postId=${postId}`
                })
            }
        })
}

