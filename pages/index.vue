<template>
  <div class="page _1" v-if="!isClose">
    <div v-if="isLoad">
      <WeightChart :data="items" />
      <StepsChart :data="items" />
      <sleepChart :data="items" />
      <sleepTimeChart :data="items" />
      <wakeupTimeChart :data="items" />
    </div>
  </div>
  <div v-else class="error-message">Дата успешно перенесена</div>
</template>

<script>
import { mapState } from "vuex";
import { data } from "../constants";
export default {
  name: "IndexPage",
  data() {
    return {
      items: data,
      isLoad: true,
      isClose: false,
      date: "0:00",
    };
  },
  computed: {
    ...mapState(["client"]),
  },
  mounted() {},
  methods: {
    onChange(value) {
      this.date = value;
    },
    async onSave() {
      try {
        const { data } = await this.$axios.post(`/${this.client}/request`, {
          code: "submit",
          params: {
            date: this.date,
          },
        });
        this.isClose = true;
      } catch (error) {
        const {
          data: { message },
        } = error.response;
        this.errorHandler(message);
      }
    },
    close() {
      this.$telegram.close();
    },
  },
};
</script>
<style>
.timepicker-wrapper {
  width: 340px;
}
.timepicker-wrapper .wrapper .card {
  /* display: flex;
  justify-content: space-between; */
}
.wrapper {
  display: flex;
  justify-content: center;
}
.page {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.page-card {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px 16px;
  background-color: #fff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}
.main-buttons {
  display: flex;
  gap: 16px;
  margin-top: 56px;
  width: 100%;
}
.button {
  padding: 19px 16px;
  border-radius: 10px;
  font-size: 16px;
  list-style: 1.2;
  width: 100%;
}
.button-cancel {
  background-color: transparent;
  border: 1px solid #4e4e4e;
}
.button-save {
  background-color: #349153;
  border: none;
  color: #fff;
}
.time-setter {
  display: flex;
  width: 100%;
  margin-bottom: 24px;
}
.time-setter h5 {
  font-size: 20px;
  line-height: 1.2;
}
</style>
