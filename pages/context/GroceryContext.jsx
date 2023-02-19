import { createContext, useState, useEffect } from "react"

const addItem = (listToAddIn=[],itemToAdd) => {
    const exist = listToAddIn.find(elm => elm.name.toUpperCase()===itemToAdd.name.toUpperCase())

    if(exist){
        return listToAddIn.map((elm) => 
            elm.name.toUpperCase()===itemToAdd.name.toUpperCase()
                ?
            {...elm,quantity : elm.quantity+1}
                :
            elm
            )
    }
    return [...listToAddIn,{...itemToAdd,quantity:1}]
}
const removeItem = (listToAddIn=[],itemToRemove) => {
    return listToAddIn.filter(elm => elm.name.toUpperCase() !== itemToRemove.name.toUpperCase())
}
export const GroceryContext = createContext({
    list: [],
    addToList:()=>{},
    removeFromList:()=>{},
    total:0
})

export const GroceryProvider = ({children}) => {
    const [list,setList] = useState([])
    const [total, setTotal] = useState(0)
    const addToList = (itemToAdd) => setList(addItem(list,itemToAdd))
    const removeFromList = (itemToRemove) => setList(removeItem(list,itemToRemove))

    useEffect(()=>{
        const newTotal = list.reduce( (sum,item) => sum + item.price*item.quantity,0)

        setTotal(newTotal)
    },[list])
    const value = {list,addToList,removeFromList,total}

    return <GroceryContext.Provider value={value}>{children}</GroceryContext.Provider>
}