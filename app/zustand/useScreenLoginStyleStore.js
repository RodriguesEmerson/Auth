import { create } from "zustand";

export const useScreenLoginStyleStore = create ((set) => ({
   style: "login",
   setStyle: (style) => set((state) => ({
      style: style
   }))
}))