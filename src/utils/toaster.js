import { toast } from "react-toastify";

const showSuccessAlert = (data) => {
  toast.success(data.message, {
    autoClose: false,
    hideProgressBar: true,
    theme: "colored",
  });
};

const showErrorAlert = (data) => {
  toast.error(data.message, {
    theme: "colored",
  });
};

export { showSuccessAlert, showErrorAlert };
