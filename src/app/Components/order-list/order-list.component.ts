import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../Services/order-services.service';
@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent implements OnInit {
[x: string]: any;
  orders: any[] = [];
  selectedOrderId: number | null = null;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders = this.orderService.getAllOrders();
  }

  selectOrder(id: number): void {
    this.selectedOrderId = id;
  }


}