import PuppyCard from './PuppyCard';
import { type Puppy } from '@/types';

export default function PuppyList({
  puppies,
  searchQuery,
}: {
  puppies: Puppy[];
  searchQuery: string;
}) {
  return (
    <ul className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {puppies
        .filter((puppy) =>
          puppy.trait.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .map((puppy) => (
          <PuppyCard key={puppy.id} puppy={puppy} />
        ))}
    </ul>
  );
}
