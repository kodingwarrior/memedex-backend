import { mapActions, mapState, mapStores } from "pinia";

import { useAuthenticationStore } from "prelude/stores/authentication-store";

const NavigationMenu = {
  computed: {
    ...mapStores(useAuthenticationStore),
    ...mapState(useAuthenticationStore, ['isAuthenticated']),
  },
  methods:{
    ...mapActions(useAuthenticationStore, ['login', 'logout']),
  },
  mounted() {
    console.log(this.isAuthenticated);
    console.log(this.jwtToken);
    console.log(this.authenticationStore.jwtToken);
  },
  template: `
    <div>
      <template v-if="!!isAuthenticated">
        <div class="cursor-pointer" @click="logout">
          <div class="text-right">
            Sign Out
          </div>
        </div>
      </template>
      <template v-else>
        <a href="/signin">
          <div class="text-right">
            Sign In
          </div>
        </div>
      </template>
    </div>
  `,
}

export default NavigationMenu;
