import { useContext } from "react"
import { GroceryContext } from "../context/GroceryContext";
import ListItem from "./list-item.component";
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
const ItemsList = () => {
    const { list ,total} = useContext(GroceryContext)

    return (
        <Container sx={{marginTop:"30px"}}>
            <Typography variant="h3" gutterBottom>Grocery list</Typography>
            <Stack spacing={3} divider={<Divider orientation="horizental" flexItem />}>
            <Stack
                direction="row"
                justifyContent="space-between"
                divider={<Divider orientation="vertical" flexItem />}
                alignItems="center"
                width="690px"
                >
                <Typography 
                    variant="h6"
                    width="200px"
                    marginLeft="10px">NAME</Typography>
                <Typography
                    variant="h6"
                    align="center"
                    width="150px">PRICE</Typography>
                <Typography
                    variant="h6"
                    align="center"
                    width="150px">QUANTITY</Typography>
            </Stack>
            
            {
                list.length===0
                    ? 
                    <Typography align="center" color="grey">List is empty</Typography> 
                    :
                list.map(elm =><ListItem key={elm.name} infos={elm}/>)
            }
            </Stack>
            <Typography variant="h5" marginTop={12} marginRight={6} align="right">Total price : {total}</Typography>
        </Container>
    );
}
 
export default ItemsList;