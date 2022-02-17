const initialData = {
    list :[]
}

const todoReducers = (state=initialData,action)=> {
    switch(action.type){
        case "ADDTODO":
            const {id,data} = action.payload;
            return{
                ...state,
                list: [
                    ...state.list,
                    
                    {
                    id:id,
                    data:data
                    } 
            ]
            }
            

            case "DELTODO":
            const newList = state.list.filter((elem)=> elem.id !== action.id)
           
            return{
                ...state,
              list: newList
            }
            default: return state;

            case "REMOVETODO":
                return {
                    ...state,
                    list:[]
                }
    }
}

export default todoReducers;