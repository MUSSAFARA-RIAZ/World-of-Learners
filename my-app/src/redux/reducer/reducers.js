const INIT_STATE={
 Animals:[]
}
export const AnimalReducer=(state=INIT_STATE,action)=>{
 switch(action.type){
  case "DISPLAY":
   return{
    state,
    Animals:[state.Animals,action.payload]
   }
   default:
    return state

 }


}