import { Col, Row, Select, Table } from "antd";
import { useState } from "react";
import "./App.css";
import { ColumnsType } from "antd/es/table";
import { Typography } from 'antd';

const { Title, Text } = Typography;


const { Option } = Select;

interface Product {
  id: string;
  name: string;
  price: number;
  category: "Shoes" | "Towels" | "Bags";
}

interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  price: number;
  date: string;
  items: Product[];
  paymentStatus: "Unpaid" | "Paid" | "PaymentFailed" | "Refunded";
  deliveryStatus: "New" | "Packaged" | "Despatched" | "Delivered";
}

const sampleOrders: Order[] = [
  {
    id: "123",
    customerName: "James Ofili",
    customerPhone: "08083728372",
    deliveryAddress: "24 Vinee road, Asaba",
    price: 2500,
    date: "2023-06-21T00:06:20",
    items: [
      {
        id: "234",
        name: "Versace",
        price: 1300,
        category: "Towels",
      },
    ],
    paymentStatus: "Paid",
    deliveryStatus: "New",
  },
  {
    id: "222",
    customerName: "Chioma Precious",
    customerPhone: "09083766257",
    deliveryAddress: "10 ok street, Onitsha",
    price: 3900,
    date: "2023-05-22T00:03:30",
    items: [
      {
        id: "344",
        name: "Burberry",
        price: 2000,
        category: "Bags",
      },
    ],
    paymentStatus: "Unpaid",
    deliveryStatus: "New",
  },
  {
    id: "232",
    customerName: "Adams Stone",
    customerPhone: "07022336251",
    deliveryAddress: "1 Mbanefo street, Onitsha",
    price: 2200,
    date: "2023-05-22T00:03:10",
    items: [
      {
        id: "314",
        name: "Holland",
        price: 1800,
        category: "Towels",
      },
    ],
    paymentStatus: "Paid",
    deliveryStatus: "Despatched",
  },
  {
    id: "242",
    customerName: "King Samuel",
    customerPhone: "09011154432",
    deliveryAddress: "3 Ogun street, Lagos",
    price: 7500,
    date: "2023-06-22T00:01:04",
    items: [
      {
        id: "354",
        name: "Nike",
        price: 7000,
        category: "Shoes",
      },
    ],
    paymentStatus: "Unpaid",
    deliveryStatus: "New",
  },
  {
    id: "252",
    customerName: "Jane Okonkwo",
    customerPhone: "07034455678",
    deliveryAddress: "10 Amobi street, Onitsha",
    price: 1500,
    date: "2023-06-18T00:04:00",
    items: [
      {
        id: "364",
        name: "Valor Bath",
        price: 1200,
        category: "Towels",
      },
    ],
    paymentStatus: "PaymentFailed",
    deliveryStatus: "Packaged",
  },
  {
    id: "262",
    customerName: "Gracious Ulo",
    customerPhone: "08111555939",
    deliveryAddress: "10 Emodi street, Onitsha",
    price: 18500,
    date: "2023-04-22T00:11:11",
    items: [
      {
        id: "374",
        name: "Ego",
        price: 18000,
        category: "Shoes",
      },
    ],
    paymentStatus: "Paid",
    deliveryStatus: "Delivered",
  },
  {
    id: "282",
    customerName: "Chika Okoye",
    customerPhone: "09034566888",
    deliveryAddress: "1 Diamon Estate, Awka",
    price: 11500,
    date: "2023-05-22T00:03:30",
    items: [
      {
        id: "340",
        name: "Channel",
        price: 11000,
        category: "Bags",
      },
    ],
    paymentStatus: "Paid",
    deliveryStatus: "Despatched",
  },
  {
    id: "292",
    customerName: "Chioma Amalu",
    customerPhone: "08166677289",
    deliveryAddress: "5 Omagba phase 1",
    price: 6000,
    date: "2023-06-20T00:10:30",
    items: [
      {
        id: "348",
        name: "Burberry",
        price: 5500,
        category: "Bags",
      },
    ],
    paymentStatus: "Unpaid",
    deliveryStatus: "New",
  },
  {
    id: "312",
    customerName: "Nkiru Uba",
    customerPhone: "08038980440",
    deliveryAddress: "22 Regina Nwankwo, Onitsha",
    price: 8200,
    date: "2023-06-11T00:08:10",
    items: [
      {
        id: "444",
        name: "Canoe",
        price: 8000,
        category: "Towels",
      },
    ],
    paymentStatus: "Refunded",
    deliveryStatus: "Delivered",
  },
  {
    id: "322",
    customerName: "Imma Obanke",
    customerPhone: "07099887721",
    deliveryAddress: "13 Akpu junction, asaba",
    price: 4000,
    date: "2023-05-22T00:03:30",
    items: [
      {
        id: "404",
        name: "Channel",
        price: 2800,
        category: "Bags",
      },
    ],
    paymentStatus: "PaymentFailed",
    deliveryStatus: "New",
  },
  {
    id: "899",
    customerName: "Ebuka Gideon",
    customerPhone: "09083770000",
    deliveryAddress: "14 Osuma Onitsha",
    price: 2500,
    date: "2023-06-23T00:02:20",
    items: [
      {
        id: "349",
        name: "Burberry",
        price: 2000,
        category: "Bags",
      },
    ],
    paymentStatus: "Paid",
    deliveryStatus: "Delivered",
  },
  {
    id: "298",
    customerName: "Naza Nwankwo",
    customerPhone: "08076555541",
    deliveryAddress: "15 Nnewi Street, Onitsha",
    price: 2800,
    date: "2023-05-22T00:03:30",
    items: [
      {
        id: "347",
        name: "Deluxe Bath",
        price: 2500,
        category: "Towels",
      },
    ],
    paymentStatus: "Unpaid",
    deliveryStatus: "New",
  },
  {
    id: "222",
    customerName: "Shaun Murphy",
    customerPhone: "08113456667",
    deliveryAddress: "12 Oshodi, Lagos",
    price: 4100,
    date: "2023-06-20T00:06:30",
    items: [
      {
        id: "364",
        name: "Dolce & Gabanna",
        price: 4000,
        category: "Shoes",
      },
    ],
    paymentStatus: "Refunded",
    deliveryStatus: "Delivered",
  },
];

