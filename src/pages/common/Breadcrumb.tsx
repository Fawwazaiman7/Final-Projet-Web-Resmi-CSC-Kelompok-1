type BreadcrumbProps = {
    pageName: string;
    description: string;
  };
  
  const Breadcrumb = ({ pageName, description }: BreadcrumbProps) => {
    return (
      <div className="breadcrumb">
        <h1>{pageName}</h1>
        <p>{description}</p>
      </div>
    );
  };
  
  export default Breadcrumb;
  