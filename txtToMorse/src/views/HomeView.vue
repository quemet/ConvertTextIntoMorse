<script setup>
  import { ref } from 'vue';

  let text = ref({ plaintext: "", morsetext: "" });

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const upper_alphabet = alphabet.map((letter) => letter.toUpperCase())

  const morsecode = [ '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
  
  function onSubmit() {
    let arr = text.value.plaintext.split('');
    arr.forEach((s) => {
      let index = alphabet.indexOf(s);
      if(index == -1) {
        index = upper_alphabet.indexOf(s)
        text.value.morsetext += morsecode[index] + " "
      } else {
        text.value.morsetext += morsecode[index] + " "
      }
    })
  }
</script>

<template>
  <main>
    <form @submit.prevent="onSubmit">
      <textarea name="text" id="text" cols="30" rows="10" v-model="text.plaintext"></textarea>
      <textarea name="morse" id="morse" cols="30" rows="10" v-model="text.morsetext"></textarea>
      <input type="submit" value="Convert into morse">
    </form>
  </main>
</template>
