    const url = 'http://localhost:3001'

    //READ ALL POSTS
    async function showAllPosts(){
       const response =  await fetch(url+'/posts')
       const posts = await response.json()
       const ul = document.querySelector('ul')
      posts.map((post)=>{
        //post.id
        //post.title
        //post.body
        const li = document.createElement('li')
        // CREATE A DELETE BUTTON
        const deleteButton = document.createElement('button');
        deleteButton.onclick = async function(){
            await fetch(url+'/posts/'+post.id,{
                method:'DELETE'
            })
        }
        deleteButton.appendChild(document.createTextNode('DELETE'))
        li.appendChild(document.createTextNode(post.title))
        li.appendChild(deleteButton)
        ul.appendChild(li)
      })
    }
    // CREATE A POST
    async function createAPost(){
        const title = document.querySelector('#title').value
        const body = document.querySelector('#body').value
        const response = await fetch(url+'/posts',{
            method:'POST',
            body:JSON.stringify({
                title,
                body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        const post = await response.json()
    }
    showAllPosts()