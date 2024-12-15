import { create } from "zustand";

export const useLoginErrorStore = create((set) => ({
   loginError: false,
   registerError: false,
   setLoginError: (status) => set(state => ({
      loginError: status
   })),
   setRegisterError: (status) => set(state => ({
      registerError: status
   }))
}))