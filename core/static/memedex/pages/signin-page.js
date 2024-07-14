import DefaultLayout from 'prelude/layouts/default-layout';

import AspectRatio from 'prelude/components/aspect-ratio';
import NavigationMenu from 'prelude/components/navigation-menu'

const SigninPage = {
	template: `
	<default-layout>
	  <aspect-ratio/>
	</default-layout>
	`,
	components: { 
		NavigationMenu,
		AspectRatio,
    DefaultLayout
	},
}

export default SigninPage;
