export const initialState = {
    forms : [],
    edit : []
}



export const stateReducer = (state, action) => {
    console.log('state', state, 'action',action);
    switch(action.type){
        case "TASK":
         return{
            ...state,
            forms: action.payload
         }
         case "EDIT":
            return{
                ...state,
                edit : action.payload,
            }
         default :{
            return state
         }
    }
}