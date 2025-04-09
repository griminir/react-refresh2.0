import { Heart } from 'lucide-react';
import type { Puppy } from '@/types';
import { useLiked } from '@/context/Liked-Context.ts';

type LikeToggleProps = {
  puppyId: Puppy['id'];
};

export default function LikeToggle({ puppyId }: LikeToggleProps) {
  const { liked, setLiked } = useLiked();
  const handleLike = () => {
    if (liked.includes(puppyId)) {
      setLiked((prev: Puppy['id'][]) =>
        prev.filter((id: Puppy['id']) => id !== puppyId),
      );
    } else {
      setLiked((prev: Puppy['id'][]) => [...prev, puppyId]);
    }
  };

  return (
    <button className='group' onClick={handleLike}>
      <Heart
        className={
          liked.includes(puppyId)
            ? 'fill-pink-500 stroke-none'
            : 'stroke-slate-200 group-hover:stroke-slate-300'
        }
      />
    </button>
  );
}
