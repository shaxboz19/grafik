<template>
  <div class="timweickerchart-title general-separate-title">
    <h3>качество сна и нергия днем</h3>
    <div>
      <smooth-picker ref="smoothPicker" :data="data" :change="change" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "datePicker",
  data() {
    function getMinutes() {
      return [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
      ];
    }
    function getHours() {
      return [...Array(24).keys()];
    }
    return {
      date: new Date().getDate(),
      hour: 0,
      minute: "00",
      hours: getHours(),
      minutes: getMinutes(),
      data: [
        {
          currentIndex: 0,
          flex: 1,
          list: getHours(),
          onClick: this.clickOnPlan,
          textAlign: "center",
          className: "row-group",
        },
        {
          currentIndex: 0,
          flex: 1,
          list: getMinutes(),
          onClick: this.clickOnProduct,
          textAlign: "center",
          className: "item-group",
        },
      ],
    };
  },
  computed: {
    ...mapState(["client"]),
  },
  methods: {
    change(index, value) {
      if (index == 0) {
        this.hour = this.hours[value];
      } else {
        this.minute = this.minutes[value];
      }
      this.$emit("change", `${this.hour}:${this.minute}`);
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.picker-group {
  display: flex;
}
.smooth-picker {
  flex: 1;
}
</style>
