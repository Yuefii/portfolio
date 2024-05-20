import { create } from 'zustand';

export interface DistrictsStore {
    regencyCode: string | null;
    setRegencyCode: (code: string) => void;
    districts: string | null;
    showDistricts: boolean;
    setDistricts: (data: string) => void;
    setShowDistricts: (value: boolean) => void;
}

export const useDistrictsStore = create<DistrictsStore>((set) => ({
    regencyCode: null,
    setRegencyCode: (code) => set({ regencyCode: code }),
    districts: null,
    showDistricts: false,
    setDistricts: (data) => set({ districts: data }),
    setShowDistricts: (value) => set({ showDistricts: value }),
}));
