import { ChangeEvent, useState } from 'react';
import { ArticleCMS  } from '../../../../types';
import ArticleCard from '../../cards/ArticleCard';

interface ArticlesListProps {
  items: Array<ArticleCMS>;
}

const ArticlesList = ({ items }: ArticlesListProps) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)

  const filteredArticles = items?.filter(item => {
    
    return (
      item.attributes.title.toLowerCase().includes(searchTerm) ||
      item.attributes.excerpt.toLowerCase().includes(searchTerm) ||
      item.attributes.content.toLowerCase().includes(searchTerm)
    )
  })

  const resetSearchBar = () => setSearchTerm('');

  return (
    <section id="list">
      <div className="relative w-full mx-auto mb-12">
        <input
          type="search"
          id="search"
          className=" p-3.5 pl-5 text-sm w-full text-gray-300 placeholder:text-[#71808f] border border-[rgba(101,_219,_159,_0.27)] rounded-md bg-[rgba(101,_219,_159,_0.12)] focus:ring-primary-light focus:border-primary-light"
          placeholder="Search Articles"
          required
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={() => searchTerm.length > 0 && resetSearchBar()} className="text-black absolute right-1 bottom-[0.3rem] bg-[#C3F0D9] hover:bg-primary-light2 focus:ring-4 focus:outline-none focus:ring-primary-light3 font-medium rounded-md text-base px-8 py-2">
          {searchTerm.length > 0 ? 'Reset' : 'Search'}
        </button>
      </div>
      {filteredArticles.map(item =>
        <ArticleCard item={item} key={item.id}/>
    )}
    </section>
  );
};

export default ArticlesList;
