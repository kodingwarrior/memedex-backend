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

          <label class="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="h-4 w-4 opacity-70">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" class="border-0 bg-transparent grow" placeholder="Username"  v-model="username" />
          </label>
          <div class="py-2" />
          <label class="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="h-4 w-4 opacity-70">
              <path
                fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd" />
            </svg>
            <input type="password" class="border-0 bg-transparent grow" v-model="password" />
          </label>

          <div class="flex justify-end pt-8">
            <button class="btn btn-sm btn-neutral" type="submit">Submit</button>
          </div>
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
