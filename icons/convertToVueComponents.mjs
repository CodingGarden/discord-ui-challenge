import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('.');
files.map((file) => {
  if (file.endsWith('svg')) {
    const fileName = file
      .split('.')[0]
      .split('-')
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join('') + 'Icon.vue';

    fs.writeFileSync(path.join('vue-icons', fileName), `<template>
  ${fs.readFileSync(file)}
</template>`);
  }
});
