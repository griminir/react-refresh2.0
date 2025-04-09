import { createContext, Dispatch, SetStateAction, use } from 'react';
import type { Puppy } from '@/types';

export const LikedContext = createContext<{
  liked: Puppy['id'][];
  setLiked: Dispatch<SetStateAction<Puppy['id'][]>>;
} | null>(null);

export function useLiked() {
  const context = use(LikedContext);
  if (!context) {
    throw new Error(
      'useLiked: hook must be used within the likedContext wrapper',
    );
  }
  return context;
}
