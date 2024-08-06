import { useFormikContext } from "formik";
import { CreateAppointmentMutationVariables } from "../../../../api/__generated__/graphql";
import { useContext } from "react";
import { AppointmentContext } from "../context/AppointmentProvider";
import { StaffWorkingDaysForAppointment } from "../types";

export function useAppointmentFormControls() {
  const {
    serviceId,
    staffWorkingDays,
    setMainService,
    setStaffWorkingDays,
    resetMainService,
  } = useContext(AppointmentContext);
  const formik = useFormikContext<CreateAppointmentMutationVariables>();
  const { values, setFieldValue, resetForm } = formik;

  const setArtist = (
    staffId: number,
    staffServiceId: number,
    workingDays: StaffWorkingDaysForAppointment
  ) => {
    formik.setFieldValue("createAppointmentInput", {
      ...values.createAppointmentInput,
      staffId,
      staffServiceId,
    });

    setStaffWorkingDays(workingDays?.map(({ day }) => day) || []);
  };

  const resetArtist = () => {
    resetForm();
  };

  const setTargetTime = (targetTime: Date | null) => {
    setFieldValue("createAppointmentInput.targetTime", targetTime);
  };

  const resetTargetTime = () => {
    setFieldValue("createAppointmentInput.targetTime", null);
  };

  return {
    formik,
    serviceId,
    staffWorkingDays,
    setMainService,
    resetMainService,
    setArtist,
    resetArtist,
    setTargetTime,
    resetTargetTime,
    view: {
      showMainServicesScreen: !serviceId,
      showArtistsScreen: !values.createAppointmentInput.staffId && serviceId,
      showDateScreen:
        !!values.createAppointmentInput.staffId &&
        !values.createAppointmentInput.targetTime,
      showInfoScreen: !!values.createAppointmentInput.targetTime,
    },
  };
}
