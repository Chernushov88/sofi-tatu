<template>
  <q-page>
    <div class="profile-header full-width column flex-center">
      <div class="avatar-wrapper my-6 relative-position">
        <q-img  src="~/assets/logo.png"
                :style="avatarStyle"
                class="w-48 border-4 rounded-full border-black-700"
        >
        </q-img>
        <q-div
          class="w-48 border-4 rounded-full border-black-700">
          <img src="~/assets/logo.png" alt="" :style="avatarStyle">
        </q-div>

        <q-btn
          icon="photo"
          rounded
          dense
          size="lg"
          class="absolute-top-right bg-amber"
          :style="uploadButtonStyle"
        />
        <q-scroll-observer @scroll="scrollHandler" />
      </div>
    </div>
    <div class="p-4 space-y-4">
      <q-card class="rounded-borders rounded-xl bg-grey-3 whitespace-pre-line">
        <q-card-section class="space-y-2">
          <div class="text-h5 text-bold">Your details</div>
          <q-form class="space-y-2">
            <q-input label="Name" outlined />
            <q-input label="Surname" outlined />
            <q-input label="City" outlined />
            <q-btn label="Send" class="full-width bg-primary text-white" />
          </q-form>
        </q-card-section>
      </q-card>
      <q-card class="rounded-borders rounded-xl bg-grey-3 whitespace-pre-line">
        <q-card-section class="space-y-2">
          <div class="text-h5 text-bold">Contact Information</div>
          <q-form class="space-y-2">
            <q-input
              v-model="formContact.phone"
              mask="(###)###-##-##"
              label="Phone"
              unmasked-value
              outlined
            />
            <q-btn label="Send" class="full-width bg-primary text-white" />
          </q-form>
        </q-card-section>
        <q-card-section  class="p-10">
          <div class="" v-for="i in 10" :key="i">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque beatae ipsam odit voluptatum. Accusantium aspernatur, ea inventore laudantium modi nihil nulla omnis perferendis, porro quae quisquam reiciendis repudiandae tempora?</div>
        </q-card-section>
      </q-card>


    </div>
  </q-page>
</template>

<script>
export default {
  data: () => ({
    scrollPosition: 0,
    formCommon: {
      firstName: '',
      lastName: '',
      city: '',
    },
    formContact: {
      phone: '',
    },
  }),
  methods: {
    scrollHandler(info) {
      console.log('info', info);
      this.scrollPosition = info.position.top;
    },
  },
  computed: {
    avatarStyle() {
      const maxWidth = 200 - this.scrollPosition;
      return {
        maxWidth: maxWidth + 'px',
        marginTop: Math.min(this.scrollPosition, 200) + 'px',
        opacity: 1 - this.scrollPosition / 165,
      };
    },
    uploadButtonStyle() {
      return {
        marginTop: Math.min(this.scrollPosition, 200) + 'px',
        opacity: 1 - this.scrollPosition / 165,
      };
    },
  },
};
</script>
