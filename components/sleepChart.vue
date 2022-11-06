<template>
  <div class="sleepchart-title general-separate-title">
    <h3>Качество сна и энергия днем</h3>
    <div>
      <apexchart
        width="500"
        type="area"
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
        colors: ["#3bafda", "#66DA26"],
        xaxis: {
          type: "date",
          categories: [],
        },
      },
      series: [
        {
          name: "Качество сна",
          data: [],
        },
        {
          name: "Энергия днем",
          data: [],
        },
      ],
    };
  },
  created() {
    this.options.xaxis.categories = this.data.map((i) => i.дата);
    this.series[0].data = this.data.map((i) => i["качество сна"]);
    this.series[1].data = this.data.map((i) => i["энергия днем"]);
  },
};
</script>
