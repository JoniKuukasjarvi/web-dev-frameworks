import React from "react";
import styles from './ShoppingListItem.module.css';
import cx from 'classnames';

/* Shopping list item */
const ShoppingListItem = props => {
  return <li className={ cx(styles.flex, styles.item) }>
    <button onClick={ () => props.deleteItem(props.id)}>X</button>
    <div className={ cx(styles.flex, styles.itemQtyUnit) }>
      <div>
        { props.qty }
      </div>
      <div>
        { props.unit }
      </div>
    </div>
    <div>
      { props.value}
    </div>
    
  </li>
  
}

export default ShoppingListItem;