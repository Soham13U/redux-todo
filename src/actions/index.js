export const addTodo =(data) =>{
    return{
        type : "ADDTODO",
        payload :{
            id: Math.random(),
            data:data
        }
    }
}
export const delTodo =(id) =>{
    return{
        type : "DELTODO",
        id
    }
}
export const removeTodo =() =>{
    return{
        type : "REMOVETODO"
    }
}