import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAllCategories } from '@/hooks/reactQueryHooks';


const HeaderCategories = () => {

  const router = useRouter()

  const { data } = useAllCategories();

  if(!router.isReady) {
    return null
  }

  return (
    <nav>
      <div className="w-full py-3 md:py-0 mx-auto">
        <div className="grid lg:flex items-start lg:items-center">
          <ul className="flex flex-row space-x-10 flex-wrap lg:space-x-20">
            {data?.data?.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/about/blog?category=${item.attributes.slug}`}
                  className={`  uppercase font-bold text-xs hover:underline hover:text-primary-light2 ${router.query?.category === item.attributes.slug ? 'text-primary-light2' : 'text-white'}`}
                  aria-current="page"
                >
                  {item.attributes.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className={`bg-primary-light2 text-primary-light2 h-[0.867px] border-none w-ful my-3 md:my-6 lg:my-12`} />
      </div>
    </nav>
  );
};

export default HeaderCategories;
