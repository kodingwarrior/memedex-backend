import { AspectRatio as AspectRatioBase } from 'radix-vue'

const AspectRatio = {
	template: `
	  <div class="w-full sm:w-32 overflow-hidden rounded-md shadow-[0_2px_10px]">
		<aspect-ratio-base :ratio="16 / 9">
		  <img
			class="h-full w-full object-cover"
			src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
			alt="Landscape photograph by Tobias Tullius"
		  >
		</aspect-ratio-base>
	  </div>
	`,
	components: {
		AspectRatioBase
	}
}

export default AspectRatio;
