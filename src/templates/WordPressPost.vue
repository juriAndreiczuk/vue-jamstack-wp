<template>
  <Layout :page-title="$page.wordPressPost.title">
  </Layout>
</template>

<page-query>
query WordPressPost ($id: ID!) {
  wordPressPost(id: $id) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.wordPressPost.title
    }
  }
}
</script>
