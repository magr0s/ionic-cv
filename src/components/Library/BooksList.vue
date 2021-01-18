<template>
  <ion-grid class="ion-margin">
    <ion-row class="thead-row">
      <ion-col>ISBIN</ion-col>
      <ion-col>Book</ion-col>
      <ion-col>Author</ion-col>
      <ion-col>Publisher</ion-col>
      <ion-col>Year</ion-col>
      <ion-col></ion-col>
    </ion-row>

    <ion-row
			v-for="({ isbin, book, author, publisher, year }, i) in books"
			:key="i"
		>
      <ion-col>{{ isbin }}</ion-col>
      <ion-col>{{ book }}</ion-col>
      <ion-col>{{ author }}</ion-col>
      <ion-col>{{ publisher }}</ion-col>
      <ion-col>{{ year }}</ion-col>

      <ion-col>
				<ion-button
					size="small"
					@click="removeBook(i)"
				>
					Delete
				</ion-button>
			</ion-col>
    </ion-row>

		<ion-row
			v-if="!books.length"
			class="tr-nodata"
		>
      <ion-col>No Data</ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import {
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/vue';

import { defineComponent } from 'vue';

import { getBooks, removeBook } from '@/data/library'

export default defineComponent({
  name: 'BooksList',
  components: {
    IonGrid,
    IonRow,
    IonCol
	},
	setup () {
		const books = getBooks();

		return {
			books,
			removeBook
		}
	}
});
</script>

<style lang="scss" scoped>
ion-col:last-child {
	text-align: right;
}

.thead-row {
	font-weight: bold;
	margin-bottom: 24px;
}

.tr-nodata {
	ion-col {
		text-align: left;
		color: #414141;
	}
}
</style>
