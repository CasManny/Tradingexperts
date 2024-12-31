import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Form from "../forms/wallet-form";

interface WalletModalProps {
    open: boolean,
    close: (value: boolean) => void
}

const FundModal = ({open, close}: WalletModalProps) => {
  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fund User</DialogTitle>
        </DialogHeader>
        <Form closeModal={close} />
      </DialogContent>
    </Dialog>
  );
};

export default FundModal;
