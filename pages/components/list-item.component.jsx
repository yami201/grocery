import {useContext} from "react" 
import { GroceryContext } from "../context/GroceryContext";
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
const ListItem = ({infos}) => {
    const { removeFromList } = useContext(GroceryContext)
    const removeItem = ()=>removeFromList(infos)
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            divider={<Divider orientation="vertical" flexItem />}
            alignItems="center"
            width="800px"
            >
            <Typography 
                variant="h6"
                width="200px"
                marginLeft="10px"
            >{infos.name}</Typography>
            <Typography
                variant="h6"
                align="center"
                width="150px">{infos.price}</Typography>
            <Typography
                variant="h6"
                align="center"
                width="150px">{infos.quantity}</Typography>
            <Typography align="center">
                <DeleteIcon onClick={removeItem} sx={{cursor:"pointer"}}/>
            </Typography>
        </Stack>
    );
}
 
export default ListItem;