const app = new Vue({
  el: '#app',
  data:{
    books: [
      {
        id : 1,
        name : '《英语》',
        date : '2020-01',
        price: 66,
        count: 1,
      },
      {
        id : 2,
        name : '《语文》',
        date : '2020-02',
        price: 77,
        count: 1
      },
      {
        id : 3,
        name : '《数学》',
        date : '2020-03',
        price: 88,
        count: 1
      },
      {
        id : 4,
        name : '《物理》',
        date : '2020-04',
        price: 99,
        count: 1
      }
    ]
  },
  methods: {
    getFinalPrice(price){
      return '￥'+price.toFixed(2)
    },
    increment(index){
      this.books[index].count++
    },
    decrement(index){
      this.books[index].count--
    },
    removeHandler(index){
      this.books.splice(index,1)
    }
  },
  filters: {
    showPrice(price){
      return '￥'+price.toFixed(2)
    }
  },
  computed: {
    totalPrice(){
      let totalPrice = 0
      //1.普通for循环
      // for (let i = 0;i < this.books.length;i++){
      //   totalPrice += this.books[i].price*this.books[i].count
      // }

      //2.for(in)
      // for(let i  in this.books){
      //   totalPrice += this.books[i].price*this.books[i].count
      // }

      //3.for(of)
      for(let book of this.books){
        totalPrice += book.price*book.count
      }
      return totalPrice
    }
  }
})

