<template>
  <div class="sleeptimechart-title general-separate-title">
    <h3>Время засыпания</h3>
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
      if (!element["уснул"]) {
        return;
      }
      if (obj[element["уснул"]]) {
        obj[element["уснул"]] = ++obj[element["уснул"]];
      } else {
        obj[element["уснул"]] = 1;
      }
    });

    this.series = Object.values(obj);
    console.log(this.series);
    console.log(obj);
    this.options.labels = Object.keys(obj);
  },
};
</script>
