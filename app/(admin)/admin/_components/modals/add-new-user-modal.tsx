import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddNewUserForm from "../forms/add-new-user-form";

interface AddNewUserModalProps {
    open: boolean,
    close: (value: boolean) => void
}

const AddNewUserModal = ({open, close}: AddNewUserModalProps) => {
  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent>
        <AddNewUserForm closeModal={close} />
      </DialogContent>
    </Dialog>
  );
};

export default AddNewUserModal;
