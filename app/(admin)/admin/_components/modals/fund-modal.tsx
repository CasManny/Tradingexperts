import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Form from "../forms/deposit-form";

interface FundModalProps {
    open: boolean,
    close: (value: boolean) => void
    userId: string; // Accept userId as a prop
}

const FundModal = ({open, close, userId}: FundModalProps) => {
  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fund User</DialogTitle>
        </DialogHeader>
        <Form closeModal={close} userId={userId} />
      </DialogContent>
    </Dialog>
  );
};

export default FundModal;
