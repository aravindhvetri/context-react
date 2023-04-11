import React, { Component } from 'react'

 class Main1 extends Component {
    constructor(){
        super();
        this.state ={
            mobiles:[
            {
            id:"001",
            name :"oneplus11",
            price : 56999,
            isPurchased: true},
            {
            id:"002",
            name : "Vivi Y100",
            price : 24999,
            isPurchased: false},
            {
            id:"003",
            name : "Redmi 10",
            price : 56999,
            isPurchased : true},
            {
            id:"004",
            name : "iphone 13",
            price : 62990,
            isPurchased : false},
            {
            id:"005",
            name : "Nokia",
            price : 12000,
            isPurchased : true},
            {
            id:"006",
            name : "Poco M4",
            price : 13999,
            isPurchased : true}]
        }
    }
       ascending = () => {
                var names = this.state.mobiles.sort((a,b) => {
                let firstObj = a.name.toLowerCase();
                let secondObj = b.name.toLowerCase();
                
                if(firstObj < secondObj){
                    return -1;
                }else if(firstObj > secondObj){
                    return 1;
                }
              })
              this.setState({mobiles: names});
    }
    descending = () =>{
       var names = this.state.mobiles.reverse()
      this.setState({mobiles: names});
   }

    ascPrice = () => {
           var price =  this.state.mobiles.sort((a,b) => {
                return a.price - b.price;
            })
            this.setState({mobiles:price});
    }
    dscPrice = () => {
     var price = this.state.mobiles.reverse();
     this.setState({mobiles:price});
  }

  purchase = () => {
    this.setState(
     {mobiles: this.state.mobiles.filter((e) => {
        if(e.isPurchased === true){
          return e.name;
        }
      })}
  );
   
  }
   
  render() {
    console.log(this);
    return (
      <div>
        <button onClick={() => this.ascending()}>Ascending</button>
        <button onClick={() => this.descending()}>Descending</button>
        <button onClick={() => this.ascPrice()}>AscendingPrice</button>
        <button onClick={() => this.dscPrice()}>DescendingPrice</button>
        <button onClick={() => this.purchase()}>filterPurchase</button>

        {this.state.mobiles.map((value,index) => {
            return  <h1 key={index}>{value.name} : {value.price} </h1>
        })}
        
      </div>
    )
  }
}

export default Main1