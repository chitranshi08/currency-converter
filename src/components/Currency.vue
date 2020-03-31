<template>
  <div class="hello">
    <h1>Currency Converter</h1>
    <div class="mainContainer">
<input  v-model="enterValue" placeholder="USD" type="text">
<select v-model="selectedCurrency" name="" id="">
  <option v-for="currency in currencyNames" :key="currency.shortForm" :value="currency.shortForm">{{currency.fullForm}}</option>
</select>
<div v-if="getValue" class="result"> {{getValue}} {{selectedCurrency}}</div>

  </div>
  </div>
</template>

<script>
export default {
  name: 'Currency',
  data: () =>({
enterValue:"",
response:"",
currencyNames:[{
      "fullForm":"Indian National Rupees",
      "shortForm":"INR"
    },
    {
      "fullForm":"Chilean peso",
      "shortForm":"CLP"
    },
    {
      "fullForm":"Colombian peso",
      "shortForm":"COP"
    },
    {
      "fullForm":"Dominican peso",
      "shortForm":"DOP"
    },
    {
      "fullForm":"Czech koruna",
      "shortForm":"CZK"
    },
    
    {
      "fullForm":"British pound",
      "shortForm":"GBP"
    },
   





],
selectedCurrency:"INR"
  }),
    created(){
      
      fetch("https://prime.exchangerate-api.com/v5/2f3e36f1317d1c7e8c2dffa8/latest/USD")
     .then((response)=> {return response.json()})
     .then((response) => {
      this.response = response
      
    })
    },
    computed:{
      getValue:function(){
        return this.enterValue && this.response && this.enterValue * this.response.conversion_rates[this.selectedCurrency].toFixed(2)
      }
    }

    }
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
  height: 50px;
  width: 170px;
  font-size: 25px;
  text-align: center; 
}

.mainContainer{
  display: flex;
  justify-content: space-around;


}
select{
  height: 50px;
  font-size: 20px; 


}

h1{
  color:white;
  margin-bottom: 100px;
  font-size: 50px;

}
.result{
  font-size: 40px;
  color: white;

}



</style>
