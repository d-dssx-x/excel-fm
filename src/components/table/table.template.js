const CODES = {
  A: 65,
  Z: 90,
}
export function createTable(rowMax = 25) {
  const colCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colCount)
      .fill('')
      .map(toChar)
      .map(toCol)
      .join('')
  rows.push(createRow(cols))

  for (let i = 0; i < rowMax; i++) {
    const cells = new Array(colCount)
        .fill('')
        .map(toCell)
        .join('')
    rows.push(createRow(cells, i + 1))
  }

  return rows.join('')
}

function toChar(_, i) {
  return String.fromCharCode(CODES.A + i)
}

function createRow(content, index = '') {
  return `
    <div class="row">
        <div class="row-info">${index}</div>
        <div class="row-data">${content}</div>
    </div>
  `
}

function toCol(content) {
  return `
    <div class="column">${content}</div>
  `
}

function toCell() {
  return `<div class="cell" contenteditable></div>`
}
