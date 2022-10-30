import React from "react";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Select,
  Container,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import "./ContactForm.css";

const ContactForm = () => {
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
    <Container className="formContainer">
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);
        })}
      >
        <div className="enq">Enquiry Form</div>
        <TextInput
          withAsterisk
          label="Name"
          className="ipf"
          size="md"
          placeholder="Enter Full Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          withAsterisk
          className="ipf"
          label="Contact Number"
          maxLength="10"
          type="number"
          size="md"
          placeholder="Phone Number"
          {...form.getInputProps("number")}
        />
        <TextInput
          withAsterisk
          className="ipf"
          label="Email"
          size="md"
          placeholder="Add Your Email Address"
          {...form.getInputProps("email")}
        />
        <TextInput
          withAsterisk
          label="Address"
          className="ipf"
          placeholder="Address"
          size="md"
          {...form.getInputProps("address")}
        />
        <Select
          required={true}
          clearable
          size="md"
          className="ipf"
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

        <Group position="center" mt="lg">
          <Button className="submitBut" type="submit">
            Submit
          </Button>
        </Group>
      </form>
    </Container>
  );
};

export default ContactForm;
