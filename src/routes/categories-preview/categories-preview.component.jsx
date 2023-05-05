import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import { useSelector } from 'react-redux';
import './categories-preview.styles.scss'

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <div className='categories-preview'>
      {/* <img  className='categories-preview-img' src={"https://t3.ftcdn.net/jpg/02/89/30/62/360_F_289306227_kK8m66JgQfn7I71721LSpo8QvzpYBKrm.jpg"}/> */}
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
