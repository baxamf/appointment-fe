import { useFormikContext } from "formik";
import { CreateAppointmentMutationVariables } from "../../../../api/__generated__/graphql";
import { useContext } from "react";
import { AppointmentContext } from "../context/AppointmentProvider";

export function useAppointmentFormControls() {
  const { serviceId, resetService } = useContext(AppointmentContext);
  const formik = useFormikContext<CreateAppointmentMutationVariables>();

  const setArtist = (staffId: number, staffServiceId: number) => {
    formik.setFieldValue("createAppointmentInput", {
      ...formik.values.createAppointmentInput,
      staffId,
      staffServiceId,
    });
  };

  return {
    formik,
    resetMainService: resetService,
    setArtist,
    view: {
      showMainServicesScreen: !serviceId,
      showArtistsScreen:
        !formik.values.createAppointmentInput.staffId && serviceId,
      showDateInfoScreen: !!formik.values.createAppointmentInput.staffId,
    },
  };
}
