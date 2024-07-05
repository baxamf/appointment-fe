import { Route, Routes } from "react-router-dom";
import ArtistsPage from "./pages/ArtistsPage";
import Artist from "./pages/Artist";

export default function Artists() {
  return (
    <Routes>
      <Route index element={<ArtistsPage />} />
      <Route path=":artistId" element={<Artist />} />
    </Routes>
  );
}
