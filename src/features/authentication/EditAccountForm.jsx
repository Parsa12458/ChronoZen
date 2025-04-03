import InputField from "../../ui/InputField";
import Button from "../../ui/Button";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { queryClient } from "../../App";
import { useEditAccount } from "./useEditAccount";

function EditAccountForm({ onCloseModal }) {
  const user = queryClient.getQueryData(["user"]);
  const { editAccount, isLoading } = useEditAccount();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: user?.user_metadata?.fullName,
      email: user?.email,
    },
  });

  function onSubmit({ fullName }) {
    editAccount({ fullName });
    onCloseModal?.();
  }

  function onError(errors) {
    toast.dismiss();
    Object.keys(errors).forEach((key) => {
      toast.error(errors[key].message);
    });
  }

  return (
    <div>
      <h2 className="mb-7 text-2xl font-bold">Edit Account</h2>
      <form
        className="grid grid-cols-2 items-start gap-x-10 gap-y-4"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <InputField
          id="fullName"
          label="Full Name"
          placeHolder="Enter your full name"
          type="text"
          register={register}
          validationRules={{ required: "Full name is required" }}
          autoComplete="off"
        />
        <InputField
          id="email"
          label="Email Address"
          placeHolder="example@gmail.com"
          type="email"
          register={register}
          autoComplete="off"
          disabled={true}
        />

        <div className="col-span-2 mt-7 flex justify-end gap-3 text-sm">
          <Button
            type="button"
            additionalStyles="px-7"
            variation="secondary"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            additionalStyles="px-7"
            variation="primary"
            isLoading={isLoading}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditAccountForm;
