const GalleryCard = {
  props: ['file'],
  template: `
    <div>
      <img :src="file.attachment" />
      <div>
        <h2>{{ file.name }}</h2>
      </div>
    </div>
  `,
}

export default GalleryCard;
