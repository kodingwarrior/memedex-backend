
const UploadPage = {
	template: `
	  <div class="w-full max-w-2xl">
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
	  </div>
	`,
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

      fetch("http://localhost:8000/api/attachments", {
        method: "POST",
        body: form,

      })
    },
  }
}

export default UploadPage;
