import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStorage = create(
    persist((set) => ({
        userType : null,
        setUserType : (type) => set({ userType: type }),

        userId : null,
        setUserId : (id) => set({userId : id}),

        ambientsId: [],
        setAmbientsId: (id) => set((state) => ({
            ambientsId: [...state.ambientsId, id]
        }))
    }),
    {name : "user-type-storage"}
    )
)