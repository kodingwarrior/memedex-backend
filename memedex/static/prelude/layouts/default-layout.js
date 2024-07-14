import { mapActions, mapState, mapStores } from "pinia";

import NavigationMenu from "prelude/components/navigation-menu";
import { useAuthenticationStore } from "prelude/stores/authentication-store";

const DefaultLayout = {
  props: ['login-required'],
  computed: {
    ...mapStores(useAuthenticationStore),
    ...mapState(useAuthenticationStore, ['isAuthenticated']),
  },
  methods:{
    ...mapActions(useAuthenticationStore, ['login', 'logout']),
  },
  setup(props) {
    const store = useAuthenticationStore();
    if (props.loginRequired !== undefined && !store.isAuthenticated) {
      window.location.href = '/signin';
    }
  },
  template: `
    <div class="w-full mx-4 xl:mx-auto xl:max-w-3xl">
      <navigation-menu></navigation-menu>
      <slot></slot>
    </div>
  `,
  components: {
    NavigationMenu,
  }
}

export default DefaultLayout;
