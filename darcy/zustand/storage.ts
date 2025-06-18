import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  userType: string,
  userId: string,
  hydrated: boolean | undefined,
}

type Actions = {
  setUserType: (type: "students" | "professors" | "") => void,
  setUserId: (id: string) => void,
  setHydrated: (state: boolean) => void,
}

export const useStorage = create <User & Actions>()(
  persist(
    (set) => ({
      userType: "",
      setUserType: (type) => set({ userType: type }),

      userId: "",
      setUserId: (id) => set({ userId: id }),

      hydrated: false,
      setHydrated: (state) => set({ hydrated: state }),
    }),
    {
      name: "user-type-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);