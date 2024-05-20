import { create } from 'zustand';

export interface RegenciesStore {
    provincesCode: string | null;
    setProvincesCode: (code: string) => void;
    regencies: string | null;
    showRegencies: boolean;
    setRegencies: (data: string) => void;
    setShowRegencies: (value: boolean) => void;
}

export const useRegenciesStore = create<RegenciesStore>((set) => ({
    provincesCode: null,
    setProvincesCode: (code) => set({ provincesCode: code }),
    regencies: null,
    showRegencies: false,
    setRegencies: (data) => set({ regencies: data }),
    setShowRegencies: (value) => set({ showRegencies: value }),
}));
