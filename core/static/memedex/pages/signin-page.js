import { mapActions, mapState, mapStores } from "pinia";
import { useAuthenticationStore } from "prelude/stores/authentication-store";


import DefaultLayout from 'prelude/layouts/default-layout';

const SigninPage = {
  computed: {
    ...mapStores(useAuthenticationStore),
    ...mapState(useAuthenticationStore, ['isAuthenticated']),
  },
  methods:{
    ...mapActions(useAuthenticationStore, ['login', 'logout']),
    onSubmit(e) {
      e.preventDefault();
      this.login(this.username, this.password);
    }
  },
  setup(props) {
    const store = useAuthenticationStore();
    if (store.isAuthenticated) {
      window.location.href = '/gallery';
    }
  },
	template: `
    <default-layout>
      <div class="w-full max-w-md mx-auto px-12">
        <form @submit="onSubmit">
          <div>
            <label>
              username
            </label>
            <input v-model="username" />
          </div>

          <div>
            <label>
              password
            </label>
            <input type="password" v-model="password" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </default-layout>
	`,
  data: () => ({
    username: "",
    password: "",
  }),
	components: { 
    DefaultLayout
	},
}

export default SigninPage;
