import { create } from 'zustand';

export interface VillagesStore {
    districtCode: string | null;
    setDistrictCode: (code: string) => void;
    villages: string | null;
    showVillages: boolean;
    setVillages: (data: string) => void;
    setShowVillages: (value: boolean) => void;
}

export const useVillagesStore = create<VillagesStore>((set) => ({
    districtCode: null,
    setDistrictCode: (code) => set({ districtCode: code }),
    villages: null,
    showVillages: false,
    setVillages: (data) => set({ villages: data }),
    setShowVillages: (value) => set({ showVillages: value }),
}));
