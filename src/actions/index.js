let item = 1;

const generateItems= () => {
  let newItems = []
  for(let i = 0; i < 5; i++){
    newItems.push(Math.random())
  }
  return newItems
}

export const fetchPage = () => ({
  type: 'FETCH_PAGE',
  items: generateItems()
})
