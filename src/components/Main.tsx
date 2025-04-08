import Search from './Search';
import ShortList from './ShortList';
import PuppyList from './puppiesComponents/PuppyList';
import NewPuppyForm from './puppiesComponents/NewPuppyForm';
import { puppies } from '@/data/puppies';
export default function Main() {
  return (
    <main>
      <div className='mt-24 grid gap-8 sm:grid-cols-2'>
        <Search />
        <ShortList />
      </div>
      <PuppyList puppies={puppies} />
      <NewPuppyForm />
    </main>
  );
}
