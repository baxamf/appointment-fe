import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import PublicLayout from "../../layouts/PublicLayout";
import Home from "../../features/public/home/Home";

const About = lazy(() => import("../../features/public/about/About"));
const Services = lazy(() => import("../../features/public/services/Services"));
const Artists = lazy(() => import("../../features/public/artists/Artists"));
const Appointment = lazy(
  () => import("../../features/public/appointment/Appointment")
);
const SuccessAppointment = lazy(
  () => import("../../common/pages/SuccessAppointment")
);

export default function PublicRoutes(): RouteObject[] {
  return [
    {
      element: <PublicLayout />,
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "services/*",
          element: <Services />,
        },
        {
          path: "artists/*",
          element: <Artists />,
        },
        {
          path: "appointment",
          element: <Appointment />,
        },
        {
          path: "appointment/success",
          element: <SuccessAppointment />,
        },
      ],
    },
  ];
}
