import React from 'react';
import { CollectionsOverviewContainer } from '../../components/collections-overview/collections-overview.container';
import { Route } from 'react-router-dom';
import { CollectionPageContainer } from '../collection/collection.container';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;

		fetchCollectionsStartAsync(); // asynchronous redux thunk method that fires multiple actions and updates the reducer to handle the asynchronous nature and state of the shop relates API requests
	}

	render() {
		const { match } = this.props;

		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
