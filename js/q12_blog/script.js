let main = document.querySelector('.main')
let addBtn = document.querySelector('.addBtn')
let data = []

const Add = (article) => {
    let div = document.createElement('div')
    div.setAttribute('class','card')

    let h1 = document.createElement('h1')
    h1.setAttribute('class','cardTitle')
    h1.innerText = article.title

    let p = document.createElement('p')
    p.setAttribute('class','cardBody')
    p.innerText =article.body

    let deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class','deleteBtn')
    deleteBtn.innerText = 'delete'
    deleteBtn.addEventListener('click',deleteArticle)

    div.appendChild(h1)
    div.appendChild(p)
    div.appendChild(deleteBtn)
   // main.appendChild(div)
    main.insertBefore(div,main.firstChild)
}

const deleteArticle = (e)=>{
    console.log('button clicked',e.target.parentNode)
    e.target.parentNode.remove()
}

addBtn.addEventListener('click',()=>{
    let title = document.querySelector('.title')
    let body = document.querySelector('.body')

    console.log('title',title)
    console.log('body',body)
    let article = {
        title:title.value,
        body:body.value
    }
    Add(article)
    title.value = ''
    body.value = ''
})

const fetchData = async() => {
   try{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    data = await res.json()
    display(data)
   }
   catch(error){
    console.log('error while fetchinf data',error)
   }
}

const display = (data) => {
    console.log('data fetched',data)
    data.map((article)=>Add(article))

} 


fetchData()



