const ul_root = document.getElementById("ul_root")

async function showData(){
  const getData = await fetch('/login/diary/data')
  const result =await getData.json()
  console.log(result)

  result.map((elem)=>{
    let li = document.createElement("li")
    li.classList.add("list-group-item")
    li.innerHTML = elem;

    ul_root.insertBefore(li, ul_root.firstChild)
  })
}

showData()