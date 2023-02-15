import React from 'react';

type Item = {
	label?: string;
	link?: string;
	onclick?: any;
	icon?: any
};

type DropdownProps = {
	list: Item[];
	children?: React.ReactNode;
};

export default DropdownProps;
