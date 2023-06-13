let postId = new URL(location.href).searchParams.get('postId')
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(post => {
        let block = document.getElementsByClassName('wrap')[0]
        for (let key in post){
            let p = document.createElement('p')
            block.appendChild(p)
            p.innerHTML = `<b>${key}:</b> ${post[key]}`
        }
        showComments()
    })
function showComments() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(res => res.json())
        .then(comments => {
            let commetsBlock = document.getElementsByClassName('comments')[0]
            for (let comment of comments){
                let div = document.createElement('div')
                commetsBlock.appendChild(div)
                for (let key in comment){
                    if (key === 'name' || key === 'email' || key === 'body') {
                        let el = document.createElement('p')
                        div.appendChild(el)
                        el.textContent = `${key}: ${comment[key]}`
                    }
                }
            }
        })
}