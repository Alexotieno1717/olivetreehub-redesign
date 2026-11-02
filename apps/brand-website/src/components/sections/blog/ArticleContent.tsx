import Markdown from 'marked-react';
import Link from 'next/link';
import { ArticleCMS } from '../../../../types';
import { formatDate } from '../../../utils/helpers';

interface ArticleContentProps {
  item: ArticleCMS;
}

const ArticleContent = ({ item }: ArticleContentProps) => {
  return (
    <section id="articleContent">
      <main>
        <h4 className="text-primary-light2 font-bold text-base my-3 md:mb-6 lg:mb-9">Products & Updates</h4>
        <h1 className=" text-white lg:w-[73%] text-2xl lg:text-3xl font-bold mb-3 md:mb-6 lg:mb-9">{item.attributes?.title}</h1>
        <ul className="flex flex-row items-center mt-0 mr-6 space-x-1">
          {/* {item.attributes.tag.map((article) => (
            <li key={article.id} className=" text-primary-light2 font-bold text-xs">
              <Link href={article.slug}>{article.title} |</Link>
            </li>
          ))} */}
          <li className=" text-white font-medium text-xs">{formatDate(item.attributes?.publishedAt)}</li>
        </ul>
        <hr className="bg-primary-light2 text-primary-light2 h-[0.867px] border-none w-full my-4 mb-2 md:mb-4 lg:mb-6" />
        <div className="grid md:flex md:flex-row py-4 md:py-8">
            <div className="md:basis-1/5">
                <div className="flex items-center flex-wrap gap-x-3">
                    <span className='text-primary-light2 font-bold text-sm'>Share</span>
                    <Link href={''}><img src='/twitter-icon.png'/></Link>
                    <Link href={''}><img src='/facebook-icon.png'/></Link>
                </div>
            </div>
            <div className="md:basis-4/5 md:mr-20">
                <div className="prose prose-p:font-light prose-p:text-base prose-p:text-white prose-strong:text-white prose-li:text-white prose-headings:text-white">
                    <Markdown value={item.attributes?.content || ''}/>
                </div>
            </div>
        </div>
        <hr className="bg-primary-light2 text-primary-light2 h-[0.867px] border-none w-full my-4 mb-8" />
      </main>
    </section>
  );
};

export default ArticleContent;
