import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;

// Style custom component Link from react-router-dom by passing it into styled function
export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

/* To share styles (duplicated code in OptionLink and OptionDiv), import css keyword, and set to a css block to be used as a shared function  */
export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;
 