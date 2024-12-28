import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Form from "../forms/user-form";

interface AddNewUserModalProps {
    open: boolean,
    close: (value: boolean) => void
    userId: string; // Accept userId as a prop
}

const AddNewUserModal = ({open, close, userId}: AddNewUserModalProps) => {
  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User</DialogTitle>
        </DialogHeader>
        <Form closeModal={close} userId={userId} />
      </DialogContent>
    </Dialog>
  );
};

export default AddNewUserModal;
