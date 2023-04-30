<script setup>
  import Hero1 from './components/Hero1.vue'
  import ArticleCard from './components/ArticleCard.vue'

  import data from '../data.json' 
</script>

<Hero1 name="DGoon 😎" subtitle="Welcome to the blog for Anon Industries. Join me in creating a more private world." />

<div v-for="(article, index) in data.slice().reverse()" :key="index">
  <ArticleCard :title="article.title" :excerpt="article.excerpt" :image="article.image" :author="article.Author" :href="article.path" :date="article.Updated" />
</div>