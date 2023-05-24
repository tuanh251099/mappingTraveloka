const fs = require('fs');

// path origin file
const filePath = 'hotels_Traveloka_has_EAN.json';

const batchSize = 10000; // Số lượng phần tử tùy chọn

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('fail to read file:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    const batches = [];
    for (let i = 0; i < jsonData.length; i += batchSize) {
      const batch = jsonData.slice(i, i + batchSize);
      batches.push(batch);
    }

    batches.forEach((batch, index) => {
      const batchFilePath = `hotelsHasEANId_${index}.json`;
      const batchData = JSON.stringify(batch);
      fs.writeFile(batchFilePath, batchData, 'utf8', (err) => {
        if (err) {
          console.error('fail to store file:', err);
          return;
        }
        console.log(`store success ${batchFilePath}`);
      });
    });
  } catch (error) {
    console.error('fail to process file:', error);
  }
});
