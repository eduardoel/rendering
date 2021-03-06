// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function randomNumber(min = 1, max = 100000) {
    return parseInt(Math.random() * (max - min)) + min
  }
  
  export default function handler(req, res) {
    res.status(200).json([
      { id: randomNumber(), name: 'Pen', price: 5.60 },
      { id: randomNumber(), name: 'Notebook', price: 15.60 },
      { id: randomNumber(), name: 'Rubber', price: 7.30 },
      { id: randomNumber(), name: 'Scissors', price: 21.55 },
    ])
  }