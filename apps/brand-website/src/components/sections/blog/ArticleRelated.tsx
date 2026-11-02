import Markdown from 'marked-react';
import Link from 'next/link';
import { ArticleCMS } from '../../../../types';
import { formatDate } from '../../../utils/helpers';
import ArticleCard from '../../cards/ArticleCard';

interface ArticleContentProps {
  item: ArticleCMS;
  isLoading: boolean;
}
const ArticleRelated = ({ item, isLoading }: ArticleContentProps) => {
    return (
        <section id='articleRelated' className={isLoading === true ? 'hidden' : 'block'}>
            <main>
                <h4 className='text-primary-light2 font-bold text-xs mb-8'>Related Article</h4>
                <hr className="bg-primary-light2 text-primary-light2 h-[0.867px] border-none w-full  mb-6" />
                <ArticleCard item={item}/>
            </main>
        </section>
      );
}

export default ArticleRelated
