import './Page.css';

function Page({ isOpen, children }) {
  
  return (
    <div className={
      isOpen ? 'page__menu_opened' : 'page__menu'
    }>
      {children}
    </div>
  );  
}

export default Page;