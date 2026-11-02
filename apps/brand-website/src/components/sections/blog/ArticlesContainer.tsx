interface ArticlesContainerProps {
  children: React.ReactNode;
}

const ArticlesContainer = ({ children }: ArticlesContainerProps) => {
  return (
    <section className="lg:max-w-4xl xl:max-w-[1031px] bg-primary-dark2 lg:rounded-3xl mx-auto lg:mt-[5.7rem] relative">
      <div className="bg-primary-dark2 lg:bg-primary-card lg:rounded-3xl">
        <div className=" py-4 md:py-14 px-4 md:px-24">{children}</div>
      </div>
    </section>
  );
};

export default ArticlesContainer;
