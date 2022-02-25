import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

// ownProps is the props of the component being wrapped.
const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state) // Pass state after invoking selectCollection because the selector needs a part of state depending on the URL parameter.
});

export default connect(mapStateToProps)(CollectionPage);
