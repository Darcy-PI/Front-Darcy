import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStorage = create(
  persist(
    (set) => ({
      userType: null,
      setUserType: (type) => set({ userType: type }),

      userId: null,
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
