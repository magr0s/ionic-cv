<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-button
            fill="solid"
            color="primary"
            @click="openAddBookDialog"
          >
            Add Book
          </ion-button>
        </ion-buttons>

        <ion-title>My library</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <books-list />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  modalController
} from '@ionic/vue';

import { defineComponent } from 'vue';

import { BooksList, AddBookDialog } from '@/components/Library'

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    BooksList
  },
  setup () {
    const openAddBookDialog = async () => {
      const modal = await modalController
        .create({
          component: AddBookDialog,
          cssClass: 'modal--fullscreen',
          componentProps: {
            title: 'Create New Book'
          }
        });

      modal.present();
    }

    return {
      openAddBookDialog
    }
  }
});
</script>

<style lang="scss">
ion-modal {
  --width: 100%!important;
  --height: 100%!important;
}
</style>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
