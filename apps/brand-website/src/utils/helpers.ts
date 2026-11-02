import { ArticleCMS, Attributes } from "../../types";

/**
 * 
 * @param string :string
 * @param no_words : number
 * @returns strings
 */
const truncate = (string: string, no_words: number) => {
  return string?.split(" ").splice(0, no_words).join(" ") + '...';

}

/**
 * @param inputDateStr :string
 * @returns string
 */
function formatDate(inputDateStr: string): string {
  const inputDate = new Date(inputDateStr);

  const formattedDate = inputDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return formattedDate;
}

// Function to find articles with the same tag as the target article
/**
 * 
 * @param targetArticle : Article
 * @param allArticles   : Article
 * @returns articles with a similar tag
 */
function findArticlesWithSameTag(targetArticle: ArticleCMS, allArticles: ArticleCMS[]): ArticleCMS[] {
  const targetCategoryNames = targetArticle.attributes.categories?.data?.map((category) => category.attributes.name);

  return allArticles.filter((article) =>
    article.attributes.categories.data?.some((category) => targetCategoryNames?.includes(category.attributes.name))
    //article.attributes.categories.data?.some((category) => category.attributes.name.includes(category.attributes.name))
    // article.attributes.tag.some((tag) => targetTagIds.includes(tag.id))
  );
}

function findArticlesWithSameCategory(categories: Array<
  {
    id: number;
    attributes: {
      name: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      blogs: {
        data: Array<{ id: number, attributes: Attributes }>
      }
    }
  }
> | undefined, targetArticleId: number) {

  const targetCategory = categories?.find(category => {
    return category.attributes.blogs.data.some(blog => blog.id === targetArticleId)
  })

  if(targetCategory) {
    const similarArticles = targetCategory.attributes.blogs.data.filter(blog => blog.id !== targetArticleId)

    return similarArticles 
  } else {
    const articles = categories?.flatMap(category => category.attributes.blogs.data)
    return articles
  }
}

export { truncate, formatDate, findArticlesWithSameTag, findArticlesWithSameCategory }
