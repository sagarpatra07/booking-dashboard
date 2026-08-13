import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [expandedId, setExpandedId] = useState(null);
  const data = [
    {
      id: "BK-1001",
      customerName: "Aarav Sharma",
      pickup: "Terminal 3, IGIA, New Delhi",
      drop: "DLF Cyber City, Gurugram",
      status: "Confirmed",
      amount: "₹1,250",
      date: "2026-08-13",
      driverName: "Rajesh Kumar",
      vehicleNo: "DL 01 AB 1234",
      estimatedTime: "45 mins",
      distance: "18.5 km",
      paymentMethod: "UPI",
      notes:
        "Customer requested an AC sedan with extra boot space for luggage.",
    },
    {
      id: "BK-1002",
      customerName: "Priya Patel",
      pickup: "Bandra Kurla Complex, Mumbai",
      drop: "Chhatrapati Shivaji Airport, Mumbai",
      status: "In Transit",
      amount: "₹680",
      date: "2026-08-13",
      driverName: "Sunil Verma",
      vehicleNo: "MH 02 CZ 5678",
      estimatedTime: "25 mins",
      distance: "9.2 km",
      paymentMethod: "Credit Card",
      notes:
        "Driver reported slight traffic delay near Western Express Highway.",
    },
    {
      id: "BK-1003",
      customerName: "Rohan Nair",
      pickup: "Koramangala 5th Block, Bengaluru",
      drop: "Electronic City Phase 1, Bengaluru",
      status: "Cancelled",
      amount: "₹420",
      date: "2026-08-12",
      driverName: "N/A",
      vehicleNo: "N/A",
      estimatedTime: "N/A",
      distance: "14.0 km",
      paymentMethod: "Wallet",
      notes: "Cancelled by customer due to change in meeting schedule.",
    },
    {
      id: "BK-1004",
      customerName: "Ananya Sen",
      pickup: "Salt Lake Sector V, Kolkata",
      drop: "Howrah Railway Station, Kolkata",
      status: "Confirmed",
      amount: "₹350",
      date: "2026-08-14",
      driverName: "Amitabh Roy",
      vehicleNo: "WB 06 EF 9012",
      estimatedTime: "40 mins",
      distance: "15.1 km",
      paymentMethod: "Cash",
      notes: "Flight arriving early; customer requested prompt pickup.",
    },
    {
      id: "BK-1005",
      customerName: "Vikram Singh",
      pickup: "Hitech City, Hyderabad",
      drop: "Gachibowli, Hyderabad",
      status: "In Transit",
      amount: "₹290",
      date: "2026-08-13",
      driverName: "Mohammed Ali",
      vehicleNo: "TS 09 GH 3456",
      estimatedTime: "15 mins",
      distance: "6.8 km",
      paymentMethod: "UPI",
      notes: "Short trip; passenger carrying pet dog in carrier.",
    },
    {
      id: "BK-1006",
      customerName: "Neha Gupta",
      pickup: "Connaught Place, New Delhi",
      drop: "Noida Sector 62, Noida",
      status: "Confirmed",
      amount: "₹890",
      date: "2026-08-13",
      driverName: "Virender Tyagi",
      vehicleNo: "UP 14 JK 7890",
      estimatedTime: "50 mins",
      distance: "22.4 km",
      paymentMethod: "Credit Card",
      notes: "Corporate booking under account #CORP-8821.",
    },
    {
      id: "BK-1007",
      customerName: "Siddharth Rao",
      pickup: "MG Road, Pune",
      drop: "Hinjewadi IT Park, Pune",
      status: "Cancelled",
      amount: "₹550",
      date: "2026-08-11",
      driverName: "N/A",
      vehicleNo: "N/A",
      estimatedTime: "N/A",
      distance: "19.8 km",
      paymentMethod: "UPI",
      notes: "Driver unavailable within requested timeframe; auto-cancelled.",
    },
    {
      id: "BK-1008",
      customerName: "Meera Joshi",
      pickup: "Anna Nagar, Chennai",
      drop: "T. Nagar, Chennai",
      status: "Confirmed",
      amount: "₹310",
      date: "2026-08-14",
      driverName: "K. Saravanan",
      vehicleNo: "TN 07 LM 2345",
      estimatedTime: "20 mins",
      distance: "7.5 km",
      paymentMethod: "Cash",
      notes:
        "Senior citizen traveler; driver instructed to assist with seating.",
    },
    {
      id: "BK-1009",
      customerName: "Arjun Mehta",
      pickup: "C G Road, Ahmedabad",
      drop: "Sardar Vallabhbhai Patel Airport, Ahmedabad",
      status: "In Transit",
      amount: "₹480",
      date: "2026-08-13",
      driverName: "Pankaj Solanki",
      vehicleNo: "GJ 01 NP 6789",
      estimatedTime: "30 mins",
      distance: "12.3 km",
      paymentMethod: "UPI",
      notes: "Express highway route selected for fast delivery.",
    },
    {
      id: "BK-10010",
      customerName: "Kavya Reddy",
      pickup: "Banjara Hills, Hyderabad",
      drop: "Secunderabad Railway Station, Hyderabad",
      status: "Confirmed",
      amount: "₹410",
      date: "2026-08-14",
      driverName: "Suresh Reddy",
      vehicleNo: "TS 10 QR 0123",
      estimatedTime: "35 mins",
      distance: "11.0 km",
      paymentMethod: "Wallet",
      notes: "Scheduled early morning pickup at 05:30 AM.",
    },
    {
      id: "BK-10011",
      customerName: "Kabir Das",
      pickup: "Hazratganj, Lucknow",
      drop: "Chaudhary Charan Singh Airport, Lucknow",
      status: "Cancelled",
      amount: "₹620",
      date: "2026-08-10",
      driverName: "N/A",
      vehicleNo: "N/A",
      estimatedTime: "N/A",
      distance: "16.2 km",
      paymentMethod: "Credit Card",
      notes: "Duplicate booking created by mistake.",
    },
    {
      id: "BK-10012",
      customerName: "Diya Banerjee",
      pickup: "Park Street, Kolkata",
      drop: "New Town Rajarhat, Kolkata",
      status: "Confirmed",
      amount: "₹530",
      date: "2026-08-13",
      driverName: "Dipankar Das",
      vehicleNo: "WB 02 ST 4567",
      estimatedTime: "40 mins",
      distance: "17.4 km",
      paymentMethod: "UPI",
      notes: "Customer requested silent driver / quiet trip option.",
    },
  ];

  const filteredData = data.filter((booking) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = booking.customerName.toLowerCase().startsWith(query);
    const matchesStatus =
      statusFilter === "All" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="app-container">
      <h1 className="my-2 text-center text-4xl font-bold app-heading">
        Booking Log Dashboard
      </h1>
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="app-toolbar-meta">
            <h2 className="app-subheading">All Bookings</h2>
            <p className="app-subheading-count">
              {filteredData.length} of {data.length} entries
            </p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="app-search"
            >
              <option value="All">All Status</option>
              <option value="Confirmed">Confirmed</option>
              <option value="In Transit">In Transit</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="app-search"
            />
          </div>
        </div>
        <div className="app-table-card overflow-x-auto">
          <table className="app-table w-full">
            <thead>
              <tr className="app-table-head">
                <th className="px-4 py-2 text-left">Booking ID</th>
                <th className="px-4 py-2 text-left">Customer Name</th>
                <th className="px-4 py-2 text-left">Pickup Location</th>
                <th className="px-4 py-2 text-left">Drop Location</th>
                <th className="px-4 py-2 text-left">Booking Status</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Booking Date</th>
                <th className="px-4 py-2 text-center">More</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td
                    colSpan={8}
                    className="app-no-results px-4 py-6 text-center"
                  >
                    No bookings found matching your search.
                  </td>
                </tr>
              ) : (
                filteredData.map((booking) => (
                  <React.Fragment key={booking.id}>
                    <tr className="app-table-row">
                      <td className="px-4 py-2">{booking.id}</td>
                      <td className="px-4 py-2">{booking.customerName}</td>
                      <td className="px-4 py-2">{booking.pickup}</td>
                      <td className="px-4 py-2">{booking.drop}</td>
                      <td className="px-4 py-2">
                        <span className={"status-badge status-" + booking.status.toLowerCase().replace(" ", "-")}>{booking.status}</span>
                      </td>
                      <td className="px-4 py-2">{booking.amount}</td>
                      <td className="px-4 py-2">{booking.date}</td>
                      <td className="px-4 py-2 text-center">
                        <button
                          onClick={() =>
                            setExpandedId(
                              expandedId === booking.id ? null : booking.id
                            )
                          }
                          className="app-expand-btn"
                        >
                          <span
                            className={
                              "inline-block transition-transform duration-200 " +
                              (expandedId === booking.id
                                ? "rotate-180"
                                : "")
                            }
                          >
                            ▼
                          </span>
                        </button>
                      </td>
                    </tr>
                    {expandedId === booking.id && (
                      <tr className="app-details-row">
                        <td colSpan={8} className="px-4 py-3">
                          <div className="app-details-grid">
                            <div>
                              <span className="app-detail-label">
                                Booking ID
                              </span>
                              <span className="app-detail-value">
                                {booking.id}
                              </span>
                            </div>
                            <div>
                              <span className="app-detail-label">
                                Customer Name
                              </span>
                              <span className="app-detail-value">
                                {booking.customerName}
                              </span>
                            </div>
                            <div>
                              <span className="app-detail-label">
                                Booking Status
                              </span>
                              <span className="app-detail-value">
                                {booking.status}
                              </span>
                            </div>
                            <div>
                              <span className="app-detail-label">
                                Pickup Location
                              </span>
                              <span className="app-detail-value">
                                {booking.pickup}
                              </span>
                            </div>
                            <div>
                              <span className="app-detail-label">
                                Drop Location
                              </span>
                              <span className="app-detail-value">
                                {booking.drop}
                              </span>
                            </div>
                            <div>
                              <span className="app-detail-label">Amount</span>
                              <span className="app-detail-value">
                                {booking.amount}
                              </span>
                            </div>
                            <div>
                              <span className="app-detail-label">
                                Booking Date
                              </span>
                              <span className="app-detail-value">
                                {booking.date}
                              </span>
                            </div>
                            <div>
                              <span className="app-detail-label">Driver</span>
                              <span className="app-detail-value">
                                {booking.driverName}
                              </span>
                            </div>
                            <div>
                              <span className="app-detail-label">
                                Vehicle No.
                              </span>
                              <span className="app-detail-value">
                                {booking.vehicleNo}
                              </span>
                            </div>
                            <div>
                              <span className="app-detail-label">
                                Est. Time
                              </span>
                              <span className="app-detail-value">
                                {booking.estimatedTime}
                              </span>
                            </div>
                            <div>
                              <span className="app-detail-label">
                                Distance
                              </span>
                              <span className="app-detail-value">
                                {booking.distance}
                              </span>
                            </div>
                            <div>
                              <span className="app-detail-label">
                                Payment
                              </span>
                              <span className="app-detail-value">
                                {booking.paymentMethod}
                              </span>
                            </div>
                            <div>
                              <span className="app-detail-label">Notes</span>
                              <span className="app-detail-value">
                                {booking.notes}
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
