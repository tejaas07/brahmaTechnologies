import React from "react";
import { TextInput, Checkbox, Button, Group, Select } from "@mantine/core";
import { useForm } from "@mantine/form";

const Form = (props) => {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      number: "",
      address: "",
      product: "",
    },

    validate: {
      name: (value) => (value.length > 0 ? null : "Please add Name"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      number: (value) =>
        value.length > 0 && value.length < 11
          ? null
          : "Please add a valid number",
      address: (value) => (value.length > 0 ? null : "Please add an address"),
      product: (value) => (value.length > 0 ? null : "Please select a product"),
    },
  });
  return (
    // <Box sx={{ maxWidth: 300 }} mx="auto">
    <form
      onSubmit={form.onSubmit((values) => {
        console.log(values);
        props.hide();
      })}
    >
      <TextInput
        withAsterisk
        label="Name"
        placeholder="Enter Full Name"
        {...form.getInputProps("name")}
      />
      <TextInput
        withAsterisk
        label="Contact Number"
        maxLength="10"
        type="number"
        placeholder="Phone Number"
        {...form.getInputProps("number")}
      />
      <TextInput
        withAsterisk
        label="Email"
        placeholder="Add Your Email Address"
        {...form.getInputProps("email")}
      />
      <TextInput
        withAsterisk
        label="Address"
        placeholder="Address"
        {...form.getInputProps("address")}
      />
      <Select
        required={true}
        clearable
        label="Product Of Enquiry"
        placeholder="Show Options"
        {...form.getInputProps("product")}
        data={[
          {
            value: "Nurse Wired Call Bell System",
            label: "Nurse Wired Call Bell System",
          },
          {
            value: "Office wired Call Bell System",
            label: "Office wired Call Bell System",
          },
          {
            value: "Patient wired Call Bell System",
            label: "Patient wired Call Bell System",
          },
          {
            value: "Hotels Wired Call Bell System",
            label: "Hotels Wired Call Bell System",
          },
        ]}
      />

      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
    // </Box>
  );
};

export default Form;
