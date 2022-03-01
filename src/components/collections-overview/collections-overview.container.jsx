/* 
Container Patter (HOC):
Collections Overview component being wrapped with Spinner component  
*/

import { connect } from 'react-redux'; // need access to selectors and state
import { createStructuredSelector } from 'reselect'; // need to use mapStateToProps
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'; // need to determine whether or not this component should be loading
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching
});

export const CollectionsOverviewContainer = connect(mapStateToProps)(
	WithSpinner(CollectionsOverview)
);
