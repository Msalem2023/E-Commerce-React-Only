import { createContext, useReducer } from "react"
const INTIAL_STATE = {

    cart: []

}

const Cartreducer = (state, action) => {
    if (action.type === "add") {

        if (state?.length) {
            const find = state.find(e => e.id === action.payload.id)

            if (find) {
                find.Qty += action.payload.Qty
                return state
            } else {

                return [...state, action.payload]
            }

        } else {

            state.cart.push(action.payload)
            console.log(state.cart)

            return state.cart
        }
    }
}



export const CartContext = createContext()
export const QueryContextProviver = ({ children }) => {
    const [state, dispatch] = useReducer(Cartreducer, INTIAL_STATE)
    console.log(state)


    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}


