import { create } from "zustand";

interface CreateBoxModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCreateBoxModal = create<CreateBoxModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCreateBoxModal;
