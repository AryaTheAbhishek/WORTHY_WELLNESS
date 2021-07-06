/////-----------******* Statistics Page Graphs Starts **********-------------/////

///----Statistics page graph 01 geo chart starts-------//
google.charts.load("current", {
  packages: ["geochart"],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY",
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ["Country", "Poverty"],
    ["Germany", 14.8],
    ["United States", 11.8],
    ["Brazil", 20.20],
    ["Canada", 10.10],
    ["France", 14],
    ["RU", 3.70],
    ["IN", 68.8],
  ]);

  var options = {};

  var chart = new google.visualization.GeoChart(
    document.getElementById("regions_div")
  );

  chart.draw(data, options);
}
///----Statistics page graph 01 geo chart ends-------//

///------ Statistics page graph 02 chart_div starts -----------///
google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
  var data = google.visualization.arrayToDataTable([
    ["City", "Pre-Covid", "2021"],
    ["India", 3500000, 8000000],
    ["Nigeria", 5000000, 6000000],
    ["Bangladesh", 500000, 600000],
    ["Ethiopia", 1000000, 1100000],
    ["Kenya", 700000, 800000],
  ]);

  var data = google.visualization.arrayToDataTable([
    [
      "City",
      "Pre-Covid Poverty",
      { type: "string", role: "annotation" },
      "Present Scenario",
      { type: "string", role: "annotation" },
    ],
    ["India", 3500000, "3.5M", 8000000, "8M"],
    ["Nigeria", 5000000, "5M", 6000000, "6M"],
    ["Bangladesh", 500000, "5L", 600000, "6L"],
    ["Ethiopia", 1000000, "1M", 1100000, "1.1M"],
    ["Kenya", 700000, "7L", 800000, "8L"],
  ]);

  var options = {
    title: "Pre-Covid and present poverty statistics",
    chartArea: { width: "50%" },
    annotations: {
      alwaysOutside: true,
      textStyle: {
        fontSize: 12,
        auraColor: "none",
        color: "#555",
      },
      boxStyle: {
        stroke: "#ccc",
        strokeWidth: 1,
        gradient: {
          color1: "#f3e5f5",
          color2: "#f3e5f5",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%",
        },
      },
    },
    hAxis: {
      title: "Total Poverty",
      minValue: 0,
    },
    vAxis: {
      title: "City",
    },
  };
  var chart = new google.visualization.BarChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}
///------ Statistics page graph 02 chart_div ends -----------///

///------ Statistics page graph 03 combo_chart_div starts -----------///
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    [
      "year",
      "2000-2004",
      "2004-2008",
      "2008-2012",
      "2012-2016",
      "2016-2020",
      "Average",
    ],
    ["World", 2250, 2400, 2600, 2700, 2800, 2550],
    ["Developed Countries", 3000, 3100, 3200, 3300, 3400, 3200],
    ["Developing Countries", 2000, 2100, 2400, 2500, 2600, 2320],
    ["Near East and North Africa", 2100, 2400, 2800, 2900, 3000, 2640],
    ["Asia and the Pacific", 2100, 2200, 2300, 2500, 2600, 2340],
  ]);

  var options = {
    title: "per capita food consumption",
    vAxis: { title: "kcal/person/day" },
    hAxis: { title: "nations" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("combo_chart_div")
  );
  chart.draw(data, options);
}
///------ Statistics page graph 03 combo_chart_div ends -----------///

///------ Statistics page graph 04 pie chart starts -----------///
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChartPieChart);
function drawChartPieChart() {
  var data = google.visualization.arrayToDataTable([
    ["Reason", "Cause (in Lakhs)"],
    ["health issues", 250],
    ["belief related", 200],
    ["choice", 100],
    ["Freedom", 100],
    ["Family related", 80],
    ["life skill", 80],
    ["Safety", 70],
    ["Individual school related", 20],
    ["Other", 10],
  ]);

  var options = {
    title: "Causes of illiteracy",
    legend: "none",
    pieSliceText: "label",
    slices: {
      4: { offset: 0.2 },
      12: { offset: 0.3 },
      14: { offset: 0.4 },
      15: { offset: 0.5 },
    },
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}
///------ Statistics page graph 04 Pie chart ends -----------///

///------ Statistics page graph 05 Line chart starts -----------///
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "After Scenario", "Before Scenario"],
    ["Health", 1000, 400],
    ["Education", 1170, 460],
    ["Food", 1800, 1120],
  ]);

  var options = {
    title: "Improvement status of Underpriviledged",
    curveType: "function",
    legend: { position: "bottom" },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}
///------ Statistics page graph 05 Line chart ends -----------///
