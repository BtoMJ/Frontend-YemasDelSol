import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Productlist } from "../../../../../../components/productlist/product-list";

export const Vermasdialog = ({ open, onClose, objeto }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Datos Generales</DialogTitle>
      <DialogContent dividers>
        <List disablePadding>
          <ListItem disableGutters disablePadding>
            <ListItemText primary="Fecha:" secondary={`${objeto.fecha}`} />
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemText
              primary="Operador:"
              secondary={`${objeto.encargado}`}
            />
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemText primary="Galpon:" secondary={`${objeto.galpon}`} />
          </ListItem>
          <ListItem>
            <Productlist />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};