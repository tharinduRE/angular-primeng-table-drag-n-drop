import { Component, OnInit } from '@angular/core';
import { Product, Target } from './product';
import { ProductService } from './productService';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableDragAndDropComponent implements OnInit {

  products: Product[] = [];
  draggedProduct: Product;
  draggedTarget: Target;
  
  headerSet: any[] = [
    { field: 'id', header: 'Id' },
    { field: 'colA', header: 'Column A' },
    { field: 'colB', header: 'Column B' },
  ];

  targets: Target[][] = [[
    { id: 'abc', colA: '', colB: '' },
    { id: 'pqr', colA: '', colB: '' },
    { id: 'xyz', colA: '', colB: '' },
  ],
  [
    { id: '1', colA: '', colB: '' },
    { id: '2', colA: '', colB: '' },
    { id: '3', colA: '', colB: '' },
    { id: '4', colA: '', colB: '' },
    { id: '5', colA: '', colB: '' },

  ],
  [
    { id: 'a1', colA: '', colB: '' },
    { id: 'a2', colA: '', colB: '' },
    { id: 'a3', colA: '', colB: '' },
    { id: 'a4', colA: '', colB: '' },
    { id: 'a5', colA: '', colB: '' },

  ]
  ];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .then((data) => (this.products = data));
  }
  dragStart(product: Product) {
    this.draggedProduct = product;
    console.log(
      "I'm " + this.draggedProduct.name + ' start draging from left grid'
    );
  }
  dragEnd(event) {
    console.log(
      "I'm " + this.draggedProduct.name + ' end draging from left grid'
    );
    this.draggedProduct = null;
  }
  drop(col, target: Target,index?:number) {
    if (this.draggedProduct) {
      this.handleDragLeft_Right(col, target);
    } else {
      this.handleDragRight_Right(col, target);
    }
  }
  /**Target events */
  targetDragStart(target: Target, startCol: any,i:number) {
    //target.product.name = 'XXXX';
    this.draggedTarget = target;
    this.draggedTarget.originCol = startCol;
    this.draggedTarget.originTableIndex = i;

    console.log(
      "I'm " +
        this.draggedTarget.product.name +
        ' start draging from right grid'
    );
  }
  targetDragEnd(event) {
    console.log(
      "I'm " + this.draggedTarget.id + ' end draging from right grid'
    );
    this.draggedTarget = null;
  }
  /**supporting functions */
  handleDragLeft_Right(col, target: Target) {
    target.product = this.draggedProduct;
    target[col.field] = this.draggedProduct.name;
    console.log(
      "I'm " +
        this.draggedProduct.name +
        ' droped from left grid to ' +
        col.header
    );
  }
  handleDragRight_Right(col, target: Target) {
    target.product = this.draggedTarget.product;
    target[col.field] = this.draggedTarget.product.name;
    console.log(
      "I'm " +
        this.draggedTarget.product.name +
        ' droped from right grid ' +
        'table ' + this.draggedTarget.originTableIndex + ' ' +
        this.draggedTarget.originCol.header +
        ' to ' +
        col.header
    );

    // remove from original location
    var record = this.targets[this.draggedTarget.originTableIndex].find((a) => a.id == this.draggedTarget.id);
    if (record) {
      record[this.draggedTarget.originCol.field] = '';
    }
  }

}
