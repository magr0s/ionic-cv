<script lang="ts">
import {
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/vue';

import { defineComponent, h } from 'vue';

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

    const buildHeader = () => {
      const ths = ['ISBIN', 'Book', 'Author', 'Publisher', 'Year'];

      return h(
        'ion-row',
        {
          class: ['thead-row', 'ion-margin-bottom']
        },
        [
          ...ths.map((th) => h('ion-col', th)),

          h('ion-col')
        ]
      );
    }

    const buildBody = () => {
      const buildActionCell = (rowIdx: number) => (
        h(
          'ion-col',
          [
            h(
              'ion-button',
              {
                size: 'small',
                onClick: () => {removeBook(rowIdx)}
              },
              'Delete'
            )
          ]
        )
      );

      return books.map((book, i) => (
        h(
          'ion-row',
          [
            ...Object.entries(book)
              .map(([,value]) => (
                h(
                  'ion-col',
                  value
                )
              )),

            buildActionCell(i)
          ]
        )
      ))
    };

    const buildNodata = () => (
      h(
        'ion-row',
        {
          class: ['tr-nodata']
        },
        [
          h(
            'ion-col',
            'No Data'
          )
        ]
      )
    );

		return () => (
      h(
        'ion-grid',
        {
          class: ['ion-padding', 'ion-margin-top']
        },
        [
          buildHeader(),
          books.length ? buildBody() : buildNodata()
        ]
      )
    )
	}
});
</script>

<style lang="scss">
ion-col:last-child {
	text-align: right;
}

.thead-row {
	font-weight: bold;

  ion-col {
    text-transform: capitalize;
  }

  ion-col:first-child {
    text-transform: uppercase;
  }
}

.tr-nodata {
	ion-col {
		text-align: left;
		color: #414141;
	}
}
</style>
