const GalleryCard = {
  props: ['file'],
  template: `
    <div class="rounded-2xl border-2 border-gray-100 border-dotted">
      <img 
        class="
          rounded-t-2xl
          bg-gray-100
          w-80
          sm:w-96
          h-48 
          sm:h-56
          object-contain
        "
        :src="file.attachment" 
      />
      <div class="py-2 px-4">
        <h2>{{ file.name }}</h2>
      </div>
    </div>
  `,
}

export default GalleryCard;
