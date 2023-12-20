<!-- 

store

reducers -> action

useReducer

useSelector


-->


<!-- 

const useContext = () => {
  const dispatchFn = (value) => {
    return `This is parameter value from main fn: ${value}`
  }

  dispatchFn.dispatch = (value) => {
    return `This is parameter value from dispatch fn: ${value}`
  }


  return dispatchFn
}

const useDispatch = () => {
  const reduxContext = useContext()

  const dispatch = reduxContext.dispatch;

  return dispatch;
}

const dispatch = useDispatch();

console.log(dispatch("Nikhilesh"))

-->