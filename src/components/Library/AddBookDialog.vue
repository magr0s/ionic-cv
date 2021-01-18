<template>
  <ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>New Book</ion-title>

        <ion-buttons slot="end">
          <ion-button
            @click="dismiss"
          >
            Cancel
          </ion-button>

          <ion-button
            fill="solid"
            color="primary"
            @click="save"
          >
            Save
          </ion-button>
        </ion-buttons>
			</ion-toolbar>
		</ion-header>

		<ion-content class="ion-padding">
			<form>
				<ion-item>
          <ion-label>ISBIN</ion-label>
          <ion-input
            v-model="form.isbin"
          />
        </ion-item>

        <ion-item>
          <ion-label>Book</ion-label>
          <ion-input
            v-model="form.book"
          />
        </ion-item>

        <ion-item>
          <ion-label>Author</ion-label>
          <ion-input
            v-model="form.author"
          />
        </ion-item>

        <ion-item>
          <ion-label>Publisher</ion-label>
          <ion-input
            v-model="form.publisher"
          />
        </ion-item>

        <ion-item>
          <ion-label>Year</ion-label>
          <ion-input
            v-model="form.year"
          />
        </ion-item>
			</form>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import {
	IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButtons,
  IonButton,
  modalController
} from '@ionic/vue';

import { defineComponent, reactive } from 'vue';

import { addBook } from '@/data/library'

export default defineComponent({
  name: 'AddBookDialog',
  components: {
		IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButtons,
    IonButton,
  },

  setup () {
    const form = reactive({
      isbin: '',
      book: '',
      author: '',
      publisher: '',
      year: ''
    });

    const dismiss = async (): Promise<void> => {
      await modalController.dismiss();
    }

    const save = async (): Promise<void> => {
      addBook(form);

      console.log(form)

      await dismiss();
    }

    return {
      form,
      dismiss,
      save
    }
  }
});
</script>