function App() {
  const [orders] = useState<Order[]>(sampleOrders);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [filteredOrders, setFilteredOrders] = useState<Order[]>(sampleOrders);
  const [deliveryStatus, setDeliveryStatus] = useState<string>("")
  const [filteredValues, setFilteredValues] = useState({ 
  //   paymentStatus: paymentStatusValue,  
  //  deliveryStatus: deliveryStatisValue 
 })
  const columns: ColumnsType<Order> = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Customer Phone",
      dataIndex: "customerPhone",
      key: "customerPhone",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
    },
    {
      title: "Delivery Status",
      dataIndex: "deliveryStatus",
      key: "deliveryStatus",
    },
  ];
  // const handleDelivery = (value: string) => {
  //  const basedOnDelivery =  setFilteredOrders(filteredOrders.filter((order) => {
  //     return value ? value === order.deliveryStatus : orders;

  //   }))

  // }
  return (
    <div className="App">
      <h1>Orders Management</h1>
      <div className="flex margin-bottom">
        <div className="flex column">
          <strong className="margin-bottom mini smaller">Payment Status</strong>
          <Select
            value={paymentStatus}
            onChange={(value) => {
              setPaymentStatus(value);
              const newFilteredOrders = value ? orders.filter(
                (order) => order.paymentStatus === value
              ) : orders;
              setFilteredOrders(newFilteredOrders);
            }}
            className="antd-select"
          >
            <Option key="All" value="">
              All orders
            </Option>
            <Option key="Unpaid" value="Unpaid">
              Unpaid
            </Option>
            <Option key="Paid" value="Paid">
              Paid
            </Option>
            <Option key="PaymentFailed" value="PaymentFailed">
              Payment Failed
            </Option>
            <Option key="Refunded" value="Refunded">
              Refunded
            </Option>
          </Select>
        </div>
        <Row>
          <Col span={24} className="flex column">
            <Text className="margin-left" strong={true}>Delivery Status</Text>
            <Select className="antd-select margin-left"
              value={deliveryStatus}
              onChange={value => {
                setDeliveryStatus(value);
                setFilteredOrders(filteredOrders.filter((order) => value ? order.deliveryStatus === value : orders))
                console.log(filteredOrders)
              }}
            >
              {/* <Select className="antd-select margin-left"
              value={deliveryStatus}
              onChange={value => handleDelivery(value)}
            > */}
              <Option key="Delivery" value="">
                All Delivery
              </Option>
              <Option key="New" value="New">
                New
              </Option>
              <Option key="Packaged" value="Packaged">
                Packaged
              </Option>
              <Option key="Despatched" value="Despatched">
                Despatched
              </Option>
              <Option key="Delivered" value="Delivered">
                Delivered
              </Option>
            </Select>
          </Col>
        </Row>
      </div>
      <Table
        dataSource={filteredOrders}
        columns={columns}
        locale={{ emptyText: "No orders found" }}
      />
    </div>
  );
}

export default App;
