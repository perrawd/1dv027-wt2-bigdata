# 1DV027 Assignment WT2 Big Data
Per Rawdin <per.rawdin@student.lnu.se>

Trends and amount of job ads for the most popular web development technologies
published in the swedish job market between 2016-2021.
The data consists of job ads for the top 10 most popular technologies according to StackOverflow Developer Survey 2021 with the addition of the popular frameworks and libraries: React, Angular and Vue.js.  
The presented data has been gathered from Arbetsförmedlingens API and is made up of over 250 000 job ads.  
The data is stored in and aggregated from an hosted Elasticsearch instance.

## 🌍 URL
[https://rawdin.se/wt2](https://rawdin.se/wt2)

## 🚀 Technologies used
- Vue.js
- Elasticsearch
- AMS API
- axios
- VueBootStrap
- VueApexChart

## ✍️ Coding style

- StandardJS
- JSdoc

## 📄 Important files

```/src/App.vue``` Main entry point of the application. 

```/src/components/LineChart.vue``` LineChart component. Fetches data from Elasticsearch and presents it in a linechart.

```/src/queries/count_all_years.js``` File containing query for retrieving count of documents per year for all languages.

```/src/utils/data-loader.js``` Script that fetches data from API and ingest into elasticsearch.
