import StatusBadge from "./StatusBadge";

export default function BookingRow({ booking, isExpanded, onToggle }) {
  return (
    <>
      <tr className="app-table-row">
        <td className="px-4 py-2">{booking.id}</td>
        <td className="px-4 py-2">{booking.customerName}</td>
        <td className="px-4 py-2">{booking.pickup}</td>
        <td className="px-4 py-2">{booking.drop}</td>
        <td className="px-4 py-2">
          <StatusBadge status={booking.status} />
        </td>
        <td className="px-4 py-2">{booking.amount}</td>
        <td className="px-4 py-2">{booking.date}</td>
        <td className="px-4 py-2 text-center">
          <button onClick={onToggle} className="app-expand-btn">
            <span
              className={
                "inline-block transition-transform duration-200 " +
                (isExpanded ? "rotate-180" : "")
              }
            >
              ▼
            </span>
          </button>
        </td>
      </tr>
      {isExpanded && (
        <tr className="app-details-row">
          <td colSpan={8} className="px-4 py-3">
            <div className="app-details-grid">
              <div>
                <span className="app-detail-label">Booking ID</span>
                <span className="app-detail-value">{booking.id}</span>
              </div>
              <div>
                <span className="app-detail-label">Customer Name</span>
                <span className="app-detail-value">
                  {booking.customerName}
                </span>
              </div>
              <div>
                <span className="app-detail-label">Booking Status</span>
                <span className="app-detail-value">{booking.status}</span>
              </div>
              <div>
                <span className="app-detail-label">Pickup Location</span>
                <span className="app-detail-value">{booking.pickup}</span>
              </div>
              <div>
                <span className="app-detail-label">Drop Location</span>
                <span className="app-detail-value">{booking.drop}</span>
              </div>
              <div>
                <span className="app-detail-label">Amount</span>
                <span className="app-detail-value">{booking.amount}</span>
              </div>
              <div>
                <span className="app-detail-label">Booking Date</span>
                <span className="app-detail-value">{booking.date}</span>
              </div>
              <div>
                <span className="app-detail-label">Driver</span>
                <span className="app-detail-value">
                  {booking.driverName}
                </span>
              </div>
              <div>
                <span className="app-detail-label">Vehicle No.</span>
                <span className="app-detail-value">{booking.vehicleNo}</span>
              </div>
              <div>
                <span className="app-detail-label">Est. Time</span>
                <span className="app-detail-value">
                  {booking.estimatedTime}
                </span>
              </div>
              <div>
                <span className="app-detail-label">Distance</span>
                <span className="app-detail-value">{booking.distance}</span>
              </div>
              <div>
                <span className="app-detail-label">Payment</span>
                <span className="app-detail-value">
                  {booking.paymentMethod}
                </span>
              </div>
              <div>
                <span className="app-detail-label">Notes</span>
                <span className="app-detail-value">{booking.notes}</span>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
