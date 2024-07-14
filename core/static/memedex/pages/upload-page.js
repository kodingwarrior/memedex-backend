import DefaultLayout from "prelude/layouts/default-layout";

const UploadPage = {
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
  methods: {
    onUpload(e) {
      console.log(e)
      console.log(e.target)

  
      const files = e.target.files;
      const uploadedFile = files[0];
      const previewUrl = URL.createObjectURL(uploadedFile);

      this.file = uploadedFile;
      this.previewUrl = previewUrl;

    },
    onSubmit(e) {
      e.preventDefault();
      
      const file = this.file;
      
      const form = new FormData()
      form.append("file", file);

      fetch("/api/attachments", {
        method: "POST",
        body: form,
      })
    },
  }
}

export default UploadPage;
