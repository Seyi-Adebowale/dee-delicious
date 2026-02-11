// // src/utils/api.js
// import { useCallback } from "react";
// import { useUser } from "../context/UserContext";
// import { apiRequest } from "./ApiRequest";

// export const useApi = () => {
//   const { user, setUser, openLoginModal } = useUser();

//   // useCallback ensures apiFetch reference is stable across renders
//   const apiFetch = useCallback(
//     async (script, data = {}) => {
//       const result = await apiRequest({
//         script,
//         data,
//         token: user?.token || null,
//       });

//       if (result.error === "Invalid or expired API token") {
//         setUser(null);
//         localStorage.removeItem("user");
//         openLoginModal();
//       }

//       return result;
//     },
//     [user?.token, openLoginModal]
//   );

//   return { apiFetch };
// };
