import { create } from "zustand";

type userDetailsStore = {
  profile_image: string;
  username: string;
  authenticated: boolean;
  addUsername: (username: string) => void;
  addProfileImage: (imageUrl: string) => void;
  authenticate: () => void;
};

type ImagePromptStore = {
  prompt: string
  addPrompt: (prompt: string) => void
}

export const userDetailsStore = create<userDetailsStore>((set) => ({
  profile_image: "",
  username: "",
  authenticated: false,
  addUsername: (username: string) => set({ username }),
  addProfileImage: (imageUrl: string) => set({ profile_image: imageUrl }),
  authenticate: () => set({ authenticated: true }),
}));

export const imagePromptStore = create<ImagePromptStore>((set) => ({
  prompt: '',
  addPrompt: (prompt) => set({ prompt }),
}));
