let players = [
  { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
]

const dataPanel = document.querySelector('#data-panel')
let icons = `
    <i class="fa fa-plus-circle up"></i>
    <i class="fa fa-minus-circle down"></i>
`

// write your code here
function displayPlayerList() {
  let scoreboard = ''
  players.forEach(player => {
    scoreboard += `
      <tr>
        <td>${player.name}</td>
        <td>
          <span>${player.pts}</span>
            <i class="fa fa-plus-circle up"></i>
            <i class="fa fa-minus-circle down"></i>
        </td>
        <td>
          <span>${player.reb}</span>
            <i class="fa fa-plus-circle up"></i>
            <i class="fa fa-minus-circle down"></i>
        </td>
        <td>
          <span>${player.ast}</span>
            <i class="fa fa-plus-circle up"></i>
            <i class="fa fa-minus-circle down"></i>
        </td>
        <td>
          <span>${player.stl}</span>
            <i class="fa fa-plus-circle up"></i>
            <i class="fa fa-minus-circle down"></i>
        </td>
        <td>
          <span>${player.blk}</span>
            <i class="fa fa-plus-circle up"></i>
            <i class="fa fa-minus-circle down"></i>
        </td>
      </tr>
    `
  })
  dataPanel.innerHTML = scoreboard
}
displayPlayerList(players)

//listen to data panel
dataPanel.addEventListener('click', function (event) {
  let scoreBox = event.target.parentElement.children[0]
  let score = Number(scoreBox.innerText)
  if (event.target.matches('.fa-plus-circle')) {
    score += 1
  }
  if (event.target.matches('.fa-minus-circle')) {
    score -= 1
    if (score < 0) {
      score = 0
    }
  }
  scoreBox.innerText = score

})

