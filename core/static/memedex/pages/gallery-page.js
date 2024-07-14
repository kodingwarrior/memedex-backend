import DefaultLayout from 'prelude/layouts/default-layout';

import GalleryCard from 'memedex/components/gallery-card'

const GalleryPage = {
	template: `
    <default-layout>
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
