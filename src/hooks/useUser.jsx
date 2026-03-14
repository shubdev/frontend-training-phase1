import { useQuery } from "@tanstack/react-query";
import getUsers from "../service/userService.js";

export const useUser = () => {
  //When the component loads useQuery calls the API
  //If another component needs same data → it uses cache instead of calling API again
  //TanStack Query refetches automatically when needed

  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};

export const useCreateUser = () => {
  return useMutation({
    mutationFn: createUsers,
  });
};
