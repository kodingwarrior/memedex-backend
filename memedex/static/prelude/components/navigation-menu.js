import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuSub,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'radix-vue'

const NavigationMenu = {
  components: {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuSub,
  NavigationMenuTrigger,
  NavigationMenuViewport,
	
  },
  template: `
	<navigation-menu-root>
      <navigation-menu-list>
    	<navigation-menu-item>
    	  <navigation-menu-trigger />
    	  <navigation-menu-content>
    		<navigation-menu-link />
    	  </navigation-menu-content>
    	</navigation-menu-item>
   
    	<navigation-menu-item>
    	  <navigation-menu-link />
    	</navigation-menu-item>
   
    	<navigation-menu-item>
    	  <navigation-menu-trigger />
    	  <navigation-menu-content>
    		<navigation-menu-sub>
    	      <navigation-menu-list />
    		  <navigation-menu-viewport />
    	    </navigation-menu-sub>
    	  </navigation-menu-content>
    	</navigation-menu-item>
    	<navigation-menu-indicator />
      </navigation-menu-list>
      <navigation-menu-viewport />
	</navigation-menu-root>
  `,
}

export default NavigationMenu;
