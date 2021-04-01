import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchResultsStart } from '../../redux/search-results/search-results.actions';

const Categorie = ({fetchResults, name}) => {

    const img = name.toLowerCase() + '-category';
    let history = useHistory();

    const handleClick = () => {
        fetchResults(name);
        history.push('/results');
        window.scrollTo(0, 0);
    }

    return (
        <div className="categories__container" onClick={handleClick}>
            <div style={{backgroundImage: `url(/img/categories/${img}.jpg)`}} className="categories__container__img" />
            <h4 className="categories__container__caption"> {`${name}`} </h4>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    fetchResults: keyWord => dispatch(fetchResultsStart(keyWord))
});

export default connect(null, mapDispatchToProps)(Categorie);

