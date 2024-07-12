import { useLocation, useNavigate } from "react-router-dom";

export function useNavigateToDetail(id: number) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return { navigateToDetail: () => navigate(`${pathname}/${id}`) };
}
