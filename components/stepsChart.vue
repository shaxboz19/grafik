<template>
  <div class="stepschart-title general-separate-title">
    <h3>Шаги</h3>
    <div>
      <apexchart
        width="330"
        type="bar"
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
        chart: {
          id: "vuechart-example",
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        colors: ["#3bafda"],
        xaxis: {
          type: "date",
          categories: [],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
  created() {
    this.options.xaxis.categories = this.data.map((i) => i.дата);
    this.series[0].data = this.data.map((i) => (i.Шаги ? i.Шаги : ""));
  },
};
</script>
