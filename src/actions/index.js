import { getIsFetching } from '../reducers'
import { range } from 'lodash'


const generateItems= () => (
  range(18).map(() =>
    ({
      alt: Math.random()
    })
  )
)


const requestPage = () => ({
  type: 'REQUEST_PAGE',
})

const recievePage = () => ({
  type: 'RECIEVE_PAGE',
  page: {
    items: generateItems()
  }
})

export const fetchPage = () => (dispatch, getState) => {
  if(getIsFetching(getState()) === true){
    return
  }
  dispatch(requestPage())

  setTimeout(() => dispatch(recievePage()), 1000)
  return
}
