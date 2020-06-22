import {GET_POST, POST_POST} from '../../actions/postAction/postActionType'
import {Axios} from 'axios'
const defaultState={
    data:[]
}
const setData= ()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
        this.setState({
            loading:false,
            data:res.data
        })
        console.log(res.data)
        return res
    })
}

export function postReducers(state = defaultState,actoin){
    switch(actoin.type){
        case GET_POST:
            return{
                ...state,
                data:actoin.data
            }
        case POST_POST:
            return { data: [...state.data, data] } 
        default:
            return state
    }
}