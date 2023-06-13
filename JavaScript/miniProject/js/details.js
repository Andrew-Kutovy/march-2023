let userId = new URL(location.href).searchParams.get('userId');
let block = document.getElementsByClassName('wrap')[0];
let postTitleList = null;
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
        let ul = document.createElement('ul');
        recursiveBuild(user, ul);
        let but = document.createElement('button');
        but.innerText = 'posts of current user';
        but.classList.add('show-posts')
        block.append(ul, but);

        but.addEventListener('click', function togglePosts() {
            if (postTitleList) {
                block.removeChild(postTitleList);
                postTitleList = null;
            } else postable();
        });
    });
function liCreator(key, value, parent) {
    let li = document.createElement('li');
    li.innerHTML = `<b>${key}:</b> ${value}`;
    parent.appendChild(li);
}
function ulBuilder(key, object, parent) {
    let li = document.createElement('li');
    let ul = document.createElement('ul');
    li.innerHTML = `<b>${key}:</b>`;
    parent.appendChild(li);
    li.appendChild(ul);
    recursiveBuild(object, ul);
}
function recursiveBuild(object, parent) {
    for (let key in object) {
        typeof object[key] === 'object' ? ulBuilder(key, object[key], parent) : liCreator(key, object[key], parent)
    }
}
function postable() {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(res => res.json())
        .then(posts => {
            postTitleList = document.createElement('div');
            postTitleList.classList.add('posts-list')
            block.appendChild(postTitleList);

            for (let post of posts) {
                let postId = post.id;
                let postBlock = document.createElement('div');
                let title = document.createElement('p')
                let but = document.createElement('button');
                postBlock.classList.add('post-block')
                postTitleList.appendChild(postBlock);
                postBlock.append(title, but);

                title.textContent = post.title;
                but.textContent = 'view details';

                but.addEventListener('click', function () {
                    location.href = `post-details.html?postId=${postId}`;
                });
            }
        });
}