const fnCrumbs = (path) => {
  let pathArray = path.split("/")
  pathArray.shift() //sacar el vacio
  if (path[path.length - 1] == '/')
    pathArray.pop() //sacar el vacio
  let breadcrumbs = pathArray.reduce((breadcrumbArray, path) => {
    let textFormat = path.split('_').map(el => el[0].toUpperCase() + el.slice(1, el.length)).join(' ').replaceAll(' De ', ' de ')
    breadcrumbArray.push({
      text: textFormat,
      to: {
        name: path.toLowerCase()
      }
    })
    return breadcrumbArray
  }, [])
  return breadcrumbs
}

const fnGetKey = (el, idx) => {
  idx = parseInt(idx)
  let key = Object.keys(el)[idx]
  return key
}

const fnPercentage = (n1, n2, op) => {
  let res = 0
  n1 = parseInt(n1)
  n2 = parseInt(n2)
  op = parseInt(op)
  switch (op) {
    case 0:
      res = n1 / (n1 + n2) * 100
      break
    case 1:
      res = n2 / n1 * 100
      break
    default:
      break
  }
  return res
}
//arreglo de un array de objetos
const fnObjArraySort = arr => {
  arr.sort((a, b) => {
    if (a.text > b.text) {
      return 1
    }
    if (a.text < b.text) {
      return -1
    }
    // a must be equal to b
    return 0
  })
  return arr
}

/*Canvas
id elemento, porcentaje de 0 a 100
*/
const fnCircleCanvas = (id, percentage) => {
  let canvas = document.getElementById(id)
  let ctx = canvas.getContext('2d')

  percentage = parseInt(percentage)
  //texto
  ctx.beginPath()
  ctx.fillStyle = "dark" //color de relleno
  ctx.font = "bold 20px arial" //estilo de texto
  ctx.textAlign = "center"
  ctx.fillText(percentage + '%', 52, 55) //texto con método fill

  //circulo
  ctx.beginPath()
  ctx.fillStyle = '#ccc'
  ctx.lineWidth = 6
  ctx.strokeStyle = "#008f39"
  ctx.beginPath()
  ctx.arc(50, 50, 34, 0, 2 * Math.PI * percentage / 100, false)
  ctx.stroke()

}

/***********************************
https://canvasjs.com/
***********************************/


export {
  fnCrumbs,
  fnGetKey,
  fnPercentage,
  fnCircleCanvas,
  fnObjArraySort
}