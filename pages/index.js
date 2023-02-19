import AddItemForm from "./components/add-item-form.component";
import ItemsList from "./components/items-list.component";
import Stack from '@mui/material/Stack';
const Home = () => {
  return ( 
    <Stack direction="row">
      <AddItemForm/>
      <ItemsList/>
    </Stack>
   );
}
export default Home;