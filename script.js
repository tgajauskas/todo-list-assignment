const populate = (item) => {
    const newLi = document.createElement("li")
    newLi.innerHTML = `
      <span>${item}</span>
      <svg id="deleteButton" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
      <g>
          <path d="m450.9,73.5h-118.4v-52.1c0-5.8-4.7-10.4-10.4-10.4h-132.2c-5.8,0-10.4,4.7-10.4,10.4v52.1h-118.4c-5.8,0-10.4,4.7-10.4,10.4v64.9c0,5.8 4.7,10.4 10.4,10.4h24.6v264.7c0,42.5 34.6,77.1 77.1,77.1h186.4c42.5,0 77.1-34.6 77.1-77.1v-264.6h24.6c5.8,0 10.4-4.7 10.4-10.4v-65c-5.68434e-14-5.7-4.7-10.4-10.4-10.4zm-250.5-41.6h111.3v41.7h-111.3v-41.7zm205,392c0,31-25.2,56.2-56.2,56.2h-186.4c-31,0-56.2-25.2-56.2-56.2v-264.6h298.8v264.6zm35-285.5h-368.8v-44h368.9v44z"/>
          <path d="m164.1,427c5.8,0 10.4-4.7 10.4-10.4v-193.7c0-5.8-4.7-10.4-10.4-10.4-5.8,0-10.4,4.7-10.4,10.4v193.7c0,5.7 4.7,10.4 10.4,10.4z"/>
          <path d="M256,427c5.8,0,10.4-4.7,10.4-10.4V222.9c0-5.8-4.7-10.4-10.4-10.4s-10.4,4.7-10.4,10.4v193.7    C245.6,422.3,250.2,427,256,427z"/>
          <path d="m347.9,427c5.8,0 10.4-4.7 10.4-10.4v-193.7c0-5.8-4.7-10.4-10.4-10.4-5.8,0-10.4,4.7-10.4,10.4v193.7c-0.1,5.7 4.6,10.4 10.4,10.4z"/>
        </g>
    </svg>
    `
    list.append(newLi)

    // Trina elementa
    const svg = newLi.querySelector("svg")
    svg.addEventListener("click", () => {
      const parentNode = svg.parentNode
      const index = listArray.indexOf(parentNode.innerText)

      // Trinimas is DOM
      parentNode.remove()

      // Trinimas is localStorage
      listArray.splice(index, 1)
      localStorage.setItem("listArray", listArray)
    })
  }

  const form = document.querySelector(".input-box")
  const input = document.getElementById("inputField")
  const list = document.querySelector(".box-2 ul")
  let listArray = []

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Pridejimas i DOM
    populate(input.value)

    // Saugo i localStorage
    listArray.push(input.value)
    localStorage.setItem("listArray", listArray)

    // Isvalo inputvalue
    input.value = ""
  });

  // Istraukia is localStorage
  let getItem = localStorage.getItem("listArray")
  if (getItem) {
    listArray = getItem.split(",")
  }

  // Uzkrauna per DOM
  if (listArray) {
    listArray.forEach((item) => {
      populate(item)
    })
  }