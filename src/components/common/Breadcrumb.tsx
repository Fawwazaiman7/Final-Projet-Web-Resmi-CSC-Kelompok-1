type BreadcrumbProps = {
    pageName: string;
  };
  
  const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
    return (
      <div className="breadcrumb">
        <h1>{pageName}</h1>
      </div>
    );
  };
  
  export default Breadcrumb;
  