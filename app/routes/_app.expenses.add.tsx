import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

const ExpensesAddPage = () => {
  const navigate = useNavigate();
  const onClose = () => {
    //  navigate programmatically
    navigate("..");
  };
  return (
    <>
      <Modal onClose={onClose}>
        <ExpenseForm />
      </Modal>
    </>
  );
};

export default ExpensesAddPage;
