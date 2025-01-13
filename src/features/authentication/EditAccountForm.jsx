import InputField from "../../ui/InputField";
import Button from "../../ui/Button";

function EditAccountForm() {
  return (
    <div>
      <h2 className="mb-7 text-2xl font-bold">Edit Account</h2>
      <form className="grid grid-cols-2 items-start gap-x-10 gap-y-4">
        <InputField
          id="name"
          label="Full Name"
          placeHolder="Enter your full name"
          type="text"
        />
        <InputField
          id="email"
          label="Email Address"
          placeHolder="example@gmail.com"
          type="email"
        />
        <InputField
          id="password"
          label="Password"
          placeHolder="Enter your password"
          type="password"
        />

        <div className="col-span-2 mt-7 flex justify-end gap-3 text-sm">
          <Button type="button" additionalStyles="px-7" variation="secondary">
            Cancel
          </Button>
          <Button type="submit" additionalStyles="px-7" variation="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditAccountForm;
