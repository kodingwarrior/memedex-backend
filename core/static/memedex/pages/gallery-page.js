import DefaultLayout from 'prelude/layouts/default-layout';

import GalleryCard from 'memedex/components/gallery-card'

const GalleryPage = {
	template: `
    <default-layout login-required>
      <div class="flex justify-end py-4 mb-6">
        <a href="/upload" class="rounded-lg bg-sky-200 border-2 border-sky-500 text-right px-4 py-2">
          Upload
        </a>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <template v-for="file in files">
          <GalleryCard :file="file" />
        </template>
      </div>
    </default-layout>
	`,
	data() {
    return {
      files: [],
		}
  },
  components: {
    GalleryCard,
    DefaultLayout
  },
  mounted() {
    this.fetchFiles();
  },
  methods: {
    async fetchFiles() {
      const res = await fetch("/api/attachments", { headers: {
        'Content-Type': 'application/json',
      }});
      const data = await res.json()
      this.files = data;
    },
  }
}

export default GalleryPage;
