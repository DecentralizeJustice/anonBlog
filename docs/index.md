<script setup>
  import Hero1 from './components/Hero1.vue'
  import ArticleCard from './components/ArticleCard.vue'

  import data from '../data.json' 
</script>

<Hero1 name="Nemo" subtitle="Welcome to my blog. This one is built with Vitepress and Vue.js. Vitepress is super cool." />

<div v-for="(article, index) in data" :key="index">
  <ArticleCard :title="article.title" :excerpt="article.excerpt" :image="article.image" :author="article.Author" :href="article.path" :date="article.Updated" />
</div>