import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open openWindow="add-cabin">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name="add-cabin">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
