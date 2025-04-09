import { createContext, Dispatch, SetStateAction } from 'react';
import { type Puppy } from '@/types';

export const LikedContext = createContext<{
  liked: Puppy['id'][];
  setLiked: Dispatch<SetStateAction<Puppy['id'][]>>;
} | null>(null);
