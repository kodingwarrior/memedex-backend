import AspectRatio from 'prelude/components/aspect-ratio';
import NavigationMenu from 'prelude/components/navigation-menu'

const SigninPage = {
	template: `
	<div>
	  <navigation-menu></navigation-menu>
	  <aspect-ratio/>
	</div>
	`,
	components: { 
		NavigationMenu,
		AspectRatio,
	},
}

export default SigninPage;
