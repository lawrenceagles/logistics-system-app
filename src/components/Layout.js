import React from 'react';

// components
import Navbar from './Navbar'

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
            { children }
		</>
	);

}

export default Layout;