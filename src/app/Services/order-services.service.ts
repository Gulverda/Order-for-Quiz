import { Injectable } from '@angular/core';

export interface Order {
  id: number;
  name: string;
  status: string;
  billable: string;
  efficiency: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [
    { 
      id: 1, 
      name: 'Alice', 
      status: 'High',
      billable:'120hrs',
      efficiency: 95,
    },
    { 
      id: 2, 
      name: 'Bob', 
      status: 'Low', 
      billable:'210hrs',
      efficiency: 50,
    },
    { 
      id: 3, 
      name: 'Charlie', 
      status: 'Medium',
      billable:'85hrs',
      efficiency: 75,
    },
    {
      id: 4, 
      name: 'David', 
      status: 'High',
      billable:'150hrs',
      efficiency: 90,
    },
    { 
      id: 5, 
      name: 'Eve', 
      status: 'Low',
      billable:'200hrs',
      efficiency: 40,
    },
    { 
      id: 6, 
      name: 'Frank', 
      status: 'Medium',
      billable:'100hrs',
      efficiency: 80,
    },
    { 
      id: 7, 
      name: 'Grace', 
      status: 'High',
      billable:'180hrs',
      efficiency: 85,
    },
    { 
      id: 8, 
      name: 'Hank', 
      status: 'Low',
      billable:'190hrs',
      efficiency: 45,
    },
    { 
      id: 9, 
      name: 'Ivy', 
      status: 'Medium',
      billable:'95hrs',
      efficiency: 70,
    },
    { 
      id: 10, 
      name: 'Jack', 
      status: 'High',
      billable:'130hrs',
      efficiency: 100,
    },
    {
      id: 11, 
      name: 'Kathy', 
      status: 'Low',
      billable:'220hrs',
      efficiency: 55,
    },
    { 
      id: 12, 
      name: 'Lenny', 
      status: 'Medium',
      billable:'105hrs',
      efficiency: 65,
    }
  ];

    
    selectOrder(id: number) {
      
    }

    getCount() {
      return this.orders.length;
    }

  getAllOrders(): Order[] {
    return this.orders;
  }

  getOrderById(id: number): Order | undefined {
    return this.orders.find(order => order.id === id);
  }
}
