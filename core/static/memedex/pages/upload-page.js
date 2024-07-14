import { mapActions, mapState, mapStores } from "pinia";
import { useAuthenticationStore } from "prelude/stores/authentication-store";

import DefaultLayout from "prelude/layouts/default-layout";

const UploadPage = {
  computed: {
    ...mapStores(useAuthenticationStore),
    ...mapState(useAuthenticationStore, ['isAuthenticated', 'jwtToken']),
  },
  methods:{
    ...mapActions(useAuthenticationStore, ['login', 'logout']),
    onUpload(e) {
      const files = e.target.files;
      const uploadedFile = files[0];
      const previewUrl = URL.createObjectURL(uploadedFile);

      this.file = uploadedFile;
      this.previewUrl = previewUrl;
    },
    async onSubmit(e) {
      e.preventDefault();
      
      const file = this.file;
      
      const form = new FormData()
      form.append("file", file);

      await fetch("/api/attachments", {
        headers: {
          Authorization: `Bearer ${this.jwtToken}`
        },
        method: "POST",
        body: form,
      })

    },
  },
	template: `
	  <default-layout login-required>
      <div class="flex justify-start py-4 mb-6">
        <a href="/gallery" class="font-black py-2">
          <- Back to gallery
        </a>
      </div>
	  	<form 
        @submit="onSubmit"
        class="w-full flex flex-col mx-auto">
        <img :src="previewUrl" />
        <div>
          <input 
            type="file" 
            accept="image/png, image/gif, image/jpeg"
            @change="onUpload"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
	  </default-layout>
	`,
  components: {
    DefaultLayout,
  },
	data() {
		return {
			file: null,
      previewUrl: "",
		}
	},
}

export default UploadPage;
