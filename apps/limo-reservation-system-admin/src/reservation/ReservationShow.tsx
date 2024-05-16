import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";
import { LIMO_TITLE_FIELD } from "../limo/LimoTitle";

export const ReservationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Date" source="date" />
        <ReferenceField label="Driver" source="driver.id" reference="Driver">
          <TextField source={DRIVER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Dropoff Location" source="dropoffLocation" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Limo" source="limo.id" reference="Limo">
          <TextField source={LIMO_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Pickup Location" source="pickupLocation" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
