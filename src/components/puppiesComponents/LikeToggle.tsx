import { Heart, LoaderCircle } from 'lucide-react';
import type { Puppy } from '@/types';
import { useLiked } from '@/context/Liked-Context.ts';
import { useState } from 'react';

type LikeToggleProps = {
  puppyId: Puppy['id'];
};

export default function LikeToggle({ puppyId }: LikeToggleProps) {
  const { liked, setLiked } = useLiked();
  const [pending, setPending] = useState(false);
  const handleLike = () => {
    setPending(true);
    setTimeout(() => {
      if (liked.includes(puppyId)) {
        setLiked((prev: Puppy['id'][]) =>
          prev.filter((id: Puppy['id']) => id !== puppyId),
        );
      } else {
        setLiked((prev: Puppy['id'][]) => [...prev, puppyId]);
      }
      setPending(false);
    }, 1500);
  };

  return (
    <button className='group' onClick={handleLike}>
      {pending ? (
        <LoaderCircle className='animate-spin stroke-slate-300' />
      ) : (
        <Heart
          className={
            liked.includes(puppyId)
              ? 'fill-pink-500 stroke-none'
              : 'stroke-slate-200 group-hover:stroke-slate-300'
          }
        />
      )}
    </button>
  );
}
