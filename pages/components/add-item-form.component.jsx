import { useContext, useState , useRef } from "react"
import { GroceryContext } from "../context/GroceryContext";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
const defaultItem = {
    name : "",
    price : 0
}

const AddItemForm = () => {
    const { addToList, list } = useContext(GroceryContext)
    const [item,setItem] = useState(defaultItem)
    const [errorMessage, setErrorMessage] = useState("")
    const handleNameChange = (e) => setItem({...item,name:e.target.value})
    const handlePriceChange = (e) => setItem({...item,price:Number(e.target.value)})
    const submitHandler = (event) => {
        event.preventDefault()
        if(item.name && item.price){
            const exist = list.find(elm => elm.name.toUpperCase()===item.name.toUpperCase() && elm.price!==item.price)
            if(!exist){
                addToList(item)
                setErrorMessage("") 
            } else {
                setErrorMessage("unmatched price")
            }
        } else {
            setErrorMessage("Please fill all the fields")
        }
    }
    
    return (
        <Container sx={{marginTop:"20vh", width:"700px"}}>
            <Typography variant="h4" gutterBottom>
                Add Item
            </Typography>
            <Stack 
                component="form"
                sx={{width:"300px"}}
                spacing={3}
            >
                <TextField
                    variant="standard"
                    fullWidth
                    placeholder="Enter the name of the item" 
                    onChange={handleNameChange}/>
                <TextField
                    fullWidth
                    variant="standard"
                    type="number" 
                    placeholder="Enter the price of the item" 
                    onChange={handlePriceChange}/>
                <Typography 
                    fontSize={12} 
                    align="center" 
                    color="red" 
                    visibility={errorMessage ? "visible" : "hidden"}>{errorMessage}</Typography>
                <Button variant="outlined" onClick={submitHandler}>Add</Button>
            </Stack>
        </Container>
    );
}
 
export default AddItemForm;