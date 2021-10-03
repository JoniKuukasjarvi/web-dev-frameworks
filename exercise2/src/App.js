import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

    //this.addSomeCarrots = this.addSomeCarrots.bind(this);

    }

    //ITEMS TO BE ADDED
   
    

    addSomeStuff = (itemDescription, quantity) => { 
      return() =>{
        const Search= this.state.items.findIndex((element) =>{
          if(element.value === itemDescription) {
            return true;
          } else {
            return false;
          }
        });

        if(Search !== -1) {
          
          let newItems = [...this.state.items];
          newItems[Search].qty += quantity;

          this.setState({ items: newItems });
      } else {
        
        this.setState({
          items: 
          [...this.state.items, {id: this.state.items.length + 1 , value: itemDescription, qty: quantity}]} 
        );
        }
     }
   }



   
   deleteItem = (deletedID) => {
     console.log('item deleted with id: ' + deletedID);
     let indexToDelete = this.state.items.findIndex(item => item.id === deletedID);

     if(indexToDelete !== -1)
     {
      let newItems = [...this.state.items];
      newItems.splice( indexToDelete, 1 );
      this.setState({items: newItems});
     }
     

   }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items }  deleteItem={this.deleteItem} />
      <button onClick={ this.addSomeStuff("Carrot", 5) }> Carrot </button>
      <button onClick={ this.addSomeStuff("Strawberry", 10) }> Strawberry </button>
      <button onClick={ this.addSomeStuff("Yogurt", 1) }> Yogurt </button>
      <button onClick={ this.addSomeStuff("Beer", 6) }> Beer </button>


    </div>
  }
}

export default App;