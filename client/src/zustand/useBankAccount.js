import { create } from "zustand";

const useBankAccount = create((set) => ({
	accountDetails: null,
	setAccountDetails: (accountDetails) => set({ accountDetails }),
}));
export default useBankAccount;
