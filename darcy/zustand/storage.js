import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStorage = create(
    persist((set) => ({
        userType : null,
        setUserType : (type) => set({ userType: type }),
    }),
    {name : "user-type-storage"}
    )
)