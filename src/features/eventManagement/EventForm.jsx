import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputTextarea from "../../ui/InputTextarea";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { toCamelCase } from "../../utils/helper";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useEventsCategories } from "./useEventsCategories";
import { useAddEvent } from "./useAddEvent";
import { useEditEvent } from "./useEditEvent";

function EventForm({ title, onCloseModal, event, eventOperation }) {
  const { handleSubmit, register, setFocus } = useForm({
    defaultValues: {
      title: event?.title || "",
      description: event?.description || "",
      date: event?.date || null,
      time: event?.time ? event.time.slice(0, 5) : null,
      location: event?.location || "",
      category: toCamelCase(event?.category?.name || "all"),
      recurringFrequency: event?.recurringFrequency || "none",
    },
  });
  const { eventsCategories } = useEventsCategories();
  const { addEvent, isLoading: isAdding } = useAddEvent();
  const { editEvent, isLoading: isEditing } = useEditEvent();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFocus("title");
    }, 100);
    return () => clearTimeout(timer);
  }, [setFocus]);

  function onError(errors) {
    toast.dismiss();
    Object.keys(errors).forEach((key) => {
      toast.error(errors[key].message);
    });
  }

  function onSubmit(data) {
    const selectedCategory = eventsCategories.find(
      (category) => toCamelCase(category.name) === data.category,
    );
    const editData = {
      ...data,
      id: event?.id,
      category: selectedCategory,
      date: data.date || null,
      time: data.time || null,
    };
    const addData = {
      ...data,
      category: selectedCategory,
      checked: false,
      date: data.date || null,
      time: data.time || null,
    };

    if (eventOperation === "edit") editEvent(editData);
    if (eventOperation === "add") addEvent(addData);
    onCloseModal?.();
  }

  return (
    <div>
      <h2 className="mb-7 text-2xl font-bold">{title}</h2>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="grid grid-cols-2 items-start gap-x-10 gap-y-4"
      >
        <InputField
          id="title"
          label="Event Title*"
          placeholder="Enter event title"
          type="text"
          register={register ? register : false}
          validationRules={{ required: "Event title is required" }}
        />
        <InputSelect
          id="category"
          label="Category"
          options={
            eventsCategories?.length === 0
              ? ["All"]
              : eventsCategories?.map((category) => category.name)
          }
          labelType="normal"
          register={register ? register : false}
        />
        <InputTextarea
          id="description"
          label="Description"
          placeholder="Enter event description"
          type="text"
          register={register ? register : false}
        />
        <InputSelect
          id="recurringFrequency"
          label="Recurring Frequency"
          options={["None", "Daily", "Weekly", "Monthly", "Yearly"]}
          labelType="normal"
          register={register ? register : false}
        />
        <InputField
          id="date"
          label="Date*"
          placeholder="Select due date"
          type="date"
          register={register ? register : false}
          validationRules={{ required: "Event date is required" }}
        />
        <InputField
          id="location"
          label="Location"
          placeholder="Enter event location"
          type="text"
          register={register ? register : false}
        />
        <InputField
          id="time"
          label="Time"
          placeholder="Select due time"
          type="time"
          register={register ? register : false}
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
            isLoading={isEditing || isAdding}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EventForm;
