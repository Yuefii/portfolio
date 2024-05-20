import { create } from 'zustand';

export interface ProvincesStore {
    provinces: string | null;
    showProvinces: boolean;
    setProvinces: (data: string) => void;
    setShowProvinces: (value: boolean) => void;
}

export const useProvincesStore = create<ProvincesStore>((set) => ({
    provinces: null,
    showProvinces: false,
    setProvinces: (data) => set({ provinces: data }),
    setShowProvinces: (value) => set({ showProvinces: value }),
}));
