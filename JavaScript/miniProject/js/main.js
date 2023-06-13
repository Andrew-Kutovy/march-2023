fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => {
        let block = document.getElementsByClassName('users')[0];
        for (let user of users) {
            let user_block = document.createElement('div');
            user_block.classList.add('user')
            let info = document.createElement('span')

            info.innerText = `#${user.id} ${user.name}`;
            block.appendChild(user_block);
            user_block.appendChild(info)

            let button = document.createElement('button');
            button.innerText = 'get more info';
            user_block.appendChild(button);
            button.onclick = () => {
                location.href = `user-details.html?userId=${user.id}`;
            }
        }
    })