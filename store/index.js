import Vuex from 'vuex'

function getRandomArbitrary (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function getMine (mines) {
  if (mines < 1) {
    return false 
  } else {
    return getRandomArbitrary(1, 10) < 5 ? true : false 
  }
}

function generateItems(area) {
  return Array.from(new Array(area.rows), (val, row) => {
    return Array.from(new Array(area.columns), (val, column) => {
      return {
        col: column,
        row: row,
        isOpened: false,
        hasFlag: false,
        hasMine: false,
        neighborMineCount: 0
      }
    })
  })
}

function forEachItem(items, action) {
  items.forEach(row => {
    row.forEach(item => {
      action(item)
    })
  })
} 

function setMines(items, area, mines) {
  while (mines > 0) {
    const row = getRandomArbitrary(0, area.rows)
    const col = getRandomArbitrary(0, area.columns)
    var item = items[row][col]
    if (!item.hasMine) {
      item.hasMine = true
      mines--
    }
  }
}

function indexNeighbors(idx, size) {
  return {
    from: (idx == 0 ? idx : (idx - 1)), // inclusive
    to: (idx == (size - 1) ? size : (idx + 2)) // exclusive
  }
}

function neighborsPoints(item, area) {
  const rows = indexNeighbors(item.row, area.rows)
  const cols = indexNeighbors(item.col, area.columns)
  var result = []
  for (var row = rows.from; row < rows.to; row++) {
    for (var col = cols.from; col < cols.to; col++) {
      if (row != item.row || col != item.col)  {
        result.push({row: row, col: col})
      }
    }
  }
  return result
}

function neighbors(item, items, area, itemFilter) {
  var result = []
  neighborsPoints(item, area).forEach(point => {
    const neighbor = items[point.row][point.col]
    if (itemFilter) {
      if (itemFilter(neighbor)) result.push(neighbor)
    } else {
      result.push(neighbor)
    }
  })
  return result 
}

function findNeighborsMines(item, items, area) {
  item.neighborMineCount = neighbors(item, items, area, item => { return item.hasMine }).length
}

function setNeighborsMines(items, area) {
  forEachItem(items, item => {
    if (!item.hasMine) {
      findNeighborsMines(item, items, area)
    }
  })
}

function isAllFreeItemsOpened(items) {
  var result = true
  forEachItem(items, item => {
    if (!item.hasMine && !item.isOpened) {
      result = false
    }
  })
  return result
}

function openAllMines(items) {
  forEachItem(items, item => {
    if (item.hasMine) {
      item.isOpened = true
    }
  })
}

function allHasMineIs(items, mine) {
  var result = true
  items.forEach(item => {
    if (item.hasMine != mine) {
      result = false
    }
  })
  return result 
}

function defaultSettings () { 
  return {
    columns: 5,
    rows: 5,
    mines: 5,

    minColumns: 3,
    maxColumns: 15,
    minRows: 3,
    maxRows: 20,
    minMines: 2,
    maxMinesPersent: 0.9
  } 
}

function defaultParams () { 
  const settings = defaultSettings ()
  return {
    columns: settings.columns, 
    rows: settings.rows, 
    mines: settings.mines
  } 
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      gameOver: false,
      gameSucces: false,
      squares: [],
      area: {columns: defaultParams().columns, rows: defaultParams().rows},
      params: defaultParams()
    },
    getters: {
      defaultParams (state) { return defaultParams() },
      defaultSettings (state) { return defaultSettings() },
    },
    mutations: {
      populate (state, params) {
        state.params = params
        state.gameOver = false
        state.gameSucces = false
        state.area = {columns: params.columns, rows: params.rows}
        state.squares = generateItems(state.area)
        setMines(state.squares, state.area, params.mines)
        setNeighborsMines(state.squares, state.area)
      }
    },
    actions: {
      populate ({ commit, state }, params) {
        commit('populate', params ? params : state.params)
      },

      check ({ commit, state }, item) {
        if (state.gameOver) return
        if (item.isOpened) return

        item.isOpened = true

        if (item.hasMine) {
          this.dispatch('gameLose')
        } else {
          if (item.neighborMineCount > 0) {
            this.dispatch('checkGameOver')
          } else {
            this.dispatch('openNeighbors', item)
          }
        }
      },

      multiCheck ({ commit, state }, item) {
        if (state.gameOver) return
        if (!item.isOpened) return
        if (item.neighborMineCount == 0) return
        const flagedNeighbors = neighbors(item, state.squares, state.area, neighbor => { return neighbor.hasFlag })
        if (item.neighborMineCount != flagedNeighbors.length) return
        if (allHasMineIs(flagedNeighbors, true)) {
          neighbors(item, state.squares, state.area, neighbor => { return !neighbor.hasFlag && !neighbor.isOpened })
          .forEach(neighbor => {
            this.dispatch('check', neighbor)
          })
        }
        if (allHasMineIs(flagedNeighbors, false)) {
          this.dispatch('gameLose')
        }
      },

      setFlag ({ commit, state }, item) {
        if (state.gameOver) return
        if (item.isOpened) return
        item.hasFlag = !item.hasFlag
      },

      openNeighbors({ commit, state }, item) {
        if (state.gameOver) return
        neighbors(item, state.squares, state.area, neighbor => {
          if (!neighbor.hasFlag && !neighbor.isOpened) {
            this.dispatch('check', neighbor)
          }
        })
      },

      checkGameOver ({ commit, state }) {
        if (state.gameOver) return
        if (!isAllFreeItemsOpened(state.squares)) return 
        state.gameOver = true
        state.gameSucces = true
      },

      gameLose ({ commit, state }, item) {
        if (state.gameOver) return
        state.gameOver = true
        state.gameSucces = false
        openAllMines(state.squares)
      }
    },
  })
}

export default createStore
