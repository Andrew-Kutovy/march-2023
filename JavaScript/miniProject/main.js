// rendering users-list
fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => {
        const block = document.getElementsByClassName('wrap')[0];
        for (const user of users) {
            const user_block = document.createElement('div');
            const info = document.createElement('span')

            info.innerText = `#${user.id} ${user.name}`;
            block.appendChild(user_block);
            user_block.appendChild(info)

            const button = document.createElement('button');
            button.innerText = 'more info';
            user_block.appendChild(button);
            button.onclick = () => {
                location.href = `user-details.html?userId=${user.id}`;
            }
        }
    })