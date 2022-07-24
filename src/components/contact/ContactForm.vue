<template>
  <form
    @submit.prevent="sendMail($event.target)"
    enctype="multipart/form-data"
  >
    <input
      type="hidden"
      name="admin_email"
      value="yury.andreichuk@follow.vision"
    >
    <input type="hidden" name="form_subject"  value="message from website">
    <input type="hidden" name="project_name"  value="jamstack">

    <input type="text" name="imie" placeholder="imie"><br>
    <input type="file" name="file"><br>
    <textarea name="wiadomosc" row="3" placeholder="wiadomość"></textarea><br>
    <input type="submit" value="Wyślij">
    <p>Hello</p>
    <br>
    <p>This is plain text email body</p>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  methods: {
    sendMail(contactForm) {
      const inputFile = document.querySelector('input[name="file"]')
      const file = inputFile.files[0]

      const request = new XMLHttpRequest();
      const formData = new FormData(contactForm)
      formData.append('file', file, file.name)
      request.open('POST', `/mail/index.php`, true)
      request.send(formData)
      return false
    }
  }
}
</script>
