import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { DriverTitle } from "../driver/DriverTitle";
import { LimoTitle } from "../limo/LimoTitle";

export const ReservationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date" source="date" />
        <ReferenceInput source="driver.id" reference="Driver" label="Driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <TextInput label="Dropoff Location" source="dropoffLocation" />
        <ReferenceInput source="limo.id" reference="Limo" label="Limo">
          <SelectInput optionText={LimoTitle} />
        </ReferenceInput>
        <TextInput label="Pickup Location" source="pickupLocation" />
      </SimpleForm>
    </Edit>
  );
};
