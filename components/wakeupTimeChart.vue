<template>
  <div class="wakeuptimechart-title general-separate-title">
    <h3>Время пробуждения</h3>
    <div>
      <apexchart
        width="330"
        type="donut"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      options: {
        labels: [],
      },
      series: [],
    };
  },
  created() {
    const obj = {};
    this.data.forEach((element) => {
      if (obj[element["Проснулся"]]) {
        obj[element["Проснулся"]] = ++obj[element["Проснулся"]];
      } else {
        obj[element["Проснулся"]] = 1;
      }
    });

    this.series = Object.values(obj);
    console.log(this.series);
    console.log(obj);
    this.options.labels = Object.keys(obj);
  },
};
</script>
