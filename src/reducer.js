const initialState = {
    x:0,
    y:0,
    z:0,
    w:0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_X':
        return { 
            x:state.x+1,
            y:state.y,
            z:state.z,
            w:state.w
        }
        case 'INCREMENT_Y':
        return { 
            x:state.x,
            y:state.y+1,
            z:state.z,
            w:state.w
        }
        case 'INCREMENT_Z':
        return { 
            x:state.x,
            y:state.y,
            z:state.z+1,
            w:state.w
        }
        case 'INCREMENT_W':
        if(state.x%2===0){
        return { 
            x:state.x,
            y:state.y,
            z:state.z,
            w:state.w+1
        
        }
        }else{
            return{
            x:state.x,
            y:state.y,
            z:state.z,
            w:state.w
            }
        }
    
    default:
        return state
  }
}
