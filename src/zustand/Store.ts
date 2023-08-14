import {create} from 'zustand';

const useAuthStore = create(set => ({
  accessToken: null,
  setAccessToken: (token: any) => set({accessToken: token}),
}));

export default useAuthStore;
